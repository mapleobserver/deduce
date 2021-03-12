import { stringify } from 'qs';
import axios from 'axios';
import { Servers } from '../types/Api';

class Api {
  static async getServer(num: number): Promise<string | null> {
    const response = await axios.get('http://game.wsmud.com/Game/GetServer');
    if (response.status !== 200) {
      return null;
    }
    const server: Servers = response.data;
    const serverInfo = server[num - 1];
    return `ws://${serverInfo.IP}:${serverInfo.Port}`;
  }

  static async getToken(account: string, password: string): Promise<string | null> {
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
}

export default Api;
