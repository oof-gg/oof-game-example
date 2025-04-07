import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "v1.api.game";
/** / Game Events, message can trigger API calls or other events */
export interface GameEvent {
    /** / Unique identifier for the event to prevent duplicates, and to be able to retrieve the event from the server if necessary */
    id?: string | undefined;
    eventName?: string | undefined;
    timestamp: number;
    gameId?: string | undefined;
    playerId?: string | undefined;
    sessionId?: string | undefined;
    teamId?: string | undefined;
    attributes: {
        [key: string]: GameEvent_EventAttribute;
    };
    type: GameEvent_EventType;
    data?: string | undefined;
}
/** CUSTOM - Custom events */
export declare enum GameEvent_EventType {
    TYPE_UNSPECIFIED = 0,
    TYPE_ACTION = 1,
    TYPE_GAME_EVENT = 2,
    TYPE_SYSTEM = 3,
    TYPE_COMPLETION = 4,
    UNRECOGNIZED = -1
}
export declare function gameEvent_EventTypeFromJSON(object: any): GameEvent_EventType;
export declare function gameEvent_EventTypeToJSON(object: GameEvent_EventType): string;
export interface GameEvent_AttributesEntry {
    key: string;
    value: GameEvent_EventAttribute | undefined;
}
export interface GameEvent_EventAttribute {
    stringValue?: string | undefined;
    intValue?: number | undefined;
    floatValue?: number | undefined;
    boolValue?: boolean | undefined;
}
export declare const GameEvent: MessageFns<GameEvent>;
export declare const GameEvent_AttributesEntry: MessageFns<GameEvent_AttributesEntry>;
export declare const GameEvent_EventAttribute: MessageFns<GameEvent_EventAttribute>;
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
