const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 9090 })

let players = [];
let gameWidth = 390
let gameHeight = 844;

let gameState = {
  paddles: {}, // Store paddle positions by player ID
  ball: {
    x: Math.floor(gameWidth / 2),
    y: Math.floor(gameHeight / 2),
    dx: 8,
    dy: 8,
  }, // Ball position and velocity
}

wss.on('connection', (ws) => {
  const playerId = Math.random().toString(36).substring(2, 9) // Generate unique ID
  console.log(`Player connected: ${playerId}`)


  // Handle incoming messages from clients
  ws.on('message', (data) => {
    const message = JSON.parse(data)

    if (message.type === 'REGISTER_PLAYER') {
      // Register the new player
      const canvasWidth = message.canvasWidth
      const canvasHeight = message.canvasHeight
      console.log(`Player registered: ${message.playerName}`)
      const playerName = message.playerName
      
      let playerRole = 'bottom'
      // if a player is already on the bottom, the new player will be on the top (check explicitly)
      let bottomPlayer = players.find(player => player.role === 'bottom');
      if(bottomPlayer) {
        playerRole = 'top'
      }

      // create player object to track player id and name for the position
      const player = { id: playerId, name: playerName, role: playerRole }

      // Add the new player to the player array if it doesn't already exist
      if (!players.find((player) => player.name === playerName)) {
        players.push(player)
      } else {
        // if the player already exists, update the player id
        players = players.map((player) => {
          if (player.name === playerName) {
            player.id = playerId
          }
          return player
        }
        )
      }

      console.log(`Players: ${players.map(player => player.name)}`)

      // Initialize paddle position for the new player
      gameState.paddles[playerName] = { x: Math.floor(gameWidth/2) }

      // Send the initial game state to the new player
      ws.send(
        JSON.stringify({ type: 'INIT', playerName, playerRole, gameState, gameWidth, gameHeight })
      )
    }

    if (message.type === 'UPDATE_PADDLE') {
      // Update paddle position from client
      gameState.paddles[message.playerName] = { x: message.x, y: message.y, width: message.width, height: message.height }
      console.log(`Player ${message.playerName} moved paddle to ${message.x}`)
    }

  })

  // Remove player on disconnect
  ws.on('close', () => {
    let playerName = '';
    players = players.filter((player) => {
      if(player.id === playerId) {
        playerName = player.name;
      }
      return player.id !== playerId
    })
    delete gameState.paddles[playerName]
  })
})

// Broadcast game state at 60 FPS
setInterval(() => {
  // Update ball position (basic physics)
  const ball = gameState.ball
  ball.x += ball.dx
  ball.y += ball.dy

  // Bounce off walls
  if (ball.x <= 0 || ball.x >= gameWidth) ball.dx *= -1
  if (ball.y <= 0 || ball.y >= gameHeight) ball.dy *= -1

  // consider that the paddles are at the top and the bottom of the canvas
  // consider for both players, they act as the bottom player, and because of that we need to change the player OR the ball position when calculating the collision (mirror x and y for paddle and ball for 1 player) when checking for collision


  // Check for paddle collisions
  for (const playerName in gameState.paddles) {
    const paddle = gameState.paddles[playerName]

    // bottom player
    if(ball.x > paddle.x && ball.x < paddle.x + paddle.width && ball.y > paddle.y && ball.y < paddle.y + paddle.height) {
      ball.dy *= -1
    }
  }

  // Broadcast the game state to all players
  const stateUpdate = JSON.stringify({ type: 'STATE_UPDATE', gameState })
  if(players.length > 0) {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(stateUpdate)
      }
    })
  }
}, 1000 / 30) // 30 FPS
