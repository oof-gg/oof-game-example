import * as jspb from 'google-protobuf'



export class LoginRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): LoginRequest;

  getPassword(): string;
  setPassword(value: string): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class TwitchLoginRequest extends jspb.Message {
  getHelixToken(): string;
  setHelixToken(value: string): TwitchLoginRequest;

  getClientId(): string;
  setClientId(value: string): TwitchLoginRequest;

  getUserId(): string;
  setUserId(value: string): TwitchLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TwitchLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TwitchLoginRequest): TwitchLoginRequest.AsObject;
  static serializeBinaryToWriter(message: TwitchLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TwitchLoginRequest;
  static deserializeBinaryFromReader(message: TwitchLoginRequest, reader: jspb.BinaryReader): TwitchLoginRequest;
}

export namespace TwitchLoginRequest {
  export type AsObject = {
    helixToken: string,
    clientId: string,
    userId: string,
  }
}

export class LoginResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): LoginResponse;

  getRefreshToken(): string;
  setRefreshToken(value: string): LoginResponse;

  getExpiresIn(): number;
  setExpiresIn(value: number): LoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    accessToken: string,
    refreshToken: string,
    expiresIn: number,
  }
}

export class ValidateTokenRequest extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): ValidateTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateTokenRequest): ValidateTokenRequest.AsObject;
  static serializeBinaryToWriter(message: ValidateTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateTokenRequest;
  static deserializeBinaryFromReader(message: ValidateTokenRequest, reader: jspb.BinaryReader): ValidateTokenRequest;
}

export namespace ValidateTokenRequest {
  export type AsObject = {
    accessToken: string,
  }
}

export class ValidateTokenResponse extends jspb.Message {
  getIsValid(): boolean;
  setIsValid(value: boolean): ValidateTokenResponse;

  getUserId(): string;
  setUserId(value: string): ValidateTokenResponse;

  getRole(): string;
  setRole(value: string): ValidateTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateTokenResponse): ValidateTokenResponse.AsObject;
  static serializeBinaryToWriter(message: ValidateTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateTokenResponse;
  static deserializeBinaryFromReader(message: ValidateTokenResponse, reader: jspb.BinaryReader): ValidateTokenResponse;
}

export namespace ValidateTokenResponse {
  export type AsObject = {
    isValid: boolean,
    userId: string,
    role: string,
  }
}

export class RegisterRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): RegisterRequest;

  getEmail(): string;
  setEmail(value: string): RegisterRequest;

  getPassword(): string;
  setPassword(value: string): RegisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    username: string,
    email: string,
    password: string,
  }
}

export class RegisterResponse extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): RegisterResponse;

  getAccessToken(): string;
  setAccessToken(value: string): RegisterResponse;

  getRefreshToken(): string;
  setRefreshToken(value: string): RegisterResponse;

  getExpiresIn(): number;
  setExpiresIn(value: number): RegisterResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterResponse): RegisterResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterResponse;
  static deserializeBinaryFromReader(message: RegisterResponse, reader: jspb.BinaryReader): RegisterResponse;
}

export namespace RegisterResponse {
  export type AsObject = {
    userId: string,
    accessToken: string,
    refreshToken: string,
    expiresIn: number,
  }
}

export class RefreshTokenRequest extends jspb.Message {
  getRefreshToken(): string;
  setRefreshToken(value: string): RefreshTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshTokenRequest): RefreshTokenRequest.AsObject;
  static serializeBinaryToWriter(message: RefreshTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshTokenRequest;
  static deserializeBinaryFromReader(message: RefreshTokenRequest, reader: jspb.BinaryReader): RefreshTokenRequest;
}

export namespace RefreshTokenRequest {
  export type AsObject = {
    refreshToken: string,
  }
}

export class RefreshTokenResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): RefreshTokenResponse;

  getRefreshToken(): string;
  setRefreshToken(value: string): RefreshTokenResponse;

  getExpiresIn(): number;
  setExpiresIn(value: number): RefreshTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshTokenResponse): RefreshTokenResponse.AsObject;
  static serializeBinaryToWriter(message: RefreshTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshTokenResponse;
  static deserializeBinaryFromReader(message: RefreshTokenResponse, reader: jspb.BinaryReader): RefreshTokenResponse;
}

export namespace RefreshTokenResponse {
  export type AsObject = {
    accessToken: string,
    refreshToken: string,
    expiresIn: number,
  }
}

