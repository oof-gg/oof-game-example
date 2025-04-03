import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "v1.api.global";
export declare enum RegionEnum {
    /** REGION_UNSPECIFIED - Default unspecified region */
    REGION_UNSPECIFIED = 0,
    /** NA_EAST - Americas */
    NA_EAST = 1,
    /** NA_WEST - North America West */
    NA_WEST = 2,
    /** SA - South America (all countries) */
    SA = 3,
    /** EU_WEST - Europe */
    EU_WEST = 4,
    /** EU_CENTRAL - Central Europe */
    EU_CENTRAL = 5,
    /** EU_NORTH - Northern Europe */
    EU_NORTH = 6,
    /** AS_EAST - Asia */
    AS_EAST = 7,
    /** AS_SE - Southeast Asia */
    AS_SE = 8,
    /** AS_SOUTH - South Asia */
    AS_SOUTH = 9,
    /** OC - Oceania */
    OC = 10,
    /** MENA - MENA (Middle East & North Africa) */
    MENA = 11,
    /** AFRICA - Sub-Saharan Africa */
    AFRICA = 12,
    /** GLOBAL - Global */
    GLOBAL = 13,
    UNRECOGNIZED = -1
}
export declare function regionEnumFromJSON(object: any): RegionEnum;
export declare function regionEnumToJSON(object: RegionEnum): string;
/** Message joining or leaving a game */
export interface JoinLeaveGame {
    playerId: string;
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
