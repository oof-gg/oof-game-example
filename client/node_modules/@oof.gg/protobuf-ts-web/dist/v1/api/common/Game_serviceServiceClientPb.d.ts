/**
 * @fileoverview gRPC-Web generated client stub for v1.api.common
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as v1_api_game_entity_pb from '../../../v1/api/game/entity_pb';
import * as v1_api_game_game_pb from '../../../v1/api/game/game_pb';
import * as v1_api_game_join_leave_pb from '../../../v1/api/game/join_leave_pb';
import * as v1_api_game_session_pb from '../../../v1/api/game/session_pb';
export declare class GameServiceClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
    methodDescriptorJoinLeave: grpcWeb.MethodDescriptor<v1_api_game_join_leave_pb.JoinLeaveGame, v1_api_game_game_pb.StandardResponse>;
    joinLeave(request: v1_api_game_join_leave_pb.JoinLeaveGame, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_game_pb.StandardResponse>;
    joinLeave(request: v1_api_game_join_leave_pb.JoinLeaveGame, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_game_pb.StandardResponse) => void): grpcWeb.ClientReadableStream<v1_api_game_game_pb.StandardResponse>;
    methodDescriptorCreateSession: grpcWeb.MethodDescriptor<v1_api_game_session_pb.SessionCreate, v1_api_game_game_pb.StandardResponse>;
    createSession(request: v1_api_game_session_pb.SessionCreate, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_game_pb.StandardResponse>;
    createSession(request: v1_api_game_session_pb.SessionCreate, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_game_pb.StandardResponse) => void): grpcWeb.ClientReadableStream<v1_api_game_game_pb.StandardResponse>;
    methodDescriptorGetSession: grpcWeb.MethodDescriptor<v1_api_game_session_pb.SessionGet, v1_api_game_game_pb.StandardResponse>;
    getSession(request: v1_api_game_session_pb.SessionGet, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_game_pb.StandardResponse>;
    getSession(request: v1_api_game_session_pb.SessionGet, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_game_pb.StandardResponse) => void): grpcWeb.ClientReadableStream<v1_api_game_game_pb.StandardResponse>;
    methodDescriptorUpdateSession: grpcWeb.MethodDescriptor<v1_api_game_session_pb.SessionUpdate, v1_api_game_game_pb.StandardResponse>;
    updateSession(request: v1_api_game_session_pb.SessionUpdate, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_game_pb.StandardResponse>;
    updateSession(request: v1_api_game_session_pb.SessionUpdate, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_game_pb.StandardResponse) => void): grpcWeb.ClientReadableStream<v1_api_game_game_pb.StandardResponse>;
    methodDescriptorDeleteSession: grpcWeb.MethodDescriptor<v1_api_game_session_pb.SessionDelete, v1_api_game_game_pb.StandardResponse>;
    deleteSession(request: v1_api_game_session_pb.SessionDelete, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_game_pb.StandardResponse>;
    deleteSession(request: v1_api_game_session_pb.SessionDelete, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_game_pb.StandardResponse) => void): grpcWeb.ClientReadableStream<v1_api_game_game_pb.StandardResponse>;
    methodDescriptorCreateEntity: grpcWeb.MethodDescriptor<v1_api_game_entity_pb.EntityCreateRequest, v1_api_game_game_pb.StandardResponse>;
    createEntity(request: v1_api_game_entity_pb.EntityCreateRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_game_pb.StandardResponse>;
    createEntity(request: v1_api_game_entity_pb.EntityCreateRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_game_pb.StandardResponse) => void): grpcWeb.ClientReadableStream<v1_api_game_game_pb.StandardResponse>;
    methodDescriptorGetEntity: grpcWeb.MethodDescriptor<v1_api_game_entity_pb.EntityGetRequest, v1_api_game_game_pb.PaginatedResponse>;
    getEntity(request: v1_api_game_entity_pb.EntityGetRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_game_pb.PaginatedResponse>;
    getEntity(request: v1_api_game_entity_pb.EntityGetRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_game_pb.PaginatedResponse) => void): grpcWeb.ClientReadableStream<v1_api_game_game_pb.PaginatedResponse>;
    methodDescriptorUpdateEntity: grpcWeb.MethodDescriptor<v1_api_game_entity_pb.EntityUpdateRequest, v1_api_game_game_pb.StandardResponse>;
    updateEntity(request: v1_api_game_entity_pb.EntityUpdateRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_game_pb.StandardResponse>;
    updateEntity(request: v1_api_game_entity_pb.EntityUpdateRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_game_pb.StandardResponse) => void): grpcWeb.ClientReadableStream<v1_api_game_game_pb.StandardResponse>;
    methodDescriptorDeleteEntity: grpcWeb.MethodDescriptor<v1_api_game_entity_pb.EntityDeleteRequest, v1_api_game_game_pb.StandardResponse>;
    deleteEntity(request: v1_api_game_entity_pb.EntityDeleteRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_game_pb.StandardResponse>;
    deleteEntity(request: v1_api_game_entity_pb.EntityDeleteRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_game_pb.StandardResponse) => void): grpcWeb.ClientReadableStream<v1_api_game_game_pb.StandardResponse>;
    methodDescriptorCreateGame: grpcWeb.MethodDescriptor<v1_api_game_game_pb.GameCreateRequest, v1_api_game_game_pb.StandardResponse>;
    createGame(request: v1_api_game_game_pb.GameCreateRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_game_pb.StandardResponse>;
    createGame(request: v1_api_game_game_pb.GameCreateRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_game_pb.StandardResponse) => void): grpcWeb.ClientReadableStream<v1_api_game_game_pb.StandardResponse>;
    methodDescriptorGetGame: grpcWeb.MethodDescriptor<v1_api_game_game_pb.GameGetRequest, v1_api_game_game_pb.PaginatedResponse>;
    getGame(request: v1_api_game_game_pb.GameGetRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_game_pb.PaginatedResponse>;
    getGame(request: v1_api_game_game_pb.GameGetRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_game_pb.PaginatedResponse) => void): grpcWeb.ClientReadableStream<v1_api_game_game_pb.PaginatedResponse>;
    methodDescriptorUpdateGame: grpcWeb.MethodDescriptor<v1_api_game_game_pb.GameUpdateRequest, v1_api_game_game_pb.StandardResponse>;
    updateGame(request: v1_api_game_game_pb.GameUpdateRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_game_pb.StandardResponse>;
    updateGame(request: v1_api_game_game_pb.GameUpdateRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_game_pb.StandardResponse) => void): grpcWeb.ClientReadableStream<v1_api_game_game_pb.StandardResponse>;
    methodDescriptorTrendingGame: grpcWeb.MethodDescriptor<v1_api_game_game_pb.TrendingGamesRequest, v1_api_game_game_pb.PaginatedResponse>;
    trendingGame(request: v1_api_game_game_pb.TrendingGamesRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_game_pb.PaginatedResponse>;
    trendingGame(request: v1_api_game_game_pb.TrendingGamesRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_game_pb.PaginatedResponse) => void): grpcWeb.ClientReadableStream<v1_api_game_game_pb.PaginatedResponse>;
    methodDescriptorWatchQueue: grpcWeb.MethodDescriptor<v1_api_game_session_pb.Session, v1_api_game_session_pb.Session>;
    watchQueue(request: v1_api_game_session_pb.Session, metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<v1_api_game_session_pb.Session>;
}
