import { DeduceInterface } from '../types/System';
import { BaseRoomItem, Items } from '../types/Message';
import { itemNameFormat } from '../utils/formatTool';

export default (deduce: DeduceInterface) => (data: Items): void => {
  const { roomItemList: roomItems } = deduce;
  roomItems.length = 0;
  data.items.forEach((item: BaseRoomItem) => {
    if (deduce.player.id === item.id && item.status) {
      item.status.forEach((statu) => {
        deduce.statuList.add(statu.sid);
      });
    }
    roomItems.push({
      id: item.id,
      name: itemNameFormat(item.name),
    });
  });
};
