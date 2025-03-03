import Game from "./scripts/game";
import { game_instance } from '@oof.gg/protobuf-ts';
import { GameSDK } from '@oof.gg/sdk';
export const main = async (canvas, config, shadowRoot) => {
    const gameConfig = config.authConfig?.config;

    const closeButton = shadowRoot.querySelector('#closeButton');
    closeButton?.addEventListener('click', () => {
        console.log('Close button clicked');
        const payload = {
            state: 'ABORT',
            playerName: config.playerId,
        };
        oof.events.local.emit('ABORT', payload);
    });

    const sdkConfig = {
        authUrl: '/auth',
        socketUrl: 'ws://0.0.0.0:9090',
        apiUrl: '/api',
    };
    const oof = new GameSDK();
    oof.init(sdkConfig);
    let game = null;
    const token = 'your-jwt-token';
    await oof.connect(token);
    let playerName = null;
    let isInverted = false; // Assume the opponent is at the top
    const payload = {
        state: game_instance.InstanceCommandEnum.START,
        playerName: config.playerId,
    };
    //TODO: Change to use SDK/protobufs
    oof.events.web.game.emit('REGISTER_PLAYER', payload);
    // Listen for messages from the main thread
    game = new Game(canvas, config);

    // Subscribe to web game events
    oof.events.web.game.on('INIT', (data) => {
        playerName = data.playerId || null;
        isInverted = data.playerRole === "top";
        game.setInitialState(data.playerName, data.gameState, data.playerRole, data.gameWidth, data.gameHeight);
        playerName = data.playerName;
        game.start();
    });

    oof.events.web.game.on('STATE_UPDATE', (data) => {
        game.updateState(data.gameState);
    });

    //TODO: Add SDK to the game so that playerauth can be done
    game.onPaddleMove((x, y, width, height) => {
        const payload = {
            x: x,
            y: y,
            width: width,
            height: height,
            playerName: playerName,
        };
        oof.events.web.game.emit('UPDATE_PADDLE', payload);
    });
    //Close Button that triggers the ABORT event
    console.log('Adding event listener for close button', shadowRoot);
};
