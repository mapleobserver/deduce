import { DeduceType } from '../types/Deduce';
import regexps from '../regexps/index';

const typeName: {
  [key: string]: string;
} = {
  内功: 'force',
  轻功: 'dodge',
  招架: 'parry',
  拳脚: 'unarmed',
  剑法: 'sword',
  刀法: 'blade',
  棍法: 'club',
  杖法: 'staff',
  鞭法: 'whip',
  暗器: 'throwing',
};

export function findNameByAttr(type: keyof DeduceType, attr: string): string | undefined {
  return Object.keys(regexps[type]).find((name: string) => regexps[type][name].test(attr));
}

export function getTypeCodeByName(code: string): string {
  return typeName[code];
}
