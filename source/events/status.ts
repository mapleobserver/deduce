import { DeduceInterface } from '../types/System';
import { MessageMap } from '../types/Message';

export default (deduce: DeduceInterface) => (data: MessageMap['status']): void => {
  if (deduce.player.id === data.id) {
    switch (data.action) {
      case 'add':
        deduce.statuList.add(data.sid);
        deduce.logger.log(`状态新增：${data.sid}。`);
        break;
      case 'remove':
        deduce.statuList.delete(data.sid);
        deduce.logger.log(`状态移除：${data.sid}。`);
        break;
      default:
    }
  }
};
