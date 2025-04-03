/**
 * @fileoverview gRPC-Web generated client stub for v1.api.game
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as v1_api_game_entity_pb from '../../../v1/api/game/entity_pb';
import * as v1_api_game_join_leave_pb from '../../../v1/api/game/join_leave_pb';
import * as v1_api_game_session_pb from '../../../v1/api/game/session_pb';
import * as v1_std_responses_pb from '../../../v1/std/responses_pb';
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
    methodDescriptorJoinLeave: any;
    joinLeave(request: v1_api_game_join_leave_pb.JoinLeaveGame, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_session_pb.Session>;
    joinLeave(request: v1_api_game_join_leave_pb.JoinLeaveGame, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_session_pb.Session) => void): grpcWeb.ClientReadableStream<v1_api_game_session_pb.Session>;
    methodDescriptorCreateSession: any;
    createSession(request: v1_api_game_session_pb.SessionCreate, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_session_pb.Session>;
    createSession(request: v1_api_game_session_pb.SessionCreate, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_session_pb.Session) => void): grpcWeb.ClientReadableStream<v1_api_game_session_pb.Session>;
    methodDescriptorGetSession: any;
    getSession(request: v1_api_game_session_pb.SessionGet, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_session_pb.Sessions>;
    getSession(request: v1_api_game_session_pb.SessionGet, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_session_pb.Sessions) => void): grpcWeb.ClientReadableStream<v1_api_game_session_pb.Sessions>;
    methodDescriptorUpdateSession: any;
    updateSession(request: v1_api_game_session_pb.SessionUpdate, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_session_pb.Session>;
    updateSession(request: v1_api_game_session_pb.SessionUpdate, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_session_pb.Session) => void): grpcWeb.ClientReadableStream<v1_api_game_session_pb.Session>;
    methodDescriptorDeleteSession: any;
    deleteSession(request: v1_api_game_session_pb.SessionDelete, metadata?: grpcWeb.Metadata | null): Promise<v1_std_responses_pb.StandardResponse>;
    deleteSession(request: v1_api_game_session_pb.SessionDelete, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_std_responses_pb.StandardResponse) => void): grpcWeb.ClientReadableStream<v1_std_responses_pb.StandardResponse>;
    methodDescriptorCreateEntity: any;
    createEntity(request: v1_api_game_entity_pb.EntityCreateRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_entity_pb.EntityCreateResponse>;
    createEntity(request: v1_api_game_entity_pb.EntityCreateRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_entity_pb.EntityCreateResponse) => void): grpcWeb.ClientReadableStream<v1_api_game_entity_pb.EntityCreateResponse>;
    methodDescriptorGetEntity: any;
    getEntity(request: v1_api_game_entity_pb.EntityGetRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_entity_pb.EntityGetResponse>;
    getEntity(request: v1_api_game_entity_pb.EntityGetRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_entity_pb.EntityGetResponse) => void): grpcWeb.ClientReadableStream<v1_api_game_entity_pb.EntityGetResponse>;
    methodDescriptorUpdateEntity: any;
    updateEntity(request: v1_api_game_entity_pb.EntityUpdateRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_entity_pb.EntityUpdateResponse>;
    updateEntity(request: v1_api_game_entity_pb.EntityUpdateRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_entity_pb.EntityUpdateResponse) => void): grpcWeb.ClientReadableStream<v1_api_game_entity_pb.EntityUpdateResponse>;
    methodDescriptorDeleteEntity: any;
    deleteEntity(request: v1_api_game_entity_pb.EntityDeleteRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_game_entity_pb.EntityDeleteResponse>;
    deleteEntity(request: v1_api_game_entity_pb.EntityDeleteRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_game_entity_pb.EntityDeleteResponse) => void): grpcWeb.ClientReadableStream<v1_api_game_entity_pb.EntityDeleteResponse>;
    methodDescriptorWatchQueue: any;
    watchQueue(request: v1_api_game_session_pb.Session, metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<v1_api_game_session_pb.Session>;
}
