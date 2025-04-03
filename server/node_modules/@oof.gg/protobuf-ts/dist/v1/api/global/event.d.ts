import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "v1.api.global";
/** Global Events, message can trigger API calls or other events */
export interface GlobalEvent {
    /** / Unique identifier for the event to prevent duplicates, and to be able to retrieve the event from the server if necessary */
    id: string;
    /** / Event name */
    eventName: string;
    /** / Unix timestamp in milliseconds to synchronize time across clients */
    timestamp: number;
    /** / Game ID */
    gameId?: string | undefined;
    /** / Player ID */
    playerId?: string | undefined;
    /** / Team ID */
    teamId?: string | undefined;
    /** / Can be a key-value pair and the values can be string, int, float, or bool */
    attributes: {
        [key: string]: GlobalEvent_EventAttribute;
    };
    /** / Enum for event types */
    type: GlobalEvent_EventType;
}
/** / Enum for event types */
export declare enum GlobalEvent_EventType {
    /** CUSTOM - / Custom events */
    CUSTOM = 0,
    /** ANNOUNCEMENT - / Announcements */
    ANNOUNCEMENT = 1,
    /** ALERT - / Alerts */
    ALERT = 2,
    /** EVENT - / Events */
    EVENT = 3,
    /** REQUEST - / Requests */
    REQUEST = 4,
    UNRECOGNIZED = -1
}
export declare function globalEvent_EventTypeFromJSON(object: any): GlobalEvent_EventType;
export declare function globalEvent_EventTypeToJSON(object: GlobalEvent_EventType): string;
export interface GlobalEvent_AttributesEntry {
    key: string;
    value: GlobalEvent_EventAttribute | undefined;
}
/** / Message for event attributes */
export interface GlobalEvent_EventAttribute {
    stringValue?: string | undefined;
    intValue?: number | undefined;
    floatValue?: number | undefined;
    boolValue?: boolean | undefined;
}
export declare const GlobalEvent: MessageFns<GlobalEvent>;
export declare const GlobalEvent_AttributesEntry: MessageFns<GlobalEvent_AttributesEntry>;
export declare const GlobalEvent_EventAttribute: MessageFns<GlobalEvent_EventAttribute>;
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
