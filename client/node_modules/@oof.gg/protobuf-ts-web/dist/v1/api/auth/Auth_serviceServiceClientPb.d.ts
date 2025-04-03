/**
 * @fileoverview gRPC-Web generated client stub for v1.api.auth
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import * as v1_api_auth_auth_service_pb from '../../../v1/api/auth/auth_service_pb';
export declare class AuthServiceClient {
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
    methodDescriptorLogin: grpcWeb.MethodDescriptor<v1_api_auth_auth_service_pb.LoginRequest, v1_api_auth_auth_service_pb.LoginResponse>;
    login(request: v1_api_auth_auth_service_pb.LoginRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_auth_auth_service_pb.LoginResponse>;
    login(request: v1_api_auth_auth_service_pb.LoginRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_auth_auth_service_pb.LoginResponse) => void): grpcWeb.ClientReadableStream<v1_api_auth_auth_service_pb.LoginResponse>;
    methodDescriptorRegister: grpcWeb.MethodDescriptor<v1_api_auth_auth_service_pb.RegisterRequest, v1_api_auth_auth_service_pb.RegisterResponse>;
    register(request: v1_api_auth_auth_service_pb.RegisterRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_auth_auth_service_pb.RegisterResponse>;
    register(request: v1_api_auth_auth_service_pb.RegisterRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_auth_auth_service_pb.RegisterResponse) => void): grpcWeb.ClientReadableStream<v1_api_auth_auth_service_pb.RegisterResponse>;
    methodDescriptorValidateToken: grpcWeb.MethodDescriptor<v1_api_auth_auth_service_pb.ValidateTokenRequest, v1_api_auth_auth_service_pb.ValidateTokenResponse>;
    validateToken(request: v1_api_auth_auth_service_pb.ValidateTokenRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_auth_auth_service_pb.ValidateTokenResponse>;
    validateToken(request: v1_api_auth_auth_service_pb.ValidateTokenRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_auth_auth_service_pb.ValidateTokenResponse) => void): grpcWeb.ClientReadableStream<v1_api_auth_auth_service_pb.ValidateTokenResponse>;
    methodDescriptorTwitchLogin: grpcWeb.MethodDescriptor<v1_api_auth_auth_service_pb.TwitchLoginRequest, v1_api_auth_auth_service_pb.LoginResponse>;
    twitchLogin(request: v1_api_auth_auth_service_pb.TwitchLoginRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_auth_auth_service_pb.LoginResponse>;
    twitchLogin(request: v1_api_auth_auth_service_pb.TwitchLoginRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_auth_auth_service_pb.LoginResponse) => void): grpcWeb.ClientReadableStream<v1_api_auth_auth_service_pb.LoginResponse>;
    methodDescriptorRefreshToken: grpcWeb.MethodDescriptor<v1_api_auth_auth_service_pb.RefreshTokenRequest, v1_api_auth_auth_service_pb.RefreshTokenResponse>;
    refreshToken(request: v1_api_auth_auth_service_pb.RefreshTokenRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_auth_auth_service_pb.RefreshTokenResponse>;
    refreshToken(request: v1_api_auth_auth_service_pb.RefreshTokenRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_auth_auth_service_pb.RefreshTokenResponse) => void): grpcWeb.ClientReadableStream<v1_api_auth_auth_service_pb.RefreshTokenResponse>;
}
