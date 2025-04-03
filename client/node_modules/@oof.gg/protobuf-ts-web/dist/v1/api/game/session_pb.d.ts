import * as jspb from 'google-protobuf'

import * as v1_std_regions_pb from '../../../v1/std/regions_pb'; // proto import: "v1/std/regions.proto"


export class GameAttribute extends jspb.Message {
  getStringValue(): string;
  setStringValue(value: string): GameAttribute;

  getIntValue(): number;
  setIntValue(value: number): GameAttribute;

  getFloatValue(): number;
  setFloatValue(value: number): GameAttribute;

  getBoolValue(): boolean;
  setBoolValue(value: boolean): GameAttribute;

  getValueCase(): GameAttribute.ValueCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: GameAttribute): GameAttribute.AsObject;
  static serializeBinaryToWriter(message: GameAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameAttribute;
  static deserializeBinaryFromReader(message: GameAttribute, reader: jspb.BinaryReader): GameAttribute;
}

export namespace GameAttribute {
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

export class Session extends jspb.Message {
  getId(): string;
  setId(value: string): Session;

  getGameId(): string;
  setGameId(value: string): Session;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): Session;
  clearUserIdsList(): Session;
  addUserIds(value: string, index?: number): Session;

  getState(): GameState;
  setState(value: GameState): Session;

  getAttributesMap(): jspb.Map<string, GameAttribute>;
  clearAttributesMap(): Session;

  getRegion(): v1_std_regions_pb.RegionEnum;
  setRegion(value: v1_std_regions_pb.RegionEnum): Session;
  hasRegion(): boolean;
  clearRegion(): Session;

  getData(): string;
  setData(value: string): Session;
  hasData(): boolean;
  clearData(): Session;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Session.AsObject;
  static toObject(includeInstance: boolean, msg: Session): Session.AsObject;
  static serializeBinaryToWriter(message: Session, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Session;
  static deserializeBinaryFromReader(message: Session, reader: jspb.BinaryReader): Session;
}

export namespace Session {
  export type AsObject = {
    id: string,
    gameId: string,
    userIdsList: Array<string>,
    state: GameState,
    attributesMap: Array<[string, GameAttribute.AsObject]>,
    region?: v1_std_regions_pb.RegionEnum,
    data?: string,
  }

  export enum RegionCase { 
    _REGION_NOT_SET = 0,
    REGION = 6,
  }

  export enum DataCase { 
    _DATA_NOT_SET = 0,
    DATA = 7,
  }
}

export class SessionCreate extends jspb.Message {
  getGameId(): string;
  setGameId(value: string): SessionCreate;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): SessionCreate;
  clearUserIdsList(): SessionCreate;
  addUserIds(value: string, index?: number): SessionCreate;

  getState(): GameState;
  setState(value: GameState): SessionCreate;

  getAttributesMap(): jspb.Map<string, GameAttribute>;
  clearAttributesMap(): SessionCreate;

  getRegion(): v1_std_regions_pb.RegionEnum;
  setRegion(value: v1_std_regions_pb.RegionEnum): SessionCreate;
  hasRegion(): boolean;
  clearRegion(): SessionCreate;

  getData(): string;
  setData(value: string): SessionCreate;
  hasData(): boolean;
  clearData(): SessionCreate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionCreate.AsObject;
  static toObject(includeInstance: boolean, msg: SessionCreate): SessionCreate.AsObject;
  static serializeBinaryToWriter(message: SessionCreate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionCreate;
  static deserializeBinaryFromReader(message: SessionCreate, reader: jspb.BinaryReader): SessionCreate;
}

export namespace SessionCreate {
  export type AsObject = {
    gameId: string,
    userIdsList: Array<string>,
    state: GameState,
    attributesMap: Array<[string, GameAttribute.AsObject]>,
    region?: v1_std_regions_pb.RegionEnum,
    data?: string,
  }

  export enum RegionCase { 
    _REGION_NOT_SET = 0,
    REGION = 5,
  }

