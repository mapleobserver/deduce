import { DeduceInterface } from '../types/System';

export default (deduce: DeduceInterface) => (): void => {
  deduce.logger.log('已断开连接，将在30秒后重新连接。');
  setTimeout(() => {
    deduce.reLogin();
  }, 3e4);
};
