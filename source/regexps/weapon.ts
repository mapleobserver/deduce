import { DeduceWeapon } from '../types/Deduce';
import throwing from './throwing';

export default {
  ...throwing,
  弱化: /^当你命中敌人后使对方降低%战斗属性，可叠加层$/,
  溅射: /^当你命中敌人后会对附件一名敌人产生%伤害$/,
  吸血: /^对敌人造成伤害后吸收%转化为自身气血$/,
  穿透: /^当你命中敌人后使对方收到的伤害增加%，可叠加层$/,
  无情: /^敌人的气血每降低%增加你%的伤害$/,
  嗜血: /^你的气血每降低%增加%的伤害$/,
  内伤: /^每次攻击附加你最大内力%的伤害(入魔)$/,
} as DeduceWeapon;
