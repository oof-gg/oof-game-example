const protobuf = require('protobufjs');
const net = require('net');

const gameWidth = 390;
const gameHeight = 844;

let sessions = {};

const createNewGameState = () => ({
  paddles: {}, // Store paddle positions by player ID
  ball: {
    x: Math.floor(gameWidth / 2),
    y: Math.floor(gameHeight / 2),
    dx: 8,
    dy: 8,
  }, // Ball position and velocity
});

// Load protobuf definitions
const root = protobuf.loadSync('path/to/your/protobuf/definitions.proto');
const GameEvent = root.lookupType('GameEvent');
const InitPayload = root.lookupType('');

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    const message = GameEvent.decode(data);
    handleGameEvent(message, socket);
  });

  socket.on('end', () => {
    handleDisconnect(socket);
  });
});

const handleGameEvent = (message, socket) => {
  switch (message.type) {
    case 'JOIN_SESSION':
      handleJoinSession(message.payload, socket);
      break;
    case 'UPDATE_PADDLE':
      handleUpdatePaddle(message.payload);
      break;
    // Add more cases as needed
  }
};

const handleJoinSession = (payload, socket) => {
  const sessionId = payload.sessionId;
  const playerName = payload.playerName;
  const playerId = socket.remoteAddress + ':' + socket.remotePort;

  if (!sessions[sessionId]) {
    sessions[sessionId] = {
      players: [],
      gameState: createNewGameState(),
    };
  }

  const session = sessions[sessionId];
  let playerRole = 'bottom';
  let bottomPlayer = session.players.find((player) => player.role === 'bottom');
  if (bottomPlayer) {
    playerRole = 'top';
  }

  const player = { id: playerId, name: playerName, role: playerRole };

  if (!session.players.find((player) => player.name === playerName)) {
    session.players.push(player);
  } else {
    session.players = session.players.map((player) => {
      if (player.name === playerName) {
        player.id = playerId;
      }
      return player;
    });
  }

  session.gameState.paddles[playerName] = { x: Math.floor(gameWidth / 2) };

  const initPayload = InitPayload.create({ playerName, playerRole, gameState: session.gameState, gameWidth, gameHeight });
  const buffer = InitPayload.encode(initPayload).finish();
  socket.write(buffer);
};

const handleUpdatePaddle = (payload) => {
  const sessionId = payload.sessionId;
  const session = sessions[sessionId];
  if (session) {
    session.gameState.paddles[payload.playerName] = { x: payload.x, y: payload.y, width: payload.width, height: payload.height };
  }
};

const handleDisconnect = (socket) => {
  const playerId = socket.remoteAddress + ':' + socket.remotePort;
  for (const sessionId in sessions) {
    const session = sessions[sessionId];
    let playerName = '';
    session.players = session.players.filter((player) => {
      if (player.id === playerId) {
        playerName = player.name;
      }
      return player.id !== playerId;
    });
    delete session.gameState.paddles[playerName];
    if (session.players.length === 0) {
      delete sessions[sessionId];
    }
  }
};

setInterval(() => {
  for (const sessionId in sessions) {
    const session = sessions[sessionId];
    const ball = session.gameState.ball;
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.x <= 0 || ball.x >= gameWidth) ball.dx *= -1;
    if (ball.y <= 0 || ball.y >= gameHeight) ball.dy *= -1;

    for (const playerName in session.gameState.paddles) {
      const paddle = session.gameState.paddles[playerName];
      if (ball.x > paddle.x && ball.x < paddle.x + paddle.width && ball.y > paddle.y && ball.y < paddle.y + paddle.height) {
        ball.dy *= -1;
      }
    }

    if (session.players.length > 0) {
      const gameStateUpdate = GameEvent.create({ type: 'STATE_UPDATE', payload: { gameState: session.gameState } });
      const buffer = GameEvent.encode(gameStateUpdate).finish();
      session.players.forEach((player) => {
        player.socket.write(buffer);
      });
    }
  }
}, 1000 / 30); // 30 FPS
