import { DeduceInterface } from '../types/System';
import { MessageMap } from '../types/Message';

export default (deduce: DeduceInterface) => (data: MessageMap['pack']): void => {
  data.items.forEach((item) => {
    deduce.player.pack.set(item.name, {
      id: item.id,
      count: item.count,
    });
  });
};
