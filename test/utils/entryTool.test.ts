import { findNameByAttr } from '../../source/utils/entryTool';

test('剑心', () => {
  expect(findNameByAttr('内功', '当你命中敌人后(攻击频率)会额外攻击敌人次(剑心)')).toBe('剑心');
});
