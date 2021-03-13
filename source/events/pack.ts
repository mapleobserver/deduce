import { DeduceInterface } from '../types/System';
import { BasePackItem, MessageMap } from '../types/Message';

export default (deduce: DeduceInterface) => (data: MessageMap['pack']): void => {
  const { player } = deduce;
  if (data.items) {
    const newPackList = data.items.map((item: BasePackItem) => ({
      id: item.id,
      count: item.count,
      name: item.name,
      unit: item.unit,
      value: item.value,
    }));
    player.packList = newPackList;
  }
  if (data.remove) {
    const packItem = player.packList.find((item: BasePackItem) => item.id === data.id);
    const packItemIndex = player.packList.findIndex((item: BasePackItem) => item.id === data.id);
    if (packItem) {
      if (data.remove >= packItem?.count) {
        player.packList.splice(packItemIndex, 1);
      } else {
        packItem.count -= 1;
      }
    }
  }
  if (data.count && data.id) {
    const packItem = player.packList.find((item: BasePackItem) => item.id === data.id);
    if (packItem) {
      packItem.count += 1;
    } else {
      player.packList.push({
        id: data.id,
        count: data.count,
        name: data.name,
        unit: data.unit,
        value: data.value,
      });
    }
  }
};
