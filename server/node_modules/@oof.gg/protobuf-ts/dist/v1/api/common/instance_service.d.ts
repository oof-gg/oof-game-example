import { type CallOptions, ChannelCredentials, Client, ClientDuplexStream, type ClientOptions, handleBidiStreamingCall, Metadata, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { GameEvent } from "../game/event";
export declare const protobufPackage = "v1.api.common";
export type InstanceServiceService = typeof InstanceServiceService;
export declare const InstanceServiceService: {
    readonly streamEvents: {
        readonly path: "/v1.api.common.InstanceService/StreamEvents";
        readonly requestStream: true;
        readonly responseStream: true;
        readonly requestSerialize: (value: GameEvent) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GameEvent;
        readonly responseSerialize: (value: GameEvent) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GameEvent;
    };
};
export interface InstanceServiceServer extends UntypedServiceImplementation {
    streamEvents: handleBidiStreamingCall<GameEvent, GameEvent>;
}
export interface InstanceServiceClient extends Client {
    streamEvents(): ClientDuplexStream<GameEvent, GameEvent>;
    streamEvents(options: Partial<CallOptions>): ClientDuplexStream<GameEvent, GameEvent>;
    streamEvents(metadata: Metadata, options?: Partial<CallOptions>): ClientDuplexStream<GameEvent, GameEvent>;
}
export declare const InstanceServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): InstanceServiceClient;
    service: typeof InstanceServiceService;
    serviceName: string;
};
