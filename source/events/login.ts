import { DeduceInterface } from '../types/System';
import { Login } from '../types/Message';

export default (deduce: DeduceInterface) => (data: Login): void => {
  const { playerInfo } = deduce;
  deduce.socket?.send('score');
  playerInfo.id = data.id;
  deduce.logger.log(`登陆成功，角色id：${data.id}。`);
};
