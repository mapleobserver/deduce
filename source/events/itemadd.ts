import { DeduceInterface } from '../types/System';
import { MessageMap } from '../types/Message';
import { itemNameFormat } from '../utils/formatTool';

export default (deduce: DeduceInterface) => (data: MessageMap['itemadd']): void => {
  if (deduce.player.id !== data.id) {
    deduce.roomItemList.push({
      id: data.id,
      name: itemNameFormat(data.name),
    });
  }
};
