import { DeduceThrowing } from '../types/Deduce';
import base from './base';

export default {
  ...base,
  暴击: /^暴击(?!抵抗|伤害)%$/,
  暴击抵抗: /^暴击抵抗%$/,
  攻击百分比: /^攻击%$/,
  忙乱时间百分比: /^忙乱时间%$/,
  忽视忙乱: /^忽视忙乱%$/,
  伤害减免: /^伤害减免%$/,
  最终伤害: /^最终伤害%$/,
  忽视对方防御: /^忽视对方防御%$/,
} as DeduceThrowing;
