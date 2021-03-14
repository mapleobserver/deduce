import { DeduceInterface } from '../types/System';
import { BaseRoomItem, ItemRemove } from '../types/Message';

export default (deduce: DeduceInterface) => (data: ItemRemove): void => {
  const itemIndex = deduce.roomItemList.findIndex((item: BaseRoomItem) => item.id === data.id);
  if (itemIndex) {
    deduce.roomItemList.splice(itemIndex, 1);
  }
};
