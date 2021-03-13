import { DeduceDodge } from '../types/Deduce';
import base from './base';

export default {
  ...base,
  练习效率: /^练习效率%$/,
  学习效率: /^练习效率%$/,
  打坐效率: /^练习效率%$/,
  反击: /^躲闪成功后顺势反击敌人，对敌人造成%伤害$/,
  灵动: /^躲闪成功后增加你%的攻速和命中，最多叠加层$/,
  专注: /^你的后天身法在战斗中提升躲闪的效果提高%$/,
} as DeduceDodge;
