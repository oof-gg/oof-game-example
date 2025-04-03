import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { RegionEnum } from "../../std/regions";
export declare const protobufPackage = "v1.api.game";
/** / Message joining or leaving a game */
export interface JoinLeaveGame {
    userId: string;
    gameId: string;
    action: JoinLeaveGame_Action;
    teamId?: string | undefined;
    sessionId?: string | undefined;
    region?: RegionEnum | undefined;
}
export declare enum JoinLeaveGame_Action {
    JOIN = 0,
    LEAVE = 1,
    UNRECOGNIZED = -1
}
export declare function joinLeaveGame_ActionFromJSON(object: any): JoinLeaveGame_Action;
export declare function joinLeaveGame_ActionToJSON(object: JoinLeaveGame_Action): string;
export declare const JoinLeaveGame: MessageFns<JoinLeaveGame>;
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
