import * as jspb from 'google-protobuf'



export class PlayerAction extends jspb.Message {
  getPlayerId(): string;
  setPlayerId(value: string): PlayerAction;

  getSessionId(): string;
  setSessionId(value: string): PlayerAction;

  getGameId(): string;
  setGameId(value: string): PlayerAction;

  getType(): ActionType;
  setType(value: ActionType): PlayerAction;

  getPosition(): Position | undefined;
  setPosition(value?: Position): PlayerAction;
  hasPosition(): boolean;
  clearPosition(): PlayerAction;

  getVelocity(): Velocity | undefined;
  setVelocity(value?: Velocity): PlayerAction;
  hasVelocity(): boolean;
  clearVelocity(): PlayerAction;

  getActionMap(): jspb.Map<string, PlayerActionAttribute>;
  clearActionMap(): PlayerAction;

  getTimestamp(): number;
  setTimestamp(value: number): PlayerAction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerAction.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerAction): PlayerAction.AsObject;
  static serializeBinaryToWriter(message: PlayerAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerAction;
  static deserializeBinaryFromReader(message: PlayerAction, reader: jspb.BinaryReader): PlayerAction;
}

export namespace PlayerAction {
  export type AsObject = {
    playerId: string,
    sessionId: string,
    gameId: string,
    type: ActionType,
    position?: Position.AsObject,
    velocity?: Velocity.AsObject,
    actionMap: Array<[string, PlayerActionAttribute.AsObject]>,
    timestamp: number,
  }

  export enum PositionCase { 
    _POSITION_NOT_SET = 0,
    POSITION = 5,
  }

  export enum VelocityCase { 
    _VELOCITY_NOT_SET = 0,
    VELOCITY = 6,
  }
}

export class Position extends jspb.Message {
  getX(): number;
  setX(value: number): Position;

  getY(): number;
  setY(value: number): Position;

  getZ(): number;
  setZ(value: number): Position;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Position.AsObject;
  static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
  static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Position;
  static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
}

export namespace Position {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
  }
}

export class Velocity extends jspb.Message {
  getX(): number;
  setX(value: number): Velocity;

  getY(): number;
  setY(value: number): Velocity;

  getZ(): number;
  setZ(value: number): Velocity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Velocity.AsObject;
  static toObject(includeInstance: boolean, msg: Velocity): Velocity.AsObject;
  static serializeBinaryToWriter(message: Velocity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Velocity;
  static deserializeBinaryFromReader(message: Velocity, reader: jspb.BinaryReader): Velocity;
}

export namespace Velocity {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
  }
}

export class PlayerActionAttribute extends jspb.Message {
  getStringValue(): string;
  setStringValue(value: string): PlayerActionAttribute;

  getIntValue(): number;
  setIntValue(value: number): PlayerActionAttribute;

  getFloatValue(): number;
  setFloatValue(value: number): PlayerActionAttribute;

  getBoolValue(): boolean;
  setBoolValue(value: boolean): PlayerActionAttribute;

  getValueCase(): PlayerActionAttribute.ValueCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerActionAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerActionAttribute): PlayerActionAttribute.AsObject;
  static serializeBinaryToWriter(message: PlayerActionAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerActionAttribute;
  static deserializeBinaryFromReader(message: PlayerActionAttribute, reader: jspb.BinaryReader): PlayerActionAttribute;
}

export namespace PlayerActionAttribute {
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

export enum ActionType { 
  CUSTOM = 0,
  MOVE = 1,
  JUMP = 2,
  SHOOT = 3,
  PICKUP = 4,
  DROP = 5,
  USE = 6,
  INTERACT = 7,
}
