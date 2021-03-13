import { DeduceInterface } from '../types/System';
import { MessageMap } from '../types/Message';

export default (deduce: DeduceInterface) => (data: MessageMap['itemadd']): void => {
  if (deduce.player.id !== data.id) {
    deduce.player.roomItems.push({
      id: data.id,
      name: data.name,
    });
  }
};
