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
  entrys: {
    entry: string;
    level: number;
  }[];
  overEntry?: string;
}

export interface Accessories {
  food?: boolean;
  fy?: boolean;
  xlu?: boolean;
}

export interface Config {
  userConfig: UserConfig;
  deduceConfig: DeduceConfig;
  accessories?: Accessories;
}
