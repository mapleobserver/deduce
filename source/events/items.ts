import { DeduceInterface } from '../types/System';
import { BaseRoomItem, MessageMap } from '../types/Message';

export default (deduce: DeduceInterface) => (data: MessageMap['items']): void => {
  const { player } = deduce;
  const newRoomList = data.items.map((item: BaseRoomItem) => {
    if (player.id === item.id && item.status) {
      item.status.forEach((statu) => {
        player.status.add(statu.sid);
      });
    }
    return { id: item.id, name: item.name };
  });
  player.roomItems = newRoomList;
};
