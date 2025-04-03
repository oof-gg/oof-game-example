import * as jspb from 'google-protobuf'

import * as v1_std_regions_pb from '../../../v1/std/regions_pb'; // proto import: "v1/std/regions.proto"


export class JoinLeaveGame extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): JoinLeaveGame;

  getGameId(): string;
  setGameId(value: string): JoinLeaveGame;

  getAction(): JoinLeaveGame.Action;
  setAction(value: JoinLeaveGame.Action): JoinLeaveGame;

  getTeamId(): string;
  setTeamId(value: string): JoinLeaveGame;
  hasTeamId(): boolean;
  clearTeamId(): JoinLeaveGame;

  getSessionId(): string;
  setSessionId(value: string): JoinLeaveGame;
  hasSessionId(): boolean;
  clearSessionId(): JoinLeaveGame;

  getRegion(): v1_std_regions_pb.RegionEnum;
  setRegion(value: v1_std_regions_pb.RegionEnum): JoinLeaveGame;
  hasRegion(): boolean;
  clearRegion(): JoinLeaveGame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinLeaveGame.AsObject;
  static toObject(includeInstance: boolean, msg: JoinLeaveGame): JoinLeaveGame.AsObject;
  static serializeBinaryToWriter(message: JoinLeaveGame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinLeaveGame;
  static deserializeBinaryFromReader(message: JoinLeaveGame, reader: jspb.BinaryReader): JoinLeaveGame;
}

export namespace JoinLeaveGame {
  export type AsObject = {
    userId: string,
    gameId: string,
    action: JoinLeaveGame.Action,
    teamId?: string,
    sessionId?: string,
    region?: v1_std_regions_pb.RegionEnum,
  }

  export enum Action { 
    JOIN = 0,
    LEAVE = 1,
  }

  export enum TeamIdCase { 
    _TEAM_ID_NOT_SET = 0,
    TEAM_ID = 4,
  }

  export enum SessionIdCase { 
    _SESSION_ID_NOT_SET = 0,
    SESSION_ID = 5,
  }

  export enum RegionCase { 
    _REGION_NOT_SET = 0,
    REGION = 6,
  }
}

