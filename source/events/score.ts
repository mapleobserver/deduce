import { DeduceInterface } from '../types/System';
import { MessageMap } from '../types/Message';

export default (deduce: DeduceInterface) => (data: MessageMap['score']): void => {
  const { deduceInfo } = deduce;
  deduceInfo.havePot = data.pot;
  deduce.logger.log(`当前剩余潜能：${deduceInfo.havePot}。`);
  deduce.socket?.send('pack');
};
