import { DeduceInterface } from '../types/System';
import { MessageMap } from '../types/Message';

export default (deduce: DeduceInterface) => (data: MessageMap['score']): void => {
  const { player } = deduce;
  player.pot = data.pot;
  deduce.logger.log(`当前剩余潜能：${data.pot}。`);
  deduce.socket?.send('pack');
};
