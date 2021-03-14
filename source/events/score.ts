import { DeduceInterface } from '../types/System';
import { Score } from '../types/Message';
import { getTypeCodeByName } from '../utils/entryTool';
import { checkFyStatu, checkXluStatu, checkFoodStatu } from '../utils/checkStatus';

export default (deduce: DeduceInterface) => (data: Score): void => {
  const { accessories, entryInfo, playerInfo, flags } = deduce;
  if (!flags.init) {
    flags.init = true;
    playerInfo.havePot = data.pot;
    deduce.logger.log(`当前剩余潜能：${playerInfo.havePot}。`);
    deduce.socket?.send('stopstate,pack');
    setTimeout(() => {
      flags.begin = true;
      if (accessories.fy) checkFyStatu(deduce);
      if (accessories.xlu) checkXluStatu(deduce);
      if (accessories.food) checkFoodStatu(deduce);
      deduce.socket?.send(`zc typelv ${getTypeCodeByName(deduce.deduceConfig.type)}`);
    }, 5e3);
  } else {
    const entryInfoKeys = Object.keys(entryInfo);
    playerInfo.usedPot += playerInfo.havePot - data.pot;
    playerInfo.havePot = data.pot;
    if (
      playerInfo.usedPot >= 1e7 ||
      entryInfoKeys.length === 0 ||
      entryInfoKeys.some((key) => entryInfo[key] * 100000 <= playerInfo.usedPot)
    ) {
      deduce.socket?.send('stopstate');
    }
  }
};
