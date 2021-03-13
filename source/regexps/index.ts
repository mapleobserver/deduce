import { DeduceType } from '../types/Deduce';
import force from './force';
import dodge from './dodge';
import parry from './parry';
import weapon from './weapon';
import throwing from './throwing';

export default {
  内功: force,
  轻功: dodge,
  招架: parry,
  暗器: throwing,
  拳脚: weapon,
  剑法: weapon,
  刀法: weapon,
  棍法: weapon,
  鞭法: weapon,
  杖法: weapon,
} as DeduceType;
