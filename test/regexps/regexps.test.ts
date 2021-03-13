import { entryFormat } from '../../source/utils/formatTool';
import force from '../../source/regexps/force';

describe('正则测试', () => {
  test('攻击', () => {
    expect(force.攻击.test(entryFormat('攻击：+114514'))).not.toBeNull();
  });

  test('攻击百分比', () => {
    expect(force.攻击百分比.test(entryFormat('攻击：+114514%'))).not.toBeNull();
  });

  test('绝招冷却时间', () => {
    expect(force.绝招冷却时间.test(entryFormat('绝招冷却时间：-114514秒'))).not.toBeFalsy();
  });

  test('暴击', () => {
    expect(force.暴击.test(entryFormat('暴击抵抗：+114514%'))).toBeFalsy();
  });

  test('反震', () => {
    expect(force.反震.test(entryFormat('被命中后对敌人造成0.5%最大内力的反震伤害'))).not.toBeNull();
  });
});
