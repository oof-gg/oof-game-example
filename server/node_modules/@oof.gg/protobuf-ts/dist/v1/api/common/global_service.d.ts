import { type CallOptions, ChannelCredentials, Client, ClientDuplexStream, type ClientOptions, handleBidiStreamingCall, Metadata, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { GlobalEvent } from "../global/event";
export declare const protobufPackage = "v1.api.common";
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
