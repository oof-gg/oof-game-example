import * as jspb from 'google-protobuf'

import * as v1_api_game_session_pb from '../../../v1/api/game/session_pb'; // proto import: "v1/api/game/session.proto"


export class Game extends jspb.Message {
  getId(): string;
  setId(value: string): Game;

  getName(): string;
  setName(value: string): Game;

  getShortDescription(): string;
  setShortDescription(value: string): Game;

  getDescription(): string;
  setDescription(value: string): Game;

  getImageUrl(): string;
  setImageUrl(value: string): Game;

  getMaxSessions(): string;
  setMaxSessions(value: string): Game;

  getMaxPlayersPerSession(): string;
  setMaxPlayersPerSession(value: string): Game;

  getData(): string;
  setData(value: string): Game;
  hasData(): boolean;
  clearData(): Game;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Game.AsObject;
  static toObject(includeInstance: boolean, msg: Game): Game.AsObject;
  static serializeBinaryToWriter(message: Game, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Game;
  static deserializeBinaryFromReader(message: Game, reader: jspb.BinaryReader): Game;
}

export namespace Game {
  export type AsObject = {
    id: string,
    name: string,
    shortDescription: string,
    description: string,
    imageUrl: string,
    maxSessions: string,
    maxPlayersPerSession: string,
    data?: string,
  }

  export enum DataCase { 
    _DATA_NOT_SET = 0,
    DATA = 8,
  }
}

export class GameCreateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GameCreateRequest;

  getDescription(): string;
  setDescription(value: string): GameCreateRequest;

  getData(): string;
  setData(value: string): GameCreateRequest;
  hasData(): boolean;
  clearData(): GameCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GameCreateRequest): GameCreateRequest.AsObject;
  static serializeBinaryToWriter(message: GameCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameCreateRequest;
  static deserializeBinaryFromReader(message: GameCreateRequest, reader: jspb.BinaryReader): GameCreateRequest;
}

export namespace GameCreateRequest {
  export type AsObject = {
    name: string,
    description: string,
    data?: string,
  }

  export enum DataCase { 
    _DATA_NOT_SET = 0,
    DATA = 3,
  }
}

export class GameCreateResponse extends jspb.Message {
  getGame(): Game | undefined;
  setGame(value?: Game): GameCreateResponse;
  hasGame(): boolean;
  clearGame(): GameCreateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GameCreateResponse): GameCreateResponse.AsObject;
  static serializeBinaryToWriter(message: GameCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameCreateResponse;
  static deserializeBinaryFromReader(message: GameCreateResponse, reader: jspb.BinaryReader): GameCreateResponse;
}

export namespace GameCreateResponse {
  export type AsObject = {
    game?: Game.AsObject,
  }
}

export class GameGetRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GameGetRequest;
  hasId(): boolean;
  clearId(): GameGetRequest;

  getLimit(): number;
  setLimit(value: number): GameGetRequest;
  hasLimit(): boolean;
  clearLimit(): GameGetRequest;

  getCursor(): string;
  setCursor(value: string): GameGetRequest;
  hasCursor(): boolean;
  clearCursor(): GameGetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GameGetRequest): GameGetRequest.AsObject;
  static serializeBinaryToWriter(message: GameGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameGetRequest;
  static deserializeBinaryFromReader(message: GameGetRequest, reader: jspb.BinaryReader): GameGetRequest;
}

export namespace GameGetRequest {
  export type AsObject = {
    id?: string,
    limit?: number,
    cursor?: string,
  }

  export enum IdCase { 
    _ID_NOT_SET = 0,
    ID = 1,
  }

  export enum LimitCase { 
    _LIMIT_NOT_SET = 0,
    LIMIT = 2,
  }

  export enum CursorCase { 
    _CURSOR_NOT_SET = 0,
    CURSOR = 3,
  }
}

export class GameGetResponse extends jspb.Message {
  getGame(): Game | undefined;
  setGame(value?: Game): GameGetResponse;
  hasGame(): boolean;
  clearGame(): GameGetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GameGetResponse): GameGetResponse.AsObject;
  static serializeBinaryToWriter(message: GameGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameGetResponse;
  static deserializeBinaryFromReader(message: GameGetResponse, reader: jspb.BinaryReader): GameGetResponse;
}

