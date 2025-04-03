import * as jspb from 'google-protobuf'

import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb'; // proto import: "google/protobuf/any.proto"


export class Status extends jspb.Message {
  getCode(): number;
  setCode(value: number): Status;

  getMessage(): string;
  setMessage(value: string): Status;

  getDetailsList(): Array<string>;
  setDetailsList(value: Array<string>): Status;
  clearDetailsList(): Status;
  addDetails(value: string, index?: number): Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    code: number,
    message: string,
    detailsList: Array<string>,
  }
}

export class StandardResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): StandardResponse;

  getMessage(): string;
  setMessage(value: string): StandardResponse;

  getError(): Status | undefined;
  setError(value?: Status): StandardResponse;
  hasError(): boolean;
  clearError(): StandardResponse;

  getData(): google_protobuf_any_pb.Any | undefined;
  setData(value?: google_protobuf_any_pb.Any): StandardResponse;
  hasData(): boolean;
  clearData(): StandardResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StandardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StandardResponse): StandardResponse.AsObject;
  static serializeBinaryToWriter(message: StandardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StandardResponse;
  static deserializeBinaryFromReader(message: StandardResponse, reader: jspb.BinaryReader): StandardResponse;
}

export namespace StandardResponse {
  export type AsObject = {
    code: number,
    message: string,
    error?: Status.AsObject,
    data?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class PaginationMetadata extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): PaginationMetadata;
  hasPageSize(): boolean;
  clearPageSize(): PaginationMetadata;

  getPrevPageToken(): string;
  setPrevPageToken(value: string): PaginationMetadata;
  hasPrevPageToken(): boolean;
  clearPrevPageToken(): PaginationMetadata;

  getNextPageToken(): string;
  setNextPageToken(value: string): PaginationMetadata;
  hasNextPageToken(): boolean;
  clearNextPageToken(): PaginationMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: PaginationMetadata): PaginationMetadata.AsObject;
  static serializeBinaryToWriter(message: PaginationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginationMetadata;
  static deserializeBinaryFromReader(message: PaginationMetadata, reader: jspb.BinaryReader): PaginationMetadata;
}

export namespace PaginationMetadata {
  export type AsObject = {
    pageSize?: number,
    prevPageToken?: string,
    nextPageToken?: string,
  }

  export enum PageSizeCase { 
    _PAGE_SIZE_NOT_SET = 0,
    PAGE_SIZE = 1,
  }

  export enum PrevPageTokenCase { 
    _PREV_PAGE_TOKEN_NOT_SET = 0,
    PREV_PAGE_TOKEN = 2,
  }

  export enum NextPageTokenCase { 
    _NEXT_PAGE_TOKEN_NOT_SET = 0,
    NEXT_PAGE_TOKEN = 3,
  }
}

export class PaginatedResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): PaginatedResponse;

  getMessage(): string;
  setMessage(value: string): PaginatedResponse;

  getError(): Status | undefined;
  setError(value?: Status): PaginatedResponse;
  hasError(): boolean;
  clearError(): PaginatedResponse;

  getPagination(): PaginationMetadata | undefined;
  setPagination(value?: PaginationMetadata): PaginatedResponse;
  hasPagination(): boolean;
  clearPagination(): PaginatedResponse;

  getData(): google_protobuf_any_pb.Any | undefined;
  setData(value?: google_protobuf_any_pb.Any): PaginatedResponse;
  hasData(): boolean;
  clearData(): PaginatedResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginatedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PaginatedResponse): PaginatedResponse.AsObject;
  static serializeBinaryToWriter(message: PaginatedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginatedResponse;
  static deserializeBinaryFromReader(message: PaginatedResponse, reader: jspb.BinaryReader): PaginatedResponse;
}

export namespace PaginatedResponse {
  export type AsObject = {
    code: number,
    message: string,
    error?: Status.AsObject,
    pagination?: PaginationMetadata.AsObject,
    data?: google_protobuf_any_pb.Any.AsObject,
  }
}

