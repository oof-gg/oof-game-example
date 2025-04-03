import * as jspb from 'google-protobuf'



export class Instance extends jspb.Message {
  getState(): InstanceStateEnum;
  setState(value: InstanceStateEnum): Instance;

  getGameId(): string;
  setGameId(value: string): Instance;
  hasGameId(): boolean;
  clearGameId(): Instance;

  getPlayerId(): string;
  setPlayerId(value: string): Instance;
  hasPlayerId(): boolean;
  clearPlayerId(): Instance;

  getData(): string;
  setData(value: string): Instance;
  hasData(): boolean;
  clearData(): Instance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Instance.AsObject;
  static toObject(includeInstance: boolean, msg: Instance): Instance.AsObject;
  static serializeBinaryToWriter(message: Instance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Instance;
  static deserializeBinaryFromReader(message: Instance, reader: jspb.BinaryReader): Instance;
}

export namespace Instance {
  export type AsObject = {
    state: InstanceStateEnum,
    gameId?: string,
    playerId?: string,
    data?: string,
  }

  export enum GameIdCase { 
    _GAME_ID_NOT_SET = 0,
    GAME_ID = 2,
  }

  export enum PlayerIdCase { 
    _PLAYER_ID_NOT_SET = 0,
    PLAYER_ID = 3,
  }

  export enum DataCase { 
    _DATA_NOT_SET = 0,
    DATA = 4,
  }
}

export class InstanceNotification extends jspb.Message {
  getState(): InstanceStateEnum;
  setState(value: InstanceStateEnum): InstanceNotification;

  getGameId(): string;
  setGameId(value: string): InstanceNotification;
  hasGameId(): boolean;
  clearGameId(): InstanceNotification;

  getPlayerId(): string;
  setPlayerId(value: string): InstanceNotification;
  hasPlayerId(): boolean;
  clearPlayerId(): InstanceNotification;

  getData(): string;
  setData(value: string): InstanceNotification;
  hasData(): boolean;
  clearData(): InstanceNotification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstanceNotification.AsObject;
  static toObject(includeInstance: boolean, msg: InstanceNotification): InstanceNotification.AsObject;
  static serializeBinaryToWriter(message: InstanceNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstanceNotification;
  static deserializeBinaryFromReader(message: InstanceNotification, reader: jspb.BinaryReader): InstanceNotification;
}

export namespace InstanceNotification {
  export type AsObject = {
    state: InstanceStateEnum,
    gameId?: string,
    playerId?: string,
    data?: string,
  }

  export enum GameIdCase { 
    _GAME_ID_NOT_SET = 0,
    GAME_ID = 2,
  }

  export enum PlayerIdCase { 
    _PLAYER_ID_NOT_SET = 0,
    PLAYER_ID = 3,
  }

  export enum DataCase { 
    _DATA_NOT_SET = 0,
    DATA = 4,
  }
}

export class InstanceCommandMessage extends jspb.Message {
  getState(): InstanceCommandEnum;
  setState(value: InstanceCommandEnum): InstanceCommandMessage;

  getGameId(): string;
  setGameId(value: string): InstanceCommandMessage;
  hasGameId(): boolean;
  clearGameId(): InstanceCommandMessage;

  getPlayerId(): string;
  setPlayerId(value: string): InstanceCommandMessage;
  hasPlayerId(): boolean;
  clearPlayerId(): InstanceCommandMessage;

  getData(): string;
  setData(value: string): InstanceCommandMessage;
  hasData(): boolean;
  clearData(): InstanceCommandMessage;

  getAuthConfig(): AuthConfig | undefined;
  setAuthConfig(value?: AuthConfig): InstanceCommandMessage;
  hasAuthConfig(): boolean;
  clearAuthConfig(): InstanceCommandMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstanceCommandMessage.AsObject;
  static toObject(includeInstance: boolean, msg: InstanceCommandMessage): InstanceCommandMessage.AsObject;
  static serializeBinaryToWriter(message: InstanceCommandMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstanceCommandMessage;
  static deserializeBinaryFromReader(message: InstanceCommandMessage, reader: jspb.BinaryReader): InstanceCommandMessage;
}

export namespace InstanceCommandMessage {
  export type AsObject = {
    state: InstanceCommandEnum,
    gameId?: string,
    playerId?: string,
    data?: string,
    authConfig?: AuthConfig.AsObject,
  }

  export enum GameIdCase { 
    _GAME_ID_NOT_SET = 0,
    GAME_ID = 2,
  }

  export enum PlayerIdCase { 
    _PLAYER_ID_NOT_SET = 0,
    PLAYER_ID = 3,
  }

  export enum DataCase { 
    _DATA_NOT_SET = 0,
    DATA = 4,
  }

  export enum AuthConfigCase { 
    _AUTH_CONFIG_NOT_SET = 0,
    AUTH_CONFIG = 5,
  }
}

export class AuthConfig extends jspb.Message {
  getToken(): string;
  setToken(value: string): AuthConfig;

  getConfigMap(): jspb.Map<string, string>;
  clearConfigMap(): AuthConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AuthConfig): AuthConfig.AsObject;
  static serializeBinaryToWriter(message: AuthConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthConfig;
  static deserializeBinaryFromReader(message: AuthConfig, reader: jspb.BinaryReader): AuthConfig;
}

export namespace AuthConfig {
  export type AsObject = {
    token: string,
    configMap: Array<[string, string]>,
  }
}

export enum InstanceStateEnum { 
  INITIALIZING = 0,
  RUNNING = 1,
  PAUSED = 2,
  CRASHED = 3,
  ABORTED = 4,
  SHUTTING_DOWN = 5,
  STOPPED = 6,
}
export enum InstanceCommandEnum { 
  START = 0,
  PAUSE = 1,
  RESUME = 2,
  STOP = 3,
  ABORT = 4,
  SHUTDOWN = 5,
}
