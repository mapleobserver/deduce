interface DeduceRegExp {
  [key: string]: RegExp;
}

export interface DeduceBase extends DeduceRegExp {
  攻击: RegExp;
  防御: RegExp;
  命中: RegExp;
  招架: RegExp;
  躲闪: RegExp;
  臂力: RegExp;
  根骨: RegExp;
  身法: RegExp;
  悟性: RegExp;
  暴击伤害: RegExp;
  内力消耗: RegExp;
  防御百分比: RegExp;
  命中百分比: RegExp;
  招架百分比: RegExp;
  躲闪百分比: RegExp;
  气血百分比: RegExp;
}

export interface DeduceForce extends DeduceBase {
  暴击: RegExp;
  暴击抵抗: RegExp;
  练习效率: RegExp;
  学习效率: RegExp;
  打坐效率: RegExp;
  忙乱时间: RegExp;
  攻击百分比: RegExp;
  忙乱时间百分比: RegExp;
  忽视忙乱: RegExp;
  绝招释放时间: RegExp;
  绝招释放时间百分比: RegExp;
  绝招冷却时间: RegExp;
  绝招冷却时间百分比: RegExp;
  攻击速度: RegExp;
  攻击速度百分比: RegExp;
  伤害减免: RegExp;
  最终伤害: RegExp;
  忽视对方防御: RegExp;
  吸血: RegExp;
  不灭: RegExp;
  战神: RegExp;
  反震: RegExp;
  守护: RegExp;
  剑心: RegExp;
}

export interface DeduceDodge extends DeduceBase {
  练习效率: RegExp;
  学习效率: RegExp;
  打坐效率: RegExp;
  反击: RegExp;
  灵动: RegExp;
  专注: RegExp;
}

export interface DeduceParry extends DeduceDodge {
  反击: RegExp;
  乾坤: RegExp;
  纵横: RegExp;
}

export interface DeduceThrowing extends DeduceBase {
  暴击: RegExp;
  暴击抵抗: RegExp;
  攻击百分比: RegExp;
  忙乱时间百分比: RegExp;
  忽视忙乱: RegExp;
  伤害减免: RegExp;
  最终伤害: RegExp;
  忽视对方防御: RegExp;
}

export interface DeduceWeapon extends DeduceThrowing {
  弱化: RegExp;
  溅射: RegExp;
  吸血: RegExp;
  穿透: RegExp;
  无情: RegExp;
  嗜血: RegExp;
  内伤: RegExp;
}

export interface DeduceType {
  内功: DeduceForce;
  轻功: DeduceDodge;
  招架: DeduceParry;
  拳脚: DeduceWeapon;
  剑法: DeduceWeapon;
  刀法: DeduceWeapon;
  棍法: DeduceWeapon;
  杖法: DeduceWeapon;
  鞭法: DeduceWeapon;
  暗器: DeduceThrowing;
}
