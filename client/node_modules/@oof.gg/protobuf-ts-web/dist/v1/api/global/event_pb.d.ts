import * as jspb from 'google-protobuf'



export class GlobalEvent extends jspb.Message {
  getId(): string;
  setId(value: string): GlobalEvent;

  getEventName(): string;
  setEventName(value: string): GlobalEvent;

  getTimestamp(): number;
  setTimestamp(value: number): GlobalEvent;

  getGameId(): string;
  setGameId(value: string): GlobalEvent;
  hasGameId(): boolean;
  clearGameId(): GlobalEvent;

  getPlayerId(): string;
  setPlayerId(value: string): GlobalEvent;
  hasPlayerId(): boolean;
  clearPlayerId(): GlobalEvent;

  getTeamId(): string;
  setTeamId(value: string): GlobalEvent;
  hasTeamId(): boolean;
  clearTeamId(): GlobalEvent;

  getAttributesMap(): jspb.Map<string, GlobalEvent.EventAttribute>;
  clearAttributesMap(): GlobalEvent;

  getType(): GlobalEvent.EventType;
  setType(value: GlobalEvent.EventType): GlobalEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GlobalEvent.AsObject;
  static toObject(includeInstance: boolean, msg: GlobalEvent): GlobalEvent.AsObject;
  static serializeBinaryToWriter(message: GlobalEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GlobalEvent;
  static deserializeBinaryFromReader(message: GlobalEvent, reader: jspb.BinaryReader): GlobalEvent;
}

export namespace GlobalEvent {
  export type AsObject = {
    id: string,
    eventName: string,
    timestamp: number,
    gameId?: string,
    playerId?: string,
    teamId?: string,
    attributesMap: Array<[string, GlobalEvent.EventAttribute.AsObject]>,
    type: GlobalEvent.EventType,
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
    CUSTOM = 0,
    ANNOUNCEMENT = 1,
    ALERT = 2,
    EVENT = 3,
    REQUEST = 4,
  }

  export enum GameIdCase { 
    _GAME_ID_NOT_SET = 0,
    GAME_ID = 4,
  }

  export enum PlayerIdCase { 
    _PLAYER_ID_NOT_SET = 0,
    PLAYER_ID = 5,
  }

  export enum TeamIdCase { 
    _TEAM_ID_NOT_SET = 0,
    TEAM_ID = 6,
  }
}

