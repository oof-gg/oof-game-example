import * as jspb from 'google-protobuf'



export class Entity extends jspb.Message {
  getName(): string;
  setName(value: string): Entity;

  getType(): string;
  setType(value: string): Entity;

  getId(): string;
  setId(value: string): Entity;

  getSessionId(): string;
  setSessionId(value: string): Entity;

  getGameId(): string;
  setGameId(value: string): Entity;

  getAttributesMap(): jspb.Map<string, EntityAttribute>;
  clearAttributesMap(): Entity;

  getController(): Entity.ControllerStateEnum;
  setController(value: Entity.ControllerStateEnum): Entity;

  getPlayerId(): string;
  setPlayerId(value: string): Entity;
  hasPlayerId(): boolean;
  clearPlayerId(): Entity;

  getData(): string;
  setData(value: string): Entity;
  hasData(): boolean;
  clearData(): Entity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Entity.AsObject;
  static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
  static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Entity;
  static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
}

export namespace Entity {
  export type AsObject = {
    name: string,
    type: string,
    id: string,
    sessionId: string,
    gameId: string,
    attributesMap: Array<[string, EntityAttribute.AsObject]>,
    controller: Entity.ControllerStateEnum,
    playerId?: string,
    data?: string,
  }

  export enum ControllerStateEnum { 
    SERVER = 0,
    PLAYER = 1,
  }

  export enum PlayerIdCase { 
    _PLAYER_ID_NOT_SET = 0,
    PLAYER_ID = 8,
  }

  export enum DataCase { 
    _DATA_NOT_SET = 0,
    DATA = 9,
  }
}

export class Entities extends jspb.Message {
  getEntitiesList(): Array<Entity>;
  setEntitiesList(value: Array<Entity>): Entities;
  clearEntitiesList(): Entities;
  addEntities(value?: Entity, index?: number): Entity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Entities.AsObject;
  static toObject(includeInstance: boolean, msg: Entities): Entities.AsObject;
  static serializeBinaryToWriter(message: Entities, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Entities;
  static deserializeBinaryFromReader(message: Entities, reader: jspb.BinaryReader): Entities;
}

export namespace Entities {
  export type AsObject = {
    entitiesList: Array<Entity.AsObject>,
  }
}

export class EntityAttribute extends jspb.Message {
  getStringValue(): string;
  setStringValue(value: string): EntityAttribute;

  getIntValue(): number;
  setIntValue(value: number): EntityAttribute;

  getFloatValue(): number;
  setFloatValue(value: number): EntityAttribute;

  getBoolValue(): boolean;
  setBoolValue(value: boolean): EntityAttribute;

  getValueCase(): EntityAttribute.ValueCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: EntityAttribute): EntityAttribute.AsObject;
  static serializeBinaryToWriter(message: EntityAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityAttribute;
  static deserializeBinaryFromReader(message: EntityAttribute, reader: jspb.BinaryReader): EntityAttribute;
}

export namespace EntityAttribute {
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

export class EntityGetRequest extends jspb.Message {
  getId(): string;
  setId(value: string): EntityGetRequest;

  getSessionId(): string;
  setSessionId(value: string): EntityGetRequest;

  getGameId(): string;
  setGameId(value: string): EntityGetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EntityGetRequest): EntityGetRequest.AsObject;
  static serializeBinaryToWriter(message: EntityGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityGetRequest;
  static deserializeBinaryFromReader(message: EntityGetRequest, reader: jspb.BinaryReader): EntityGetRequest;
}

export namespace EntityGetRequest {
  export type AsObject = {
    id: string,
    sessionId: string,
    gameId: string,
  }
}

export class EntityGetResponse extends jspb.Message {
  getEntity(): Entity | undefined;
  setEntity(value?: Entity): EntityGetResponse;
  hasEntity(): boolean;
  clearEntity(): EntityGetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EntityGetResponse): EntityGetResponse.AsObject;
  static serializeBinaryToWriter(message: EntityGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityGetResponse;
  static deserializeBinaryFromReader(message: EntityGetResponse, reader: jspb.BinaryReader): EntityGetResponse;
}

export namespace EntityGetResponse {
  export type AsObject = {
    entity?: Entity.AsObject,
  }
}

export class EntityCreateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): EntityCreateRequest;

  getType(): string;
  setType(value: string): EntityCreateRequest;

  getSessionId(): string;
  setSessionId(value: string): EntityCreateRequest;

  getGameId(): string;
  setGameId(value: string): EntityCreateRequest;

  getAttributesMap(): jspb.Map<string, EntityAttribute>;
  clearAttributesMap(): EntityCreateRequest;

  getController(): EntityCreateRequest.ControllerStateEnum;
  setController(value: EntityCreateRequest.ControllerStateEnum): EntityCreateRequest;

