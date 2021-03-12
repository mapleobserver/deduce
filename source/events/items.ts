import { DeduceInterface } from '../types/System';
import { MessageMap } from '../types/Message';

export default (deduce: DeduceInterface) => (data: MessageMap['items']): void => {
  data.items.forEach((item) => {
    deduce.player.items.set(item.name, item.id);
    if (deduce.player.id === item.id) {
      item.status?.forEach((statu) => {
        deduce.player.status.add(statu.sid);
      });
    }
  });
};
