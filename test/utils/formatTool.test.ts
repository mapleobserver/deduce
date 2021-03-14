import { tipFormat, itemNameFormat, entryFormat } from '../../source/utils/formatTool';

describe('格式化测试', () => {
  test('房间生物以及物品名格式化', () => {
    expect(
      itemNameFormat('<wht>武士 测试工具</wht><red>&lt;断线中&gt;</red><hig>&lt;挖矿中&gt;</hig>'),
    ).toBe('武士 测试工具<断线中><挖矿中>');
    expect(itemNameFormat('<wht>武士 站牌</wht><hig>&lt;挖矿中&gt;</hig>')).toBe(
      '武士 站牌<挖矿中>',
    );
  });

  test('提示信息格式化', () => {
    expect(
      tipFormat(
        '<div class="item-commands"><cyn>你的<ord>无名诀</ord>招架属性获得提升(6300级)：</cyn><br/><cyn>攻击：+10207(1)--></cyn><hig>10715(5)</hig><br/><cyn>臂力：+3497(1)--></cyn><hig>3595(4)</hig><br/><span cmd="zc typelv parry">继续提升招架品阶</span></div>',
      ),
    ).toBe(`你的无名诀招架属性获得提升(6300级)：
攻击：+10207(1)-->10715(5)
臂力：+3497(1)-->3595(4)
继续提升招架品阶`);

    expect(
      tipFormat(
        '<div class="item-commands"><hic>你本次提升获得4个新的招架属性：</hic><br/><cyn>攻击：+10207</cyn><br/><span cmd="zc prop parry add">附加到招架</span><span cmd="zc prop parry ban">放弃</span></div>',
      ),
    ).toBe(`你本次提升获得4个新的招架属性：
攻击：+10207
附加到招架放弃`);
  });

  test('词条信息格式化', () => {
    expect(entryFormat('暴击伤害：+8%')).toBe('暴击伤害%');
    expect(entryFormat('臂力：+114514')).toBe('臂力');
    expect(entryFormat('忙乱时间：+0.501秒')).toBe('忙乱时间');
  });
});
