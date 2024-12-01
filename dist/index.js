import Game from "./scripts/game";
import { game_instance } from '@oof.gg/protobuf-ts';
import { GameSDK } from '@oof.gg/sdk';
export const main = async (canvas, config) => {
    const gameConfig = config.authConfig?.config;
    const sdkConfig = {
        authUrl: '/auth',
        socketUrl: 'ws://0.0.0.0:9090',
        apiUrl: '/api',
    };
    const sdk = new GameSDK(sdkConfig);
    let game = null;
    const token = 'your-jwt-token';
    await sdk.connect(token);
    let playerName = null;
    let isInverted = false; // Assume the opponent is at the top
    const payload = {
        state: game_instance.InstanceCommandEnum.START,
        playerName: config.playerId,
    };
    //TODO: Change to use SDK/protobufs
    sdk.events.websocket.game.emit('REGISTER_PLAYER', payload);
    // Listen for messages from the main thread
    game = new Game(canvas, config);
    // Subscribe to WebSocket game events
    sdk.events.websocket.game.on('INIT', (data) => {
        playerName = data.playerId || null;
        isInverted = data.playerRole === "top";
        game.setInitialState(data.playerName, data.gameState, data.playerRole, data.gameWidth, data.gameHeight);
        playerName = data.playerName;
        game.start();
    });
    sdk.events.websocket.game.on('STATE_UPDATE', (data) => {
        game.updateState(data.gameState);
    });
    sdk.events.local.on(game_instance.InstanceCommandEnum.ABORT, (data) => {
        console.log('ABORT event received:', data);
    });
    sdk.events.local.on(game_instance.InstanceCommandEnum.STOP, (data) => {
        console.log('STOP event received:', data);
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
        sdk.events.websocket.game.emit('UPDATE_PADDLE', payload);
    });
    //Close Button that triggers the ABORT event
    const closeButton = document.getElementById('closeButton');
    closeButton?.addEventListener('click', () => {
        sdk.events.local.emit(game_instance.InstanceCommandEnum.ABORT, {});
    });
};
