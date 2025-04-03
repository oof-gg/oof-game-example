/**
 * @fileoverview gRPC-Web generated client stub for v1.api.common
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
export declare class GlobalServiceClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: any;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: any;
    });
}
