import Game from "./scripts/game";
import GameNavigation from "./scripts/navigation";
import { v1_api_game_instance_pb } from '@oof.gg/protobuf-ts-web';
import { GameSDK, SDKConfig, GameInterface } from '@oof.gg/sdk';

export default class main implements GameInterface {
  private game: Game;
  private oof: GameSDK;
  private token: string;
  private config: any;
  private playerName: string | null = null;
  private isInverted = false // Assume the opponent is at the top
  private navigation: GameNavigation;
  private sessionId: string;

  constructor(canvas: HTMLCanvasElement, config: any, shadowRoot: ShadowRoot) {   
    const sdkConfig: SDKConfig = {
      token: config.authConfig.token,
      socketUrl: 'ws://local-api.oof.gg:8081/api/ws/instance',
      apiUrl: 'http://local-api.oof.gg:80',
      workerUrl: `/games/${config.gameId}/workers/worker.js`,
    }

    console.log('Creating game with config:', config);
    
    // Initialize the game configuration
    this.config = {
      config: config,
      playerName: config.playerId,
      authConfig: config.authConfig,
      gameId: config.gameId,
      shadowRoot: shadowRoot,
      token: config.authConfig.token,
      sdk: sdkConfig
    }

    // Initialize the SDK
    this.sessionId = config.sessionId || '';
    this.token      = this.config.authConfig.token || '';
    this.oof        = new GameSDK();
    this.navigation = new GameNavigation(canvas);
    this.playerName = this.config.playerId || null;
    
    // Global Settings
    this.game   = new Game(canvas, config);
    this.initConfig(this.config);
  }

  initConfig(config: any): void {
    // Set the game configuration
    console.log('Initializing game with config:', config.sdk);
    this.oof.init(config.sdk);

    // Create and show navigation overlay on game load
    this.navigation.onJoinGame( async () => {
      // Trigger join game action via your SDK call
      const result = await this.oof.api.game.joinGame(this.config.playerName, this.config.gameId);
      const response = this.oof.api.game.handleResponse(result);
      console.log('Response:', response);
      if(response.session) {
        // Store the sessionId in local storage
        this.sessionId = response.session.id;
        await this.oof.api.game.setSessionId(response.session.id);
        await this.oof.connect(this.token, this.sessionId)
        // connect to the game using the sessionId via websocket
        this.oof.events.web.game.emit('CLIENT_CONNECTED', {
          playerName: this.config.playerId,
          gameId: this.config.gameId,
          sessionId: this.sessionId,
          gameWidth: this.config.gameWidth,
          gameHeight: this.config.gameHeight,
          playerRole: this.config.playerRole,
          gameState: this.config.gameState
        });

        this.start();
        // HIDE THE NAVIGATION
        this.navigation.hideButton();
        // TODO: Connect to the game using the sessionId 
      }
    });
  }

  load = async () => {
    const self = this;

    await this.oof.connect(this.token, this.sessionId);

    const payload = {
      state: v1_api_game_instance_pb.InstanceCommandEnum.START,
      playerName: this.config.playerId,
    }

    // Listen for messages from the main thread
    // Close Button that triggers the ABORT event


    const closeButton = this.config.shadowRoot.querySelector('#closeButton');
    closeButton?.addEventListener('click', () => {
      console.log('[Game] Close button clicked');
      const payload = {
        state: 'ABORT',
        playerName: this.config.playerId,
      }
      this.oof.events.local.emit('CLOSE', payload, this.config.shadowRoot);
    });

    // Start the game using the start method below


  }

  start = async () => {
    console.log('[Game] Starting game');

    this.oof.events.web.game.on('SERVER_CONNECTED', (data) => {
      console.log('[Game] Server connected:', data);
      this.oof.events.web.game.emit('REGISTER_PLAYER', {
          playerName: this.config.playerId,
          gameId: this.config.gameId,
          sessionId: this.sessionId,
          gameWidth: this.config.gameWidth,
          gameHeight: this.config.gameHeight,
          playerRole: this.config.playerRole,
          gameState: this.config.gameState
        }
      );
    });

    // Subscribe to web game events
    this.oof.events.web.game.on('INIT', (data) => {
      console.log('[Game] INIT event received:', data);
      this.playerName = data.playerId || null;
      this.isInverted = data.playerRole === "top";
      this.game.setInitialState(data.playerName, data.gameState, data.playerRole, data.gameWidth, data.gameHeight);
      this.playerName = data.playerName;
    });

    // Subscribe to web game events
    this.oof.events.web.game.on('STATE_UPDATE', (data) => {
      if(this.game.isStarted() === true)
        this.game.updateState(data.gameState);
    });

    //TODO: Add SDK to the game so that playerauth can be done
    this.game.onPaddleMove((x: number, y: number, width: number, height: number) => {

      const payload = {
        x: x,
        y: y,
        width: width,
        height: height,
        playerName: this.playerName,
      }

      this.oof.events.web.game.emit('UPDATE_PADDLE', payload);
    });
  }

  pause = async () => {
    console.log('Pausing game');
  }

  resume = async () => {
    console.log('Resuming game');
  }

  stop = async () => {
    console.log('Stopping game');
  }

  unload = async () => {
    console.log('Unloading game');
    this.oof.events.local.off('CLOSE');
    this.oof.disconnect();
    this.game.unload();
  }
}