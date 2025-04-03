/**
 * @fileoverview gRPC-Web generated client stub for v1.api.player
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as v1_api_player_player_pb from '../../../v1/api/player/player_pb';
export declare class PlayerServiceClient {
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
    methodDescriptorCreatePlayer: grpcWeb.MethodDescriptor<v1_api_player_player_pb.Player, v1_api_player_player_pb.Player>;
    createPlayer(request: v1_api_player_player_pb.Player, metadata?: grpcWeb.Metadata | null): Promise<v1_api_player_player_pb.Player>;
    createPlayer(request: v1_api_player_player_pb.Player, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_player_player_pb.Player) => void): grpcWeb.ClientReadableStream<v1_api_player_player_pb.Player>;
    methodDescriptorGetPlayer: grpcWeb.MethodDescriptor<v1_api_player_player_pb.PlayerGet, v1_api_player_player_pb.Players>;
    getPlayer(request: v1_api_player_player_pb.PlayerGet, metadata?: grpcWeb.Metadata | null): Promise<v1_api_player_player_pb.Players>;
    getPlayer(request: v1_api_player_player_pb.PlayerGet, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_player_player_pb.Players) => void): grpcWeb.ClientReadableStream<v1_api_player_player_pb.Players>;
    methodDescriptorUpdatePlayer: grpcWeb.MethodDescriptor<v1_api_player_player_pb.PlayerUpdate, v1_api_player_player_pb.Player>;
    updatePlayer(request: v1_api_player_player_pb.PlayerUpdate, metadata?: grpcWeb.Metadata | null): Promise<v1_api_player_player_pb.Player>;
    updatePlayer(request: v1_api_player_player_pb.PlayerUpdate, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_player_player_pb.Player) => void): grpcWeb.ClientReadableStream<v1_api_player_player_pb.Player>;
}
