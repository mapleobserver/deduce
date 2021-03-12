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
