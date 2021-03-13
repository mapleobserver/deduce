import WebSocket from 'ws';
import { EventEmitter } from 'events';
import { BasePackItem, BaseRoomItem } from './Message';
import { WebSocketConfig, UserConfig } from './Config';

export interface PlayerInfo {
  id?: string;
  name?: string;
}

export interface DeduceInfo {
  type?: '内功' | '轻功' | '招架' | '拳脚' | '剑法' | '刀法' | '棍法' | '鞭法' | '杖法' | '暗器';
  havePot: number;
  usedPot: number;
  remainPot: number;
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
  player: PlayerInfo;
  logger: LoggerInterface;
  config: UserConfig;
  statuList: Set<string>;
  deduceInfo: DeduceInfo;
  packItemList: Array<BasePackItem>;
  roomItemList: Array<BaseRoomItem>;
  socket?: SocketInterface;
}
