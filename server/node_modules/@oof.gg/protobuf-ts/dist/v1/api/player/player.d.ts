import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "v1.api.player";
export declare enum PlayerType {
    /** HUMAN - default */
    HUMAN = 0,
    AI = 1,
    UNRECOGNIZED = -1
}
export declare function playerTypeFromJSON(object: any): PlayerType;
export declare function playerTypeToJSON(object: PlayerType): string;
export declare enum PlayerStatus {
    /** ACTIVE - default */
    ACTIVE = 0,
    INACTIVE = 1,
    UNRECOGNIZED = -1
}
export declare function playerStatusFromJSON(object: any): PlayerStatus;
export declare function playerStatusToJSON(object: PlayerStatus): string;
export interface Player {
    id: string;
    username: string;
    email?: string | undefined;
    team?: string | undefined;
    score: number;
    type: PlayerType;
    status: PlayerStatus;
    /** Role of the player in the game */
    role?: string | undefined;
}
export interface PlayerCreate {
    username: string;
    email?: string | undefined;
    team?: string | undefined;
    score: number;
    type: PlayerType;
    status: PlayerStatus;
    role?: string | undefined;
}
export interface PlayerUpdate {
    id: string;
    team?: string | undefined;
    type?: PlayerType | undefined;
    status?: PlayerStatus | undefined;
    role?: string | undefined;
}
export interface PlayerGet {
    id?: string | undefined;
}
export interface Players {
    players: Player[];
}
export declare const Player: MessageFns<Player>;
export declare const PlayerCreate: MessageFns<PlayerCreate>;
export declare const PlayerUpdate: MessageFns<PlayerUpdate>;
export declare const PlayerGet: MessageFns<PlayerGet>;
export declare const Players: MessageFns<Players>;
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