export namespace GameGetResponse {
  export type AsObject = {
    game?: Game.AsObject,
  }
}

export class GameUpdateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GameUpdateRequest;

  getName(): string;
  setName(value: string): GameUpdateRequest;

  getDescription(): string;
  setDescription(value: string): GameUpdateRequest;

  getData(): string;
  setData(value: string): GameUpdateRequest;
  hasData(): boolean;
  clearData(): GameUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GameUpdateRequest): GameUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: GameUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameUpdateRequest;
  static deserializeBinaryFromReader(message: GameUpdateRequest, reader: jspb.BinaryReader): GameUpdateRequest;
}

export namespace GameUpdateRequest {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    data?: string,
  }

  export enum DataCase { 
    _DATA_NOT_SET = 0,
    DATA = 4,
  }
}

export class TrendingGamesRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): TrendingGamesRequest;
  hasLimit(): boolean;
  clearLimit(): TrendingGamesRequest;

  getCursor(): string;
  setCursor(value: string): TrendingGamesRequest;
  hasCursor(): boolean;
  clearCursor(): TrendingGamesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrendingGamesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TrendingGamesRequest): TrendingGamesRequest.AsObject;
  static serializeBinaryToWriter(message: TrendingGamesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrendingGamesRequest;
  static deserializeBinaryFromReader(message: TrendingGamesRequest, reader: jspb.BinaryReader): TrendingGamesRequest;
}

export namespace TrendingGamesRequest {
  export type AsObject = {
    limit?: number,
    cursor?: string,
  }

  export enum LimitCase { 
    _LIMIT_NOT_SET = 0,
    LIMIT = 1,
  }

  export enum CursorCase { 
    _CURSOR_NOT_SET = 0,
    CURSOR = 2,
  }
}

export class GameUpdateResponse extends jspb.Message {
  getGame(): Game | undefined;
  setGame(value?: Game): GameUpdateResponse;
  hasGame(): boolean;
  clearGame(): GameUpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GameUpdateResponse): GameUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: GameUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameUpdateResponse;
  static deserializeBinaryFromReader(message: GameUpdateResponse, reader: jspb.BinaryReader): GameUpdateResponse;
}

export namespace GameUpdateResponse {
  export type AsObject = {
    game?: Game.AsObject,
  }
}

export class Games extends jspb.Message {
  getGamesList(): Array<Game>;
  setGamesList(value: Array<Game>): Games;
  clearGamesList(): Games;
  addGames(value?: Game, index?: number): Game;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Games.AsObject;
  static toObject(includeInstance: boolean, msg: Games): Games.AsObject;
  static serializeBinaryToWriter(message: Games, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Games;
  static deserializeBinaryFromReader(message: Games, reader: jspb.BinaryReader): Games;
}

export namespace Games {
  export type AsObject = {
    gamesList: Array<Game.AsObject>,
  }
}

export class Status extends jspb.Message {
  getCode(): number;
  setCode(value: number): Status;

  getMessage(): string;
  setMessage(value: string): Status;

  getDetailsList(): Array<string>;
  setDetailsList(value: Array<string>): Status;
  clearDetailsList(): Status;
  addDetails(value: string, index?: number): Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    code: number,
    message: string,
    detailsList: Array<string>,
  }
}

export class StandardResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): StandardResponse;

  getMessage(): string;
  setMessage(value: string): StandardResponse;

  getError(): Status | undefined;
  setError(value?: Status): StandardResponse;
  hasError(): boolean;
  clearError(): StandardResponse;

  getSingleGame(): Game | undefined;
  setSingleGame(value?: Game): StandardResponse;
  hasSingleGame(): boolean;
  clearSingleGame(): StandardResponse;

  getGames(): Games | undefined;
  setGames(value?: Games): StandardResponse;
  hasGames(): boolean;
  clearGames(): StandardResponse;

  getSession(): v1_api_game_session_pb.Session | undefined;
  setSession(value?: v1_api_game_session_pb.Session): StandardResponse;
  hasSession(): boolean;
  clearSession(): StandardResponse;

  getSessions(): v1_api_game_session_pb.Sessions | undefined;
  setSessions(value?: v1_api_game_session_pb.Sessions): StandardResponse;
  hasSessions(): boolean;
  clearSessions(): StandardResponse;

  getDataCase(): StandardResponse.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StandardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StandardResponse): StandardResponse.AsObject;
  static serializeBinaryToWriter(message: StandardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StandardResponse;
  static deserializeBinaryFromReader(message: StandardResponse, reader: jspb.BinaryReader): StandardResponse;
}

