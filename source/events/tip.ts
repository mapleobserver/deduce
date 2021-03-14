import { DeduceInterface } from '../types/System';
import { Tip } from '../types/Message';
import { entryFormat, tipFormat } from '../utils/formatTool';
import { getTypeCodeByName, findNameByAttr } from '../utils/entryTool';

export default (deduce: DeduceInterface) => (data: Tip): void => {
  const msg: string = tipFormat(data.message);
  const { deduceConfig, logger, entryInfo, playerInfo } = deduce;
  if (!deduce.flags.begin) {
    return;
  }

  if (msg.includes('有了更深入的理解')) {
    deduce.socket?.send('score');
  }

  if (msg.includes('本次消耗会累计到下次使用')) {
    deduce.socket?.send(`zc typelv ${getTypeCodeByName(deduceConfig.type)}`);
  }

  if (/你的.+?没有这种功能/.test(msg)) {
    deduce.socket?.send(`zc typeadd ${getTypeCodeByName(deduceConfig.type)} ok`);
  }

  if (msg.includes('属性获得提升')) {
    msg
      .split(/\n/)
      .filter((str: string) => str.includes('-->'))
      .forEach((attr: string) => {
        const attrName = findNameByAttr(
          deduce.deduceConfig.type,
          entryFormat(attr.split('-->')[0]),
        );
        const attrLevel = attr.match(/\((\d+)\)-->.+?\((\d+)\)(?<=\))$/);
        if (!attrName || !attrLevel || attrLevel.length < 3) {
          deduce.logger.error(`获取属性名失败，属性为：${attr.split('-->')[0]}。`);
        } else {
          const lastLevel = Number(attrLevel[1]);
          const nowLevel = Number(attrLevel[2]);
          entryInfo[attrName] = nowLevel;
          playerInfo.usedPot -=
            (((nowLevel + lastLevel - 1) * (nowLevel - lastLevel)) / 2) * 100000;
          playerInfo.usedPot = playerInfo.usedPot < 0 ? 0 : playerInfo.usedPot;
          logger.log(`${attrName}属性由${lastLevel}级升级到${nowLevel}级。`);
        }
      });
    deduce.socket?.send(`zc typelv ${getTypeCodeByName(deduceConfig.type)}`);
  }

  if (msg.includes('你还有未使用的')) {
    const attrList = msg.split(/\n/);
    attrList.pop();
    attrList.shift();
    attrList.forEach((attr) => {
      const attrName = findNameByAttr(deduce.deduceConfig.type, entryFormat(attr));
      if (!attrName) {
        deduce.logger.error(`获取属性名失败，属性为：${attr}。`);
      } else {
        const isWant: boolean = deduceConfig.entrys.includes(attrName);
        if (isWant) {
          deduce.socket?.send(`zc prop ${getTypeCodeByName(deduceConfig.type)} add`);
          logger.log(`获得新属性，属性为所需，添加新属性：${attrName}。`);
          entryInfo[attrName] = 1;
        } else {
          deduce.socket?.send(`zc prop ${getTypeCodeByName(deduceConfig.type)} ban`);
          logger.log(`获得新属性，属性不需要，放弃新属性：${attrName}。`);
        }
      }
    });
    deduce.socket?.send(`zc typelv ${getTypeCodeByName(deduceConfig.type)}`);
  }
};
