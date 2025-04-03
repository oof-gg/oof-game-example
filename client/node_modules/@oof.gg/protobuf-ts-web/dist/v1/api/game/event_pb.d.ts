import * as jspb from 'google-protobuf'



export class GameEvent extends jspb.Message {
  getId(): string;
  setId(value: string): GameEvent;
  hasId(): boolean;
  clearId(): GameEvent;

  getEventName(): string;
  setEventName(value: string): GameEvent;
  hasEventName(): boolean;
  clearEventName(): GameEvent;

  getTimestamp(): number;
  setTimestamp(value: number): GameEvent;

  getGameId(): string;
  setGameId(value: string): GameEvent;
  hasGameId(): boolean;
  clearGameId(): GameEvent;

  getPlayerId(): string;
  setPlayerId(value: string): GameEvent;
  hasPlayerId(): boolean;
  clearPlayerId(): GameEvent;

  getSessionId(): string;
  setSessionId(value: string): GameEvent;
  hasSessionId(): boolean;
  clearSessionId(): GameEvent;

  getTeamId(): string;
  setTeamId(value: string): GameEvent;
  hasTeamId(): boolean;
  clearTeamId(): GameEvent;

  getAttributesMap(): jspb.Map<string, GameEvent.EventAttribute>;
  clearAttributesMap(): GameEvent;

  getType(): GameEvent.EventType;
  setType(value: GameEvent.EventType): GameEvent;

  getData(): string;
  setData(value: string): GameEvent;
  hasData(): boolean;
  clearData(): GameEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameEvent.AsObject;
  static toObject(includeInstance: boolean, msg: GameEvent): GameEvent.AsObject;
  static serializeBinaryToWriter(message: GameEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameEvent;
  static deserializeBinaryFromReader(message: GameEvent, reader: jspb.BinaryReader): GameEvent;
}

export namespace GameEvent {
  export type AsObject = {
    id?: string,
    eventName?: string,
    timestamp: number,
    gameId?: string,
    playerId?: string,
    sessionId?: string,
    teamId?: string,
    attributesMap: Array<[string, GameEvent.EventAttribute.AsObject]>,
    type: GameEvent.EventType,
    data?: string,
  }

  export class EventAttribute extends jspb.Message {
    getStringValue(): string;
    setStringValue(value: string): EventAttribute;

    getIntValue(): number;
    setIntValue(value: number): EventAttribute;

    getFloatValue(): number;
    setFloatValue(value: number): EventAttribute;

    getBoolValue(): boolean;
    setBoolValue(value: boolean): EventAttribute;

    getValueCase(): EventAttribute.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventAttribute.AsObject;
    static toObject(includeInstance: boolean, msg: EventAttribute): EventAttribute.AsObject;
    static serializeBinaryToWriter(message: EventAttribute, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventAttribute;
    static deserializeBinaryFromReader(message: EventAttribute, reader: jspb.BinaryReader): EventAttribute;
  }

  export namespace EventAttribute {
    export type AsObject = {
      stringValue: string,
      intValue: number,
      floatValue: number,
      boolValue: boolean,
    }

    export enum ValueCase { 
      VALUE_NOT_SET = 0,
      STRING_VALUE = 1,
      INT_VALUE = 2,
      FLOAT_VALUE = 3,
      BOOL_VALUE = 4,
    }
  }


  export enum EventType { 
    TYPE_UNSPECIFIED = 0,
    TYPE_ACTION = 1,
    TYPE_GAME_EVENT = 2,
    TYPE_SYSTEM = 3,
    TYPE_COMPLETION = 4,
  }

  export enum IdCase { 
    _ID_NOT_SET = 0,
    ID = 1,
  }

  export enum EventNameCase { 
    _EVENT_NAME_NOT_SET = 0,
    EVENT_NAME = 2,
  }

  export enum GameIdCase { 
    _GAME_ID_NOT_SET = 0,
    GAME_ID = 4,
  }

  export enum PlayerIdCase { 
    _PLAYER_ID_NOT_SET = 0,
    PLAYER_ID = 5,
  }

  export enum SessionIdCase { 
    _SESSION_ID_NOT_SET = 0,
    SESSION_ID = 7,
  }

  export enum TeamIdCase { 
    _TEAM_ID_NOT_SET = 0,
    TEAM_ID = 8,
  }

  export enum DataCase { 
    _DATA_NOT_SET = 0,
    DATA = 11,
  }
}

