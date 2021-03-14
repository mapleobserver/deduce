import { DeduceInterface } from '../types/System';
import { Status } from '../types/Message';

export default (deduce: DeduceInterface) => (data: Status): void => {
  if (deduce.playerInfo.id === data.id) {
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