  getPlayerId(): string;
  setPlayerId(value: string): EntityCreateRequest;
  hasPlayerId(): boolean;
  clearPlayerId(): EntityCreateRequest;

  getData(): string;
  setData(value: string): EntityCreateRequest;
  hasData(): boolean;
  clearData(): EntityCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EntityCreateRequest): EntityCreateRequest.AsObject;
  static serializeBinaryToWriter(message: EntityCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityCreateRequest;
  static deserializeBinaryFromReader(message: EntityCreateRequest, reader: jspb.BinaryReader): EntityCreateRequest;
}

export namespace EntityCreateRequest {
  export type AsObject = {
    name: string,
    type: string,
    sessionId: string,
    gameId: string,
    attributesMap: Array<[string, EntityAttribute.AsObject]>,
    controller: EntityCreateRequest.ControllerStateEnum,
    playerId?: string,
    data?: string,
  }

  export enum ControllerStateEnum { 
    SERVER = 0,
    PLAYER = 1,
  }

  export enum PlayerIdCase { 
    _PLAYER_ID_NOT_SET = 0,
    PLAYER_ID = 8,
  }

  export enum DataCase { 
    _DATA_NOT_SET = 0,
    DATA = 9,
  }
}

export class EntityCreateResponse extends jspb.Message {
  getEntity(): Entity | undefined;
  setEntity(value?: Entity): EntityCreateResponse;
  hasEntity(): boolean;
  clearEntity(): EntityCreateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EntityCreateResponse): EntityCreateResponse.AsObject;
  static serializeBinaryToWriter(message: EntityCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityCreateResponse;
  static deserializeBinaryFromReader(message: EntityCreateResponse, reader: jspb.BinaryReader): EntityCreateResponse;
}

export namespace EntityCreateResponse {
  export type AsObject = {
    entity?: Entity.AsObject,
  }
}

export class EntityUpdateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): EntityUpdateRequest;

  getSessionId(): string;
  setSessionId(value: string): EntityUpdateRequest;

  getGameId(): string;
  setGameId(value: string): EntityUpdateRequest;

  getAttributesList(): Array<EntityAttribute>;
  setAttributesList(value: Array<EntityAttribute>): EntityUpdateRequest;
  clearAttributesList(): EntityUpdateRequest;
  addAttributes(value?: EntityAttribute, index?: number): EntityAttribute;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EntityUpdateRequest): EntityUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: EntityUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityUpdateRequest;
  static deserializeBinaryFromReader(message: EntityUpdateRequest, reader: jspb.BinaryReader): EntityUpdateRequest;
}

export namespace EntityUpdateRequest {
  export type AsObject = {
    id: string,
    sessionId: string,
    gameId: string,
    attributesList: Array<EntityAttribute.AsObject>,
  }
}

export class EntityUpdateResponse extends jspb.Message {
  getEntity(): Entity | undefined;
  setEntity(value?: Entity): EntityUpdateResponse;
  hasEntity(): boolean;
  clearEntity(): EntityUpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EntityUpdateResponse): EntityUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: EntityUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityUpdateResponse;
  static deserializeBinaryFromReader(message: EntityUpdateResponse, reader: jspb.BinaryReader): EntityUpdateResponse;
}

export namespace EntityUpdateResponse {
  export type AsObject = {
    entity?: Entity.AsObject,
  }
}

export class EntityDeleteRequest extends jspb.Message {
  getId(): string;
  setId(value: string): EntityDeleteRequest;

  getSessionId(): string;
  setSessionId(value: string): EntityDeleteRequest;

  getGameId(): string;
  setGameId(value: string): EntityDeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EntityDeleteRequest): EntityDeleteRequest.AsObject;
  static serializeBinaryToWriter(message: EntityDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityDeleteRequest;
  static deserializeBinaryFromReader(message: EntityDeleteRequest, reader: jspb.BinaryReader): EntityDeleteRequest;
}

export namespace EntityDeleteRequest {
  export type AsObject = {
    id: string,
    sessionId: string,
    gameId: string,
  }
}

export class EntityDeleteResponse extends jspb.Message {
  getId(): string;
  setId(value: string): EntityDeleteResponse;

  getSessionId(): string;
  setSessionId(value: string): EntityDeleteResponse;

  getGameId(): string;
  setGameId(value: string): EntityDeleteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EntityDeleteResponse): EntityDeleteResponse.AsObject;
  static serializeBinaryToWriter(message: EntityDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityDeleteResponse;
  static deserializeBinaryFromReader(message: EntityDeleteResponse, reader: jspb.BinaryReader): EntityDeleteResponse;
}

export namespace EntityDeleteResponse {
  export type AsObject = {
    id: string,
    sessionId: string,
    gameId: string,
  }
}

