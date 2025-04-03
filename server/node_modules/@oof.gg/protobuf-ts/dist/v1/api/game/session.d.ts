import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { RegionEnum } from "../../std/regions";
export declare const protobufPackage = "v1.api.game";
/** / Represents the state of a game session */
export declare enum GameState {
    /** STATE_CREATED - / The session has been created */
    STATE_CREATED = 0,
    /** STATE_WAITING - / The session is waiting for players to join */
    STATE_WAITING = 1,
    /** STATE_STARTED - / The session has started */
    STATE_STARTED = 2,
    /** STATE_FINISHED - / The session has finished */
    STATE_FINISHED = 3,
    /** STATE_DELETED - / The session has been deleted */
    STATE_DELETED = 4,
    /** STATE_PAUSED - / The session is paused */
    STATE_PAUSED = 5,
    /** STATE_QUEUED - / The session is queued */
    STATE_QUEUED = 6,
    UNRECOGNIZED = -1
}
export declare function gameStateFromJSON(object: any): GameState;
export declare function gameStateToJSON(object: GameState): string;
/**
 * TODO: Check if this is the best way to represent game attributes
 * / Represents a game attribute
 */
export interface GameAttribute {
    stringValue?: string | undefined;
    intValue?: number | undefined;
    floatValue?: number | undefined;
    boolValue?: boolean | undefined;
}
/** / Represents a game session, can be used to store game state and attributes such as scores, times, players, and active in-game configurations. */
export interface Session {
    id: string;
    gameId: string;
    /**
     * / Players in the session (can be used to store player state and attributes)
     * / Optional: This can be used to store player state and attributes, but not recommended for large player counts.
     */
    userIds: string[];
    /** / Game state as defined by the GameState enum */
    state: GameState;
    /** / Game attributes as a map of string to GameAttribute */
    attributes: {
        [key: string]: GameAttribute;
    };
    region?: RegionEnum | undefined;
    data?: string | undefined;
}
export interface Session_AttributesEntry {
    key: string;
    value: GameAttribute | undefined;
}
/** / Represents a game session creation request */
export interface SessionCreate {
    gameId: string;
    userIds: string[];
    state: GameState;
    attributes: {
        [key: string]: GameAttribute;
    };
    region?: RegionEnum | undefined;
    data?: string | undefined;
}
export interface SessionCreate_AttributesEntry {
    key: string;
    value: GameAttribute | undefined;
}
export interface SessionUpdate {
    id: string;
    gameId: string;
    userIds: string[];
    state: GameState;
    attributes: {
        [key: string]: GameAttribute;
    };
    region?: RegionEnum | undefined;
    data?: string | undefined;
}
export interface SessionUpdate_AttributesEntry {
    key: string;
    value: GameAttribute | undefined;
}
/** / Represents a game session update request */
export interface SessionGet {
    id?: string | undefined;
    gameId?: string | undefined;
}
/** / Represents a game session deletion request */
export interface SessionDelete {
    id: string;
    gameId: string;
}
/** / Represents a list of game sessions */
export interface Sessions {
    sessions: Session[];
}
export declare const GameAttribute: MessageFns<GameAttribute>;
export declare const Session: MessageFns<Session>;
export declare const Session_AttributesEntry: MessageFns<Session_AttributesEntry>;
export declare const SessionCreate: MessageFns<SessionCreate>;
export declare const SessionCreate_AttributesEntry: MessageFns<SessionCreate_AttributesEntry>;
export declare const SessionUpdate: MessageFns<SessionUpdate>;
export declare const SessionUpdate_AttributesEntry: MessageFns<SessionUpdate_AttributesEntry>;
export declare const SessionGet: MessageFns<SessionGet>;
export declare const SessionDelete: MessageFns<SessionDelete>;
export declare const Sessions: MessageFns<Sessions>;
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
