import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
export declare const protobufPackage = "v1.api.auth";
/** / Request for Login RPC */
export interface LoginRequest {
    /** / Username or email */
    username: string;
    /** / User's password */
    password: string;
}
/** / Response for Login RPC */
export interface LoginResponse {
    /** / JWT Access Token */
    accessToken: string;
    /** / Refresh Token */
    refreshToken: string;
    /** / Token expiration time in seconds */
    expiresIn: number;
}
/** / Request for ValidateToken RPC */
export interface ValidateTokenRequest {
    /** / JWT to validate */
    accessToken: string;
}
/** / Response for ValidateToken RPC */
export interface ValidateTokenResponse {
    /** / Indicates if the token is valid */
    isValid: boolean;
    /** / ID of the authenticated user */
    userId: string;
    /** / Role of the user (e.g., admin, user) */
    role: string;
}
/** / Request for Register RPC */
export interface RegisterRequest {
    /** / Username */
    username: string;
    /** / Email */
    email: string;
    /** / User's password */
    password: string;
}
/** / Response for Register RPC with the user ID, access token, refresh token, and expiration time */
export interface RegisterResponse {
    /** / ID of the registered user */
    userId: string;
    /** / JWT Access Token */
    accessToken: string;
    /** / Refresh Token */
    refreshToken: string;
    /** / Token expiration time in seconds */
    expiresIn: number;
}
/** / Request for RefreshToken RPC */
export interface RefreshTokenRequest {
    /** / Refresh Token */
    refreshToken: string;
}
/** / Response for RefreshToken RPC */
export interface RefreshTokenResponse {
    /** / New JWT Access Token */
    accessToken: string;
    /** / New Refresh Token */
    refreshToken: string;
    /** / Token expiration time in seconds */
    expiresIn: number;
}
export declare const LoginRequest: MessageFns<LoginRequest>;
export declare const LoginResponse: MessageFns<LoginResponse>;
export declare const ValidateTokenRequest: MessageFns<ValidateTokenRequest>;
export declare const ValidateTokenResponse: MessageFns<ValidateTokenResponse>;
export declare const RegisterRequest: MessageFns<RegisterRequest>;
export declare const RegisterResponse: MessageFns<RegisterResponse>;
export declare const RefreshTokenRequest: MessageFns<RefreshTokenRequest>;
export declare const RefreshTokenResponse: MessageFns<RefreshTokenResponse>;
/** / Service definition for authentication */
export type AuthServiceService = typeof AuthServiceService;
export declare const AuthServiceService: {
    /** / User login RPC to generate an access token */
    readonly login: {
        readonly path: "/v1.api.auth.AuthService/Login";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: LoginRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => LoginRequest;
        readonly responseSerialize: (value: LoginResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => LoginResponse;
    };
    /** / User registration RPC to create a new user */
    readonly register: {
        readonly path: "/v1.api.auth.AuthService/Register";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RegisterRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RegisterRequest;
        readonly responseSerialize: (value: RegisterResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => RegisterResponse;
    };
    /** / RPC to validate an existing token */
    readonly validateToken: {
        readonly path: "/v1.api.auth.AuthService/ValidateToken";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ValidateTokenRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ValidateTokenRequest;
        readonly responseSerialize: (value: ValidateTokenResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ValidateTokenResponse;
    };
    /** / RPC to refresh an access token using a refresh token */
    readonly refreshToken: {
        readonly path: "/v1.api.auth.AuthService/RefreshToken";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RefreshTokenRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RefreshTokenRequest;
        readonly responseSerialize: (value: RefreshTokenResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => RefreshTokenResponse;
    };
};
export interface AuthServiceServer extends UntypedServiceImplementation {
    /** / User login RPC to generate an access token */
    login: handleUnaryCall<LoginRequest, LoginResponse>;
    /** / User registration RPC to create a new user */
    register: handleUnaryCall<RegisterRequest, RegisterResponse>;
    /** / RPC to validate an existing token */
    validateToken: handleUnaryCall<ValidateTokenRequest, ValidateTokenResponse>;
    /** / RPC to refresh an access token using a refresh token */
    refreshToken: handleUnaryCall<RefreshTokenRequest, RefreshTokenResponse>;
}
export interface AuthServiceClient extends Client {
    /** / User login RPC to generate an access token */
    login(request: LoginRequest, callback: (error: ServiceError | null, response: LoginResponse) => void): ClientUnaryCall;
    login(request: LoginRequest, metadata: Metadata, callback: (error: ServiceError | null, response: LoginResponse) => void): ClientUnaryCall;
    login(request: LoginRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: LoginResponse) => void): ClientUnaryCall;
    /** / User registration RPC to create a new user */
    register(request: RegisterRequest, callback: (error: ServiceError | null, response: RegisterResponse) => void): ClientUnaryCall;
    register(request: RegisterRequest, metadata: Metadata, callback: (error: ServiceError | null, response: RegisterResponse) => void): ClientUnaryCall;
    register(request: RegisterRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: RegisterResponse) => void): ClientUnaryCall;
    /** / RPC to validate an existing token */
    validateToken(request: ValidateTokenRequest, callback: (error: ServiceError | null, response: ValidateTokenResponse) => void): ClientUnaryCall;
    validateToken(request: ValidateTokenRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ValidateTokenResponse) => void): ClientUnaryCall;
    validateToken(request: ValidateTokenRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ValidateTokenResponse) => void): ClientUnaryCall;
    /** / RPC to refresh an access token using a refresh token */
    refreshToken(request: RefreshTokenRequest, callback: (error: ServiceError | null, response: RefreshTokenResponse) => void): ClientUnaryCall;
    refreshToken(request: RefreshTokenRequest, metadata: Metadata, callback: (error: ServiceError | null, response: RefreshTokenResponse) => void): ClientUnaryCall;
    refreshToken(request: RefreshTokenRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: RefreshTokenResponse) => void): ClientUnaryCall;
}
export declare const AuthServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AuthServiceClient;
    service: typeof AuthServiceService;
    serviceName: string;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
    fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
export {};
