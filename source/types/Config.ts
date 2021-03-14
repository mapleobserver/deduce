import { DeduceType } from './Deduce';

export interface WebSocketConfig {
  token: string;
  wsUrl: string;
}

export interface UserConfig {
  name: string;
  server: 1 | 2 | 3 | 4;
  account: string;
  password: string;
}

export interface DeduceConfig {
  type: keyof DeduceType;
  entry: string[];
}

export interface Config {
  userConfig: UserConfig;
  deduceConfig: DeduceConfig;
}
