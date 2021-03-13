import { stringify } from 'qs';
import axios from 'axios';
import { Servers } from '../types/Api';

export async function getServer(num: number): Promise<string | null> {
  const response = await axios.get('http://game.wsmud.com/Game/GetServer');
  if (response.status !== 200 || num < 0 || num >= response.data.length) {
    return null;
  }
  const servers: Servers = response.data;
  const serverInfo = servers[num - 1];
  return `ws://${serverInfo.IP}:${serverInfo.Port}`;
}

export async function getToken(account: string, password: string): Promise<string | null> {
  const response = await axios.post(
    'http://game.wsmud.com/UserApi/Login',
    stringify({ code: account, pwd: password }),
  );
  if (response.status !== 200 || !response.headers['set-cookie']) {
    return null;
  }
  const token: string[] = response.headers['set-cookie'].map((cookie: string) => {
    const cookieMatch: string[] | null = cookie.match(/^[up]=(.+?);/);
    return cookieMatch ? cookieMatch[1] : '';
  });
  return token.join(' ');
}
