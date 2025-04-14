import Game from "./scripts/game";
import GameNavigation from "./scripts/navigation";
import { v1_api_game_instance_pb } from '@oof.gg/protobuf-ts-web';
import { GameSDK, SDKConfig, GameInterface } from '@oof.gg/sdk';

export default class main implements GameInterface {
  private game: Game;
  private oof: GameSDK;
  private token: string;
  private config: any;
  private playerId: string | null = null;
  private isInverted = false // Assume the opponent is at the top
  private navigation: GameNavigation;
  private sessionId: string;
  private hasRegistered: boolean = false;

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
      playerId: config.playerId,
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
    this.playerId = this.config.playerId || null;
    
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
      const result = await this.oof.api.game.joinGame(this.config.playerId, this.config.gameId);
      const response = this.oof.api.game.handleResponse(result);
      console.log('Response:', response);
      if(response.session) {
        // Store the sessionId in local storage
        this.sessionId = response.session.id;
        await this.oof.api.game.setSessionId(response.session.id);
        await this.oof.connect(this.token, this.sessionId)
        
        // connect to the game using the sessionId via websocket
        console.log('Connected to game with sessionId:', this.sessionId);
        
        // Emit the CLIENT_CONNECTED event
        this.oof.events.web.game.emit('CLIENT_CONNECTED', {
          player_id: this.config.playerId,
          game_id: this.config.gameId,
          session_id: this.sessionId
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

    // Listen for messages from the main thread
    // Close Button that triggers the ABORT event
    const closeButton = this.config.shadowRoot.querySelector('#closeButton');
    closeButton?.addEventListener('click', () => {
      console.log('Close button clicked');
      const payload = {
        state: 'ABORT'
      }
      this.oof.events.local.emit('CLOSE', payload, this.config.shadowRoot);
    });
  }

  start = async () => {
    console.log('[Start] Starting game');
    // Subscribe to Server Connected event
      this.oof.events.web.game.on('TYPE_SYSTEM', (data) => {
        console.log('[Start] Received event:', data);
        if (data.event_name === 'SERVER_CONNECTED') {
          console.log('[Start] Server connected:', data);
          if(!this.hasRegistered) {
            this.hasRegistered = true;
            // Register the player with the game server
            this.oof.events.web.game.emit('REGISTER_PLAYER', {
                player_id: this.config.playerId,
                game_id: this.config.gameId,
                session_id: this.sessionId
              }
            );
          }
        }
      });

      // Start the game using the start method below
      // Subscribe to web game events
      this.oof.events.web.game.on('TYPE_GAME_EVENT', (ev) => {
        if(ev.event_name === 'INIT') {
          this.playerId = ev.data.playerName || null;
          this.isInverted = ev.data.playerRole === "top";
          
          // Set the initial state of the game
          this.game.setInitialState(ev.data.playerName, ev.data.gameState, ev.data.playerRole, ev.data.gameWidth, ev.data.gameHeight);
          this.playerId = ev.data.playerName;

          // Start the game AFTER initial state is set
          this.game.start();

          //TODO: Add SDK to the game so that playerauth can be done
          this.game.onPaddleMove((x: number, y: number, width: number, height: number) => {
            const payload = {
              playerId: this.playerId,
              gameId: this.config.gameId,
              sessionId: this.sessionId,
              data: {
                x: x,
                y: y,
                width: width,
                height: height,
                playerId: this.playerId,
              }
            }

            this.oof.events.web.game.emit('UPDATE_PADDLE', payload);
          });

        }

        if(ev.event_name === 'STATE_UPDATE') {
          this.game.updateState(ev.data);
        }
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