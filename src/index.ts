import Game from "./scripts/game";
import { game_instance } from '@oof.gg/protobuf-ts';
import { GameSDK, SDKConfig, GameInterface } from '@oof.gg/sdk';

export default class main implements GameInterface {
  private game: Game;
  private oof: GameSDK;
  private token: string;
  private config: any;
  private playerName: string | null = null;
  private isInverted = false // Assume the opponent is at the top

  constructor(canvas: HTMLCanvasElement, config: game_instance.InstanceCommandMessage, shadowRoot: ShadowRoot) {   
    const sdkConfig: SDKConfig = {
      authUrl: '/auth',
      socketUrl: 'ws://0.0.0.0:9090',
      apiUrl: '/api',
      workerUrl: '/games/workers/worker.js',
    }
    
    this.config = {
      config: config,
      playerId: config.playerId,
      authConfig: config.authConfig,
      shadowRoot: shadowRoot,
      sdk: sdkConfig
    }
    this.token = config.authConfig?.token || '';
    this.oof    = new GameSDK();
    
    // Global Settings
    this.game   = new Game(canvas, config);
    this.initConfig(this.config);
  }

  initConfig(config: any): void {
    // Set the game configuration
    console.log('Initializing game with config:', config.sdk);
    this.oof.init(config.sdk);
  }

  load = async () => {
    console.log('Loading game');
    await this.oof.connect(this.token);

  const payload = {
    state: game_instance.InstanceCommandEnum.START,
    playerName: this.config.playerId,
  }

  //TODO: Change to use SDK/protobufs
  this.oof.events.web.game.emit('REGISTER_PLAYER', payload);

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
  }

  start = async () => {
    console.log('[Game] Starting game');

    // Subscribe to web game events
    this.oof.events.web.game.on('INIT', (data) => {
      console.log('[Game] INIT event received:', data);
      this.playerName = data.playerId || null;
      this.isInverted = data.playerRole === "top";
      this.game.setInitialState(data.playerName, data.gameState, data.playerRole, data.gameWidth, data.gameHeight);
      this.playerName = data.playerName;
      this.game.start();
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