  export enum DataCase { 
    _DATA_NOT_SET = 0,
    DATA = 6,
  }
}

export class SessionUpdate extends jspb.Message {
  getId(): string;
  setId(value: string): SessionUpdate;

  getGameId(): string;
  setGameId(value: string): SessionUpdate;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): SessionUpdate;
  clearUserIdsList(): SessionUpdate;
  addUserIds(value: string, index?: number): SessionUpdate;

  getState(): GameState;
  setState(value: GameState): SessionUpdate;

  getAttributesMap(): jspb.Map<string, GameAttribute>;
  clearAttributesMap(): SessionUpdate;

  getRegion(): v1_std_regions_pb.RegionEnum;
  setRegion(value: v1_std_regions_pb.RegionEnum): SessionUpdate;
  hasRegion(): boolean;
  clearRegion(): SessionUpdate;

  getData(): string;
  setData(value: string): SessionUpdate;
  hasData(): boolean;
  clearData(): SessionUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: SessionUpdate): SessionUpdate.AsObject;
  static serializeBinaryToWriter(message: SessionUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionUpdate;
  static deserializeBinaryFromReader(message: SessionUpdate, reader: jspb.BinaryReader): SessionUpdate;
}

export namespace SessionUpdate {
  export type AsObject = {
    id: string,
    gameId: string,
    userIdsList: Array<string>,
    state: GameState,
    attributesMap: Array<[string, GameAttribute.AsObject]>,
    region?: v1_std_regions_pb.RegionEnum,
    data?: string,
  }

  export enum RegionCase { 
    _REGION_NOT_SET = 0,
    REGION = 6,
  }

  export enum DataCase { 
    _DATA_NOT_SET = 0,
    DATA = 7,
  }
}

export class SessionGet extends jspb.Message {
  getId(): string;
  setId(value: string): SessionGet;
  hasId(): boolean;
  clearId(): SessionGet;

  getGameId(): string;
  setGameId(value: string): SessionGet;
  hasGameId(): boolean;
  clearGameId(): SessionGet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionGet.AsObject;
  static toObject(includeInstance: boolean, msg: SessionGet): SessionGet.AsObject;
  static serializeBinaryToWriter(message: SessionGet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionGet;
  static deserializeBinaryFromReader(message: SessionGet, reader: jspb.BinaryReader): SessionGet;
}

export namespace SessionGet {
  export type AsObject = {
    id?: string,
    gameId?: string,
  }

  export enum IdCase { 
    _ID_NOT_SET = 0,
    ID = 1,
  }

  export enum GameIdCase { 
    _GAME_ID_NOT_SET = 0,
    GAME_ID = 2,
  }
}

export class SessionDelete extends jspb.Message {
  getId(): string;
  setId(value: string): SessionDelete;

  getGameId(): string;
  setGameId(value: string): SessionDelete;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionDelete.AsObject;
  static toObject(includeInstance: boolean, msg: SessionDelete): SessionDelete.AsObject;
  static serializeBinaryToWriter(message: SessionDelete, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionDelete;
  static deserializeBinaryFromReader(message: SessionDelete, reader: jspb.BinaryReader): SessionDelete;
}

export namespace SessionDelete {
  export type AsObject = {
    id: string,
    gameId: string,
  }
}

export class Sessions extends jspb.Message {
  getSessionsList(): Array<Session>;
  setSessionsList(value: Array<Session>): Sessions;
  clearSessionsList(): Sessions;
  addSessions(value?: Session, index?: number): Session;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sessions.AsObject;
  static toObject(includeInstance: boolean, msg: Sessions): Sessions.AsObject;
  static serializeBinaryToWriter(message: Sessions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sessions;
  static deserializeBinaryFromReader(message: Sessions, reader: jspb.BinaryReader): Sessions;
}

export namespace Sessions {
  export type AsObject = {
    sessionsList: Array<Session.AsObject>,
  }
}

export enum GameState { 
  STATE_CREATED = 0,
  STATE_WAITING = 1,
  STATE_STARTED = 2,
  STATE_FINISHED = 3,
  STATE_DELETED = 4,
  STATE_PAUSED = 5,
  STATE_QUEUED = 6,
}
