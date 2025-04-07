import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallOptions, ChannelCredentials, Client, ClientDuplexStream, type ClientOptions, handleBidiStreamingCall, Metadata, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { StandardResponse } from "../../std/responses";
import { GameEvent } from "../game/event";
import { GlobalEvent } from "../global/event";
import { PlayerAction } from "../player/action";
export declare const protobufPackage = "v1.api.common";
/** / Websocket Events, message can trigger API calls or other events */
export interface WebSocketMessage {
    globalEvent?: GlobalEvent | undefined;
    gameEvent?: GameEvent | undefined;
    playerAction?: PlayerAction | undefined;
    response?: StandardResponse | undefined;
}
export declare const WebSocketMessage: MessageFns<WebSocketMessage>;
/** / Global service for joining and leaving games */
export type GlobalServiceService = typeof GlobalServiceService;
export declare const GlobalServiceService: {
    /** / Stream events from the global service */
    readonly streamEvents: {
        readonly path: "/v1.api.common.GlobalService/StreamEvents";
        readonly requestStream: true;
        readonly responseStream: true;
        readonly requestSerialize: (value: GlobalEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GlobalEvent;
        readonly responseSerialize: (value: GlobalEvent) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GlobalEvent;
    };
};
export interface GlobalServiceServer extends UntypedServiceImplementation {
    /** / Stream events from the global service */
    streamEvents: handleBidiStreamingCall<GlobalEvent, GlobalEvent>;
}
export interface GlobalServiceClient extends Client {
    /** / Stream events from the global service */
    streamEvents(): ClientDuplexStream<GlobalEvent, GlobalEvent>;
    streamEvents(options: Partial<CallOptions>): ClientDuplexStream<GlobalEvent, GlobalEvent>;
    streamEvents(metadata: Metadata, options?: Partial<CallOptions>): ClientDuplexStream<GlobalEvent, GlobalEvent>;
}
export declare const GlobalServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): GlobalServiceClient;
    service: typeof GlobalServiceService;
    serviceName: string;
};
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
