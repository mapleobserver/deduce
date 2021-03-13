import { DeduceInterface } from '../types/System';
import { BasePackItem, MessageMap } from '../types/Message';

export default (deduce: DeduceInterface) => (data: MessageMap['pack']): void => {
  const { packItemList: packList } = deduce;
  if (data.items) {
    packList.length = 0;
    data.items.forEach((item: BasePackItem) =>
      packList.push({
        id: item.id,
        count: item.count,
        name: item.name,
        unit: item.unit,
        value: item.value,
      }),
    );
  }
  if (data.remove) {
    const packItem = packList.find((item: BasePackItem) => item.id === data.id);
    const packItemIndex = packList.findIndex((item: BasePackItem) => item.id === data.id);
    if (packItem) {
      if (data.remove >= packItem?.count) {
        packList.splice(packItemIndex, 1);
      } else {
        packItem.count -= 1;
      }
    }
  }
  if (data.count && data.id) {
    const packItem = packList.find((item: BasePackItem) => item.id === data.id);
    if (packItem) {
      packItem.count += 1;
    } else {
      packList.push({
        id: data.id,
        count: data.count,
        name: data.name,
        unit: data.unit,
        value: data.value,
      });
    }
  }
};
