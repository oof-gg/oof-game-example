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
    methodDescriptorLogin: any;
    login(request: v1_api_auth_auth_service_pb.LoginRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_auth_auth_service_pb.LoginResponse>;
    login(request: v1_api_auth_auth_service_pb.LoginRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_auth_auth_service_pb.LoginResponse) => void): grpcWeb.ClientReadableStream<v1_api_auth_auth_service_pb.LoginResponse>;
    methodDescriptorRegister: any;
    register(request: v1_api_auth_auth_service_pb.RegisterRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_auth_auth_service_pb.RegisterResponse>;
    register(request: v1_api_auth_auth_service_pb.RegisterRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_auth_auth_service_pb.RegisterResponse) => void): grpcWeb.ClientReadableStream<v1_api_auth_auth_service_pb.RegisterResponse>;
    methodDescriptorValidateToken: any;
    validateToken(request: v1_api_auth_auth_service_pb.ValidateTokenRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_auth_auth_service_pb.ValidateTokenResponse>;
    validateToken(request: v1_api_auth_auth_service_pb.ValidateTokenRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_auth_auth_service_pb.ValidateTokenResponse) => void): grpcWeb.ClientReadableStream<v1_api_auth_auth_service_pb.ValidateTokenResponse>;
    methodDescriptorRefreshToken: any;
    refreshToken(request: v1_api_auth_auth_service_pb.RefreshTokenRequest, metadata?: grpcWeb.Metadata | null): Promise<v1_api_auth_auth_service_pb.RefreshTokenResponse>;
    refreshToken(request: v1_api_auth_auth_service_pb.RefreshTokenRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.RpcError, response: v1_api_auth_auth_service_pb.RefreshTokenResponse) => void): grpcWeb.ClientReadableStream<v1_api_auth_auth_service_pb.RefreshTokenResponse>;
}
