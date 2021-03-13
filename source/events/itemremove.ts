import { DeduceInterface } from '../types/System';
import { BaseRoomItem, MessageMap } from '../types/Message';

export default (deduce: DeduceInterface) => (data: MessageMap['itemremove']): void => {
  const itemIndex = deduce.player.roomItems.findIndex((item: BaseRoomItem) => item.id === data.id);
  if (itemIndex) {
    deduce.player.roomItems.splice(itemIndex, 1);
  }
};
