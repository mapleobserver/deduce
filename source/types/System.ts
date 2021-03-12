import WebSocket from 'ws';
import { EventEmitter } from 'events';
import { WebSocketConfig, UserConfig } from './Config';
import Player from './Player';

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
  logger: LoggerInterface;
  config: UserConfig;
  player: Player;
  socket?: SocketInterface;
}
