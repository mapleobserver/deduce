import { DeduceInterface } from '../types/System';
import { Status } from '../types/Message';
import { checkFyStatu, checkXluStatu, checkFoodStatu } from '../utils/checkStatus';

export default (deduce: DeduceInterface) => (data: Status): void => {
  const { accessories } = deduce;
  if (deduce.playerInfo.id === data.id) {
    switch (data.action) {
      case 'add':
        deduce.statuList.add(data.sid);
        deduce.logger.log(`状态新增：${data.sid}。`);
        break;
      case 'remove':
        deduce.statuList.delete(data.sid);
        if (accessories.fy && data.sid === 'fy') checkFyStatu(deduce);
        if (accessories.xlu && data.sid === 'xlu') checkXluStatu(deduce);
        if (accessories.food && data.sid === 'food') checkFoodStatu(deduce);
        deduce.logger.log(`状态移除：${data.sid}。`);
        break;
      default:
    }
  }
};
