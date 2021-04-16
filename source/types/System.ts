import WebSocket from 'ws';
import { EventEmitter } from 'events';
import { DeduceType } from './Deduce';
import { BasePackItem, BaseRoomItem } from './Message';
import { WebSocketConfig, UserConfig, Accessories, Config } from './Config';

export interface Flags {
  init: boolean;
  begin: boolean;
  firstLevelUp: boolean;
}

export interface PlayerInfo {
  id?: string;
  havePot: number;
  usedPot: number;
  bookName?: string;
}

export interface EntryInfo {
  [key: string]: number;
}

export interface DeduceInfo {
  type: keyof DeduceType;
  entrys: {
    entry: string;
    level: number;
  }[];
  overEntry?: string;
}

export interface SocketInterface extends EventEmitter {
  options: WebSocketConfig;
  socket?: WebSocket;
  send(message: string): void;
}

export interface LoggerInterface {
  log(message: string): void;
  info(message: string): void;
  notice(message: string): void;
  warn(message: string): void;
  debug(message: string): void;
  error(message: string): void;
}

export interface DeduceInterface {
  flags: Flags;
  config: Config;
  logger: LoggerInterface;
  statuList: Set<string>;
  entryInfo: EntryInfo;
  userConfig: UserConfig;
  playerInfo: PlayerInfo;
  deduceConfig: DeduceInfo;
  packItemList: Array<BasePackItem>;
  roomItemList: Array<BaseRoomItem>;
  accessories: Accessories;
  socket?: SocketInterface;
  reLogin(): void;
}
