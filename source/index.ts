import Socket from './librarys/Socket';
import Logger from './librarys/Logger';
import {
  SocketInterface,
  LoggerInterface,
  DeduceInterface,
  DeduceInfo,
  PlayerInfo,
  Flags,
  EntryInfo,
} from './types/System';
import { UserConfig } from './types/Config';
import { getServer, getToken } from './utils/api';
import eventList from './events';
import fileParse from './utils/fileParse';

export default class Deduce implements DeduceInterface {
  public flags: Flags = {
    init: false,
  };

  public logger: LoggerInterface = new Logger();

  public userConfig: UserConfig;

  public entryInfo: EntryInfo = {};

  public deduceInfo: DeduceInfo;

  public player: PlayerInfo = {
    havePot: 0,
    usedPot: 0,
    remainPot: 0,
  };

  public packItemList = [];

  public roomItemList = [];

  public statuList: Set<string> = new Set();

  public socket?: SocketInterface;

  constructor(configFile: string) {
    const config = fileParse(configFile);
    this.userConfig = config.userConfig;
    this.deduceInfo = config.deduceConfig;
    this.login();
  }

  private async login(): Promise<void> {
    const wsUrl: string | null = await getServer(this.userConfig.server);
    const token: string | null = await getToken(this.userConfig.account, this.userConfig.password);
    if (!wsUrl || !token) {
      this.logger.error(`获取${!wsUrl ? '服务器信息' : '用户登陆凭证'}失败。`);
      process.exit();
    }
    this.logger.log(`获取服务器信息成功：${wsUrl}。`);
    this.logger.log(`获取用户登陆凭证成功：${token}。`);
    this.socket = new Socket({ wsUrl, token });
    this.loadEvents();
  }

  public reLogin(): void {
    this.login();
  }

  private loadEvents(): void {
    Object.keys(eventList).forEach((event) => {
      const listener = eventList[`${event}`](this);
      this.socket?.on(event, (data) => {
        listener(data);
      });
    });
  }
}
