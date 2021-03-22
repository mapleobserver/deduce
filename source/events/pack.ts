import { DeduceInterface } from '../types/System';
import { BasePackItem, Pack } from '../types/Message';

export default (deduce: DeduceInterface) => (data: Pack): void => {
  const { packItemList } = deduce;
  if (data.items) {
    packItemList.length = 0;
    data.items.forEach((item: BasePackItem) =>
      packItemList.push({
        id: item.id,
        count: item.count,
        name: item.name,
        unit: item.unit,
        value: item.value,
      }),
    );
    if (deduce.accessories.fy) {
      const fy = data.eqs.find((eq) => eq.name.includes('飞翼剑'));
      if (fy) {
        packItemList.push({
          id: fy.id,
          name: fy.name,
          count: 1,
          unit: '把',
          value: 0,
        });
      }
    }
  }
  if (data.remove) {
    const packItem = packItemList.find((item: BasePackItem) => item.id === data.id);
    const packItemIndex = packItemList.findIndex((item: BasePackItem) => item.id === data.id);
    if (packItem) {
      if (data.remove >= packItem?.count) {
        packItemList.splice(packItemIndex, 1);
      } else {
        packItem.count -= 1;
      }
    }
  }
  if (data.count && data.id) {
    const packItem = packItemList.find((item: BasePackItem) => item.id === data.id);
    if (packItem) {
      packItem.count += 1;
    } else {
      packItemList.push({
        id: data.id,
        count: data.count,
        name: data.name,
        unit: data.unit,
        value: data.value,
      });
    }
  }
};
