import { DeduceInterface } from '../types/System';
import { Score } from '../types/Message';

export default (deduce: DeduceInterface) => (data: Score): void => {
  const { entryInfo, playerInfo: player, flags } = deduce;
  if (!flags.init) {
    flags.init = true;
    player.havePot = data.pot;
    deduce.logger.log(`当前剩余潜能：${player.havePot}。`);
    deduce.socket?.send('pack');
  } else {
    player.usedPot = player.havePot - data.pot;
    Object.keys(entryInfo).forEach((entry: string) => {
      if (entryInfo[entry].level <= player.usedPot + player.remainPot) {
        deduce.socket?.send('stopstate');
      }
    });
  }
};
