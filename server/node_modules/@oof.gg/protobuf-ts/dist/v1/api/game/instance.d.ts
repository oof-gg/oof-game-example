import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "v1.api.game";
/** / Represents the state of the game instance that is currently running */
export declare enum InstanceStateEnum {
    INITIALIZING = 0,
    RUNNING = 1,
    PAUSED = 2,
    CRASHED = 3,
    ABORTED = 4,
    SHUTTING_DOWN = 5,
    STOPPED = 6,
    UNRECOGNIZED = -1
}
export declare function instanceStateEnumFromJSON(object: any): InstanceStateEnum;
export declare function instanceStateEnumToJSON(object: InstanceStateEnum): string;
/** / Available commands to be sent to the game instance */
export declare enum InstanceCommandEnum {
    START = 0,
    PAUSE = 1,
    RESUME = 2,
    STOP = 3,
    ABORT = 4,
    SHUTDOWN = 5,
    UNRECOGNIZED = -1
}
export declare function instanceCommandEnumFromJSON(object: any): InstanceCommandEnum;
export declare function instanceCommandEnumToJSON(object: InstanceCommandEnum): string;
/** / Represents the game instance (between App and Game), can be used to trigger operations to run in parent App from child Game container over messages. This would be the local state of the game instance last received. */
export interface Instance {
    state: InstanceStateEnum;
    gameId?: string | undefined;
    playerId?: string | undefined;
    data?: string | undefined;
}
/** / Incoming message from the game instance to the app instance (between Game and App) */
export interface InstanceNotification {
    state: InstanceStateEnum;
    gameId?: string | undefined;
    playerId?: string | undefined;
    data?: string | undefined;
}
/** / Represents the command to be sent to the game instance that is currently running (not the game state data itself) */
export interface InstanceCommandMessage {
    state: InstanceCommandEnum;
    gameId?: string | undefined;
    playerId?: string | undefined;
    data?: string | undefined;
    authConfig?: AuthConfig | undefined;
}
/** / Represents the authentication and configuration for the game instance */
export interface AuthConfig {
    token: string;
    config: {
        [key: string]: string;
    };
}
export interface AuthConfig_ConfigEntry {
    key: string;
    value: string;
}
export declare const Instance: MessageFns<Instance>;
export declare const InstanceNotification: MessageFns<InstanceNotification>;
export declare const InstanceCommandMessage: MessageFns<InstanceCommandMessage>;
export declare const AuthConfig: MessageFns<AuthConfig>;
export declare const AuthConfig_ConfigEntry: MessageFns<AuthConfig_ConfigEntry>;
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
