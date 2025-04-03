import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Any } from "../../google/protobuf/any";
export declare const protobufPackage = "v1.std";
export interface Status {
    /** The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code]. */
    code: number;
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.
     */
    message: string;
    /**
     * A list of messages that carry the error details.  There will be a
     * common set of message types for APIs to use.
     */
    details: string[];
}
/** Unify everything into one response. */
export interface StandardResponse {
    /** Status code (e.g., HTTP or custom). */
    code: number;
    /** This could be your success or error message. */
    message: string;
    /** If there's an error, you could store it here or just use google.rpc.Status directly. */
    error: Status | undefined;
    /** The actual payload. */
    data: Any | undefined;
}
/** / Metadata for paginated responses. */
export interface PaginationMetadata {
    /** Number of items per page */
    pageSize?: number | undefined;
    /** Token for the previous page */
    prevPageToken?: string | undefined;
    /** Token for the next page */
    nextPageToken?: string | undefined;
}
/** / A paginated response wrapper. */
export interface PaginatedResponse {
    /** Status code (e.g., HTTP or custom). */
    code: number;
    /** This could be your success or error message. */
    message: string;
    /** If there's an error, you could store it here or just use google.rpc.Status directly. */
    error: Status | undefined;
    /** Pagination metadata */
    pagination: PaginationMetadata | undefined;
    /** The actual payload. */
    data: Any | undefined;
}
export declare const Status: MessageFns<Status>;
export declare const StandardResponse: MessageFns<StandardResponse>;
export declare const PaginationMetadata: MessageFns<PaginationMetadata>;
export declare const PaginatedResponse: MessageFns<PaginatedResponse>;
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
