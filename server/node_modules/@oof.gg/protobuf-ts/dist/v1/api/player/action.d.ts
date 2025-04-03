import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "v1.api.player";
/** / Type of action */
export declare enum ActionType {
    /** CUSTOM - / Custom action */
    CUSTOM = 0,
    /** MOVE - / Move action */
    MOVE = 1,
    /** JUMP - / Jump action */
    JUMP = 2,
    /** SHOOT - / Shoot action */
    SHOOT = 3,
    /** PICKUP - / Pickup action */
    PICKUP = 4,
    /** DROP - / Drop action */
    DROP = 5,
    /** USE - / Use action */
    USE = 6,
    /** INTERACT - / Interact action */
    INTERACT = 7,
    UNRECOGNIZED = -1
}
export declare function actionTypeFromJSON(object: any): ActionType;
export declare function actionTypeToJSON(object: ActionType): string;
export interface PlayerAction {
    /** / Unique identifier of the player */
    playerId: string;
    /** / Unique identifier of the session */
    sessionId: string;
    /** / Unique identifier of the game */
    gameId: string;
    /** / Type of action */
    type: ActionType;
    /** / Position of the player (optional) */
    position?: Position | undefined;
    /** / Velocity of the player (optional) */
    velocity?: Velocity | undefined;
    /** / Custom actions the player can take */
    action: {
        [key: string]: PlayerActionAttribute;
    };
    timestamp: number;
}
export interface PlayerAction_ActionEntry {
    key: string;
    value: PlayerActionAttribute | undefined;
}
/** / Position of the player */
export interface Position {
    x: number;
    y: number;
    z: number;
}
/** / Velocity of the player */
export interface Velocity {
    x: number;
    y: number;
    z: number;
}
/** / Custom actions the player can take */
export interface PlayerActionAttribute {
    stringValue?: string | undefined;
    intValue?: number | undefined;
    floatValue?: number | undefined;
    boolValue?: boolean | undefined;
}
export declare const PlayerAction: MessageFns<PlayerAction>;
export declare const PlayerAction_ActionEntry: MessageFns<PlayerAction_ActionEntry>;
export declare const Position: MessageFns<Position>;
export declare const Velocity: MessageFns<Velocity>;
export declare const PlayerActionAttribute: MessageFns<PlayerActionAttribute>;
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
