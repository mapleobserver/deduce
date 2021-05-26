import { DeduceInterface } from '../types/System';

export default (deduce: DeduceInterface) => (): void => {
  const { entryInfo, config } = deduce;
  if (!config.autoReLogin) {
    return;
  }
  Object.keys(entryInfo).forEach((entryName: string) => {
    delete entryInfo[entryName];
  });
  deduce.logger.warn('已断开连接，将在30秒后重新连接');
  setTimeout(() => {
    deduce.reLogin();
  }, 3e4);
};
