import * as jspb from 'google-protobuf'



export class GlobalTime extends jspb.Message {
  getTimestamp(): number;
  setTimestamp(value: number): GlobalTime;

  getHash(): string;
  setHash(value: string): GlobalTime;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GlobalTime.AsObject;
  static toObject(includeInstance: boolean, msg: GlobalTime): GlobalTime.AsObject;
  static serializeBinaryToWriter(message: GlobalTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GlobalTime;
  static deserializeBinaryFromReader(message: GlobalTime, reader: jspb.BinaryReader): GlobalTime;
}

export namespace GlobalTime {
  export type AsObject = {
    timestamp: number,
    hash: string,
  }
}

