import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "v1.api.player";
export interface State {
    playerId: string;
    sessionId: string;
    gameId: string;
    state: State_PlayerState;
    attributes: {
        [key: string]: State_PlayerAttribute;
    };
    timestamp: number;
}
export declare enum State_PlayerState {
    WAITING = 0,
    PLAYING = 1,
    FINISHED = 2,
    UNRECOGNIZED = -1
}
export declare function state_PlayerStateFromJSON(object: any): State_PlayerState;
export declare function state_PlayerStateToJSON(object: State_PlayerState): string;
export interface State_AttributesEntry {
    key: string;
    value: State_PlayerAttribute | undefined;
}
export interface State_PlayerAttribute {
    stringValue?: string | undefined;
    intValue?: number | undefined;
    floatValue?: number | undefined;
    boolValue?: boolean | undefined;
}
export declare const State: MessageFns<State>;
export declare const State_AttributesEntry: MessageFns<State_AttributesEntry>;
export declare const State_PlayerAttribute: MessageFns<State_PlayerAttribute>;
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
