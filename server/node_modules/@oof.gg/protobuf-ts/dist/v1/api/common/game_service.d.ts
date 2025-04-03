import { type CallOptions, ChannelCredentials, Client, type ClientOptions, ClientReadableStream, type ClientUnaryCall, ClientWritableStream, handleClientStreamingCall, handleServerStreamingCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { EntityCreateRequest, EntityDeleteRequest, EntityGetRequest, EntityUpdateRequest } from "../game/entity";
import { GameEvent } from "../game/event";
import { GameCreateRequest, GameGetRequest, GameUpdateRequest, PaginatedResponse, StandardResponse } from "../game/game";
import { JoinLeaveGame } from "../game/join_leave";
import { Session, SessionCreate, SessionDelete, SessionGet, SessionUpdate } from "../game/session";
export declare const protobufPackage = "v1.api.common";
export type GameServiceService = typeof GameServiceService;
export declare const GameServiceService: {
    /** / Join or leave a game, returns the queued session if not joined */
    readonly joinLeave: {
        readonly path: "/v1.api.common.GameService/JoinLeave";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: JoinLeaveGame) => Buffer;
        readonly requestDeserialize: (value: Buffer) => JoinLeaveGame;
        readonly responseSerialize: (value: StandardResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StandardResponse;
    };
    readonly createSession: {
        readonly path: "/v1.api.common.GameService/CreateSession";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SessionCreate) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SessionCreate;
        readonly responseSerialize: (value: StandardResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StandardResponse;
    };
    readonly getSession: {
        readonly path: "/v1.api.common.GameService/GetSession";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SessionGet) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SessionGet;
        readonly responseSerialize: (value: StandardResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StandardResponse;
    };
    readonly updateSession: {
        readonly path: "/v1.api.common.GameService/UpdateSession";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SessionUpdate) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SessionUpdate;
        readonly responseSerialize: (value: StandardResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StandardResponse;
    };
    readonly deleteSession: {
        readonly path: "/v1.api.common.GameService/DeleteSession";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SessionDelete) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SessionDelete;
        readonly responseSerialize: (value: StandardResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StandardResponse;
    };
    /**
     * TODO: Adjust payloads for protos
     * / Create a new entity
     */
    readonly createEntity: {
        readonly path: "/v1.api.common.GameService/CreateEntity";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: EntityCreateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => EntityCreateRequest;
        readonly responseSerialize: (value: StandardResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StandardResponse;
    };
    /** / Get an entity by ID */
    readonly getEntity: {
        readonly path: "/v1.api.common.GameService/GetEntity";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: EntityGetRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => EntityGetRequest;
        readonly responseSerialize: (value: PaginatedResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => PaginatedResponse;
    };
    /** / Update an entity by ID */
    readonly updateEntity: {
        readonly path: "/v1.api.common.GameService/UpdateEntity";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: EntityUpdateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => EntityUpdateRequest;
        readonly responseSerialize: (value: StandardResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StandardResponse;
    };
    /** / Delete an entity by ID */
    readonly deleteEntity: {
        readonly path: "/v1.api.common.GameService/DeleteEntity";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: EntityDeleteRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => EntityDeleteRequest;
        readonly responseSerialize: (value: StandardResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StandardResponse;
    };
    /** / Create a new game */
    readonly createGame: {
        readonly path: "/v1.api.common.GameService/CreateGame";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GameCreateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GameCreateRequest;
        readonly responseSerialize: (value: StandardResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StandardResponse;
    };
    /** / Get a game by ID */
    readonly getGame: {
        readonly path: "/v1.api.common.GameService/GetGame";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GameGetRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GameGetRequest;
        readonly responseSerialize: (value: PaginatedResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => PaginatedResponse;
    };
    /** / Update a game by ID */
    readonly updateGame: {
        readonly path: "/v1.api.common.GameService/UpdateGame";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GameUpdateRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GameUpdateRequest;
        readonly responseSerialize: (value: StandardResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StandardResponse;
    };
    /** / Wait for queue updates */
    readonly streamEvents: {
        readonly path: "/v1.api.common.GameService/StreamEvents";
        readonly requestStream: true;
        readonly responseStream: false;
        readonly requestSerialize: (value: GameEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GameEvent;
        readonly responseSerialize: (value: GameEvent) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GameEvent;
    };
    /** / Stream events from the game */
    readonly watchQueue: {
        readonly path: "/v1.api.common.GameService/WatchQueue";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: Session) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Session;
        readonly responseSerialize: (value: Session) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Session;
    };
};
export interface GameServiceServer extends UntypedServiceImplementation {
    /** / Join or leave a game, returns the queued session if not joined */
    joinLeave: handleUnaryCall<JoinLeaveGame, StandardResponse>;
    createSession: handleUnaryCall<SessionCreate, StandardResponse>;
    getSession: handleUnaryCall<SessionGet, StandardResponse>;
    updateSession: handleUnaryCall<SessionUpdate, StandardResponse>;
    deleteSession: handleUnaryCall<SessionDelete, StandardResponse>;
    /**
     * TODO: Adjust payloads for protos
     * / Create a new entity
     */
    createEntity: handleUnaryCall<EntityCreateRequest, StandardResponse>;
    /** / Get an entity by ID */
    getEntity: handleUnaryCall<EntityGetRequest, PaginatedResponse>;
    /** / Update an entity by ID */
    updateEntity: handleUnaryCall<EntityUpdateRequest, StandardResponse>;
    /** / Delete an entity by ID */
    deleteEntity: handleUnaryCall<EntityDeleteRequest, StandardResponse>;
    /** / Create a new game */
    createGame: handleUnaryCall<GameCreateRequest, StandardResponse>;
    /** / Get a game by ID */
    getGame: handleUnaryCall<GameGetRequest, PaginatedResponse>;
    /** / Update a game by ID */
    updateGame: handleUnaryCall<GameUpdateRequest, StandardResponse>;
    /** / Wait for queue updates */
    streamEvents: handleClientStreamingCall<GameEvent, GameEvent>;
    /** / Stream events from the game */
    watchQueue: handleServerStreamingCall<Session, Session>;
}
export interface GameServiceClient extends Client {
    /** / Join or leave a game, returns the queued session if not joined */
    joinLeave(request: JoinLeaveGame, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    joinLeave(request: JoinLeaveGame, metadata: Metadata, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    joinLeave(request: JoinLeaveGame, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    createSession(request: SessionCreate, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    createSession(request: SessionCreate, metadata: Metadata, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    createSession(request: SessionCreate, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    getSession(request: SessionGet, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    getSession(request: SessionGet, metadata: Metadata, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    getSession(request: SessionGet, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    updateSession(request: SessionUpdate, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    updateSession(request: SessionUpdate, metadata: Metadata, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    updateSession(request: SessionUpdate, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    deleteSession(request: SessionDelete, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    deleteSession(request: SessionDelete, metadata: Metadata, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    deleteSession(request: SessionDelete, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    /**
     * TODO: Adjust payloads for protos
     * / Create a new entity
     */
    createEntity(request: EntityCreateRequest, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    createEntity(request: EntityCreateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    createEntity(request: EntityCreateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    /** / Get an entity by ID */
    getEntity(request: EntityGetRequest, callback: (error: ServiceError | null, response: PaginatedResponse) => void): ClientUnaryCall;
    getEntity(request: EntityGetRequest, metadata: Metadata, callback: (error: ServiceError | null, response: PaginatedResponse) => void): ClientUnaryCall;
    getEntity(request: EntityGetRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: PaginatedResponse) => void): ClientUnaryCall;
    /** / Update an entity by ID */
    updateEntity(request: EntityUpdateRequest, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    updateEntity(request: EntityUpdateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    updateEntity(request: EntityUpdateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    /** / Delete an entity by ID */
    deleteEntity(request: EntityDeleteRequest, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    deleteEntity(request: EntityDeleteRequest, metadata: Metadata, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    deleteEntity(request: EntityDeleteRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    /** / Create a new game */
    createGame(request: GameCreateRequest, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    createGame(request: GameCreateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    createGame(request: GameCreateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    /** / Get a game by ID */
    getGame(request: GameGetRequest, callback: (error: ServiceError | null, response: PaginatedResponse) => void): ClientUnaryCall;
    getGame(request: GameGetRequest, metadata: Metadata, callback: (error: ServiceError | null, response: PaginatedResponse) => void): ClientUnaryCall;
    getGame(request: GameGetRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: PaginatedResponse) => void): ClientUnaryCall;
    /** / Update a game by ID */
    updateGame(request: GameUpdateRequest, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    updateGame(request: GameUpdateRequest, metadata: Metadata, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    updateGame(request: GameUpdateRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StandardResponse) => void): ClientUnaryCall;
    /** / Wait for queue updates */
    streamEvents(callback: (error: ServiceError | null, response: GameEvent) => void): ClientWritableStream<GameEvent>;
    streamEvents(metadata: Metadata, callback: (error: ServiceError | null, response: GameEvent) => void): ClientWritableStream<GameEvent>;
    streamEvents(options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GameEvent) => void): ClientWritableStream<GameEvent>;
    streamEvents(metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GameEvent) => void): ClientWritableStream<GameEvent>;
    /** / Stream events from the game */
    watchQueue(request: Session, options?: Partial<CallOptions>): ClientReadableStream<Session>;
    watchQueue(request: Session, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<Session>;
}
export declare const GameServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): GameServiceClient;
    service: typeof GameServiceService;
    serviceName: string;
};
