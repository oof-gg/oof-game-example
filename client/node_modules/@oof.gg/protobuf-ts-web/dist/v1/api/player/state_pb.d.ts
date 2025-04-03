import * as jspb from 'google-protobuf'



export class State extends jspb.Message {
  getPlayerId(): string;
  setPlayerId(value: string): State;

  getSessionId(): string;
  setSessionId(value: string): State;

  getGameId(): string;
  setGameId(value: string): State;

  getState(): State.PlayerState;
  setState(value: State.PlayerState): State;

  getAttributesMap(): jspb.Map<string, State.PlayerAttribute>;
  clearAttributesMap(): State;

  getTimestamp(): number;
  setTimestamp(value: number): State;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): State.AsObject;
  static toObject(includeInstance: boolean, msg: State): State.AsObject;
  static serializeBinaryToWriter(message: State, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): State;
  static deserializeBinaryFromReader(message: State, reader: jspb.BinaryReader): State;
}

export namespace State {
  export type AsObject = {
    playerId: string,
    sessionId: string,
    gameId: string,
    state: State.PlayerState,
    attributesMap: Array<[string, State.PlayerAttribute.AsObject]>,
    timestamp: number,
  }

  export class PlayerAttribute extends jspb.Message {
    getStringValue(): string;
    setStringValue(value: string): PlayerAttribute;

    getIntValue(): number;
    setIntValue(value: number): PlayerAttribute;

    getFloatValue(): number;
    setFloatValue(value: number): PlayerAttribute;

    getBoolValue(): boolean;
    setBoolValue(value: boolean): PlayerAttribute;

    getValueCase(): PlayerAttribute.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayerAttribute.AsObject;
    static toObject(includeInstance: boolean, msg: PlayerAttribute): PlayerAttribute.AsObject;
    static serializeBinaryToWriter(message: PlayerAttribute, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayerAttribute;
    static deserializeBinaryFromReader(message: PlayerAttribute, reader: jspb.BinaryReader): PlayerAttribute;
  }

  export namespace PlayerAttribute {
    export type AsObject = {
      stringValue: string,
      intValue: number,
      floatValue: number,
      boolValue: boolean,
    }

    export enum ValueCase { 
      VALUE_NOT_SET = 0,
      STRING_VALUE = 2,
      INT_VALUE = 3,
      FLOAT_VALUE = 4,
      BOOL_VALUE = 5,
    }
  }


  export enum PlayerState { 
    WAITING = 0,
    PLAYING = 1,
    FINISHED = 2,
  }
}