export namespace StandardResponse {
  export type AsObject = {
    code: number,
    message: string,
    error?: Status.AsObject,
    singleGame?: Game.AsObject,
    games?: Games.AsObject,
    session?: v1_api_game_session_pb.Session.AsObject,
    sessions?: v1_api_game_session_pb.Sessions.AsObject,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    SINGLE_GAME = 4,
    GAMES = 5,
    SESSION = 6,
    SESSIONS = 7,
  }
}

export class PaginationMetadata extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): PaginationMetadata;
  hasPageSize(): boolean;
  clearPageSize(): PaginationMetadata;

  getPrevPageToken(): string;
  setPrevPageToken(value: string): PaginationMetadata;
  hasPrevPageToken(): boolean;
  clearPrevPageToken(): PaginationMetadata;

  getNextPageToken(): string;
  setNextPageToken(value: string): PaginationMetadata;
  hasNextPageToken(): boolean;
  clearNextPageToken(): PaginationMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: PaginationMetadata): PaginationMetadata.AsObject;
  static serializeBinaryToWriter(message: PaginationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginationMetadata;
  static deserializeBinaryFromReader(message: PaginationMetadata, reader: jspb.BinaryReader): PaginationMetadata;
}

export namespace PaginationMetadata {
  export type AsObject = {
    pageSize?: number,
    prevPageToken?: string,
    nextPageToken?: string,
  }

  export enum PageSizeCase { 
    _PAGE_SIZE_NOT_SET = 0,
    PAGE_SIZE = 1,
  }

  export enum PrevPageTokenCase { 
    _PREV_PAGE_TOKEN_NOT_SET = 0,
    PREV_PAGE_TOKEN = 2,
  }

  export enum NextPageTokenCase { 
    _NEXT_PAGE_TOKEN_NOT_SET = 0,
    NEXT_PAGE_TOKEN = 3,
  }
}

export class PaginatedResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): PaginatedResponse;

  getMessage(): string;
  setMessage(value: string): PaginatedResponse;

  getError(): Status | undefined;
  setError(value?: Status): PaginatedResponse;
  hasError(): boolean;
  clearError(): PaginatedResponse;

  getPagination(): PaginationMetadata | undefined;
  setPagination(value?: PaginationMetadata): PaginatedResponse;
  hasPagination(): boolean;
  clearPagination(): PaginatedResponse;

  getGame(): Game | undefined;
  setGame(value?: Game): PaginatedResponse;
  hasGame(): boolean;
  clearGame(): PaginatedResponse;

  getGames(): Games | undefined;
  setGames(value?: Games): PaginatedResponse;
  hasGames(): boolean;
  clearGames(): PaginatedResponse;

  getSession(): v1_api_game_session_pb.Session | undefined;
  setSession(value?: v1_api_game_session_pb.Session): PaginatedResponse;
  hasSession(): boolean;
  clearSession(): PaginatedResponse;

  getSessions(): v1_api_game_session_pb.Sessions | undefined;
  setSessions(value?: v1_api_game_session_pb.Sessions): PaginatedResponse;
  hasSessions(): boolean;
  clearSessions(): PaginatedResponse;

  getDataCase(): PaginatedResponse.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginatedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PaginatedResponse): PaginatedResponse.AsObject;
  static serializeBinaryToWriter(message: PaginatedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginatedResponse;
  static deserializeBinaryFromReader(message: PaginatedResponse, reader: jspb.BinaryReader): PaginatedResponse;
}

export namespace PaginatedResponse {
  export type AsObject = {
    code: number,
    message: string,
    error?: Status.AsObject,
    pagination?: PaginationMetadata.AsObject,
    game?: Game.AsObject,
    games?: Games.AsObject,
    session?: v1_api_game_session_pb.Session.AsObject,
    sessions?: v1_api_game_session_pb.Sessions.AsObject,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    GAME = 5,
    GAMES = 6,
    SESSION = 7,
    SESSIONS = 8,
  }

  export enum PaginationCase { 
    _PAGINATION_NOT_SET = 0,
    PAGINATION = 4,
  }
}

