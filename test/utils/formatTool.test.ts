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
        `<div class="item-commands"><hic>可装备为轻功</hic><span cmd="zc typedel dodge">移除</span><span cmd="zc typelv dodge">提升品阶</span><span cmd="zc pfmadd dodge">融合绝招</span><br/><cyn>躲闪：+16811</cyn><br/><cyn>臂力：+5155</cyn><br/><cyn>攻击：+16684</cyn><br/><cyn>暴击伤害：+27%</cyn><br/><cyn>身法：+4895</cyn><br/><cyn>你的后天身法在战斗中提升躲闪的效果提高136%</cyn><br/>绝招：<ord>神游太虚</ord>.凌波<span cmd="zc pfmdel dodge lingboweibu4 lingbo">移除</span><br/><br/><hic>可装备为内功</hic><span cmd="zc typedel force">移除</span><span cmd="zc typelv force">提升品阶</span><span cmd="zc pfmadd force">融合绝招</span><br/><cyn>内力上限：+8391600</cyn><br/><cyn>唯一：将你内力的163%转化为气血</cyn><br/><cyn>攻击：+39%</cyn><br/><cyn>最终伤害：+38%</cyn><br/><cyn>绝招冷却时间：-27%</cyn><br/><cyn>当你命中敌人后(攻击频率)会额外攻击敌人9次(剑心)</cyn><br/><cyn>臂力：+10030</cyn><br/>绝招：<ord>慈航剑典</ord>.剑心通明<span cmd="zc pfmdel force cihangjiandian xin">移除</span><br/>绝招：<ord>阴阳九转</ord>.定乾坤<span cmd="zc pfmdel force yinyangjiuzhuan ding">移除</span><br/>绝招：<ord>长生诀</ord>.天地决<span cmd="zc pfmdel force changshengjue zhen">移除</span><br/><br/><hic>可装备为鞭法</hic><span cmd="zc typedel whip">移除</span><span cmd="zc typelv whip">提升品阶</span><span cmd="zc pfmadd whip">融合绝招</span><br/><cyn>攻击：+23796</cyn><br/><cyn>暴击：+38%</cyn><br/><cyn>臂力：+7365</cyn><br/><cyn>最终伤害：+38%</cyn><br/><cyn>忽视对方防御：+35%</cyn><br/><cyn>攻击：+30%</cyn><br/><br/><hic>可装备为暗器</hic><span cmd="zc typedel throwing">移除</span><span cmd="zc typelv throwing">提升品阶</span><span cmd="zc pfmadd throwing">融合绝招</span><br/><cyn>命中：+18335</cyn><br/><cyn>臂力：+5415</cyn><br/><cyn>忽视对方防御：+28%</cyn><br/><cyn>最终伤害：+28%</cyn><br/><cyn>暴击：+28%</cyn><br/><cyn>攻击：+28%</cyn><br/>绝招：<hio>漫天花雨</hio>.落花<span cmd="zc pfmdel throwing mantianhuayu2 luo">移除</span><br/>绝招：<ord>天谕</ord>.审判<span cmd="zc pfmdel throwing mantianhuayu4 shen">移除</span><br/>绝招：<ord>天谕</ord>.天罚<span cmd="zc pfmdel throwing mantianhuayu4 fa">移除</span><br/><br/><hic>可装备为招架</hic><span cmd="zc typedel parry">移除</span><span cmd="zc typelv parry">提升品阶</span><span cmd="zc pfmadd parry">融合绝招</span><br/><cyn>招架：+19605</cyn><br/><cyn>攻击：+19097</cyn><br/><cyn>臂力：+5675</cyn><br/><cyn>暴击伤害：+30%</cyn><br/><cyn>当你招架后增加3.1%伤害减免，招架成功叠加两层，最多叠加22层(乾坤)</cyn><br/>绝招：<hiy>衡山五神剑</hiy>.五神赋<span cmd="zc pfmdel parry hengshanwushenjian wu">移除</span><br/><br/><span cmd="zc typeadd">增加其它可装备类型</span></div>`,
      ),
    ).toBe(`可装备为轻功移除提升品阶融合绝招
躲闪：+16811
臂力：+5155
攻击：+16684
暴击伤害：+27%
身法：+4895
你的后天身法在战斗中提升躲闪的效果提高136%
绝招：神游太虚.凌波移除

可装备为内功移除提升品阶融合绝招
内力上限：+8391600
唯一：将你内力的163%转化为气血
攻击：+39%
最终伤害：+38%
绝招冷却时间：-27%
当你命中敌人后(攻击频率)会额外攻击敌人9次(剑心)
臂力：+10030
绝招：慈航剑典.剑心通明移除
绝招：阴阳九转.定乾坤移除
绝招：长生诀.天地决移除

可装备为鞭法移除提升品阶融合绝招
攻击：+23796
暴击：+38%
臂力：+7365
最终伤害：+38%
忽视对方防御：+35%
攻击：+30%

可装备为暗器移除提升品阶融合绝招
命中：+18335
臂力：+5415
忽视对方防御：+28%
最终伤害：+28%
暴击：+28%
攻击：+28%
绝招：漫天花雨.落花移除
绝招：天谕.审判移除
绝招：天谕.天罚移除

可装备为招架移除提升品阶融合绝招
招架：+19605
攻击：+19097
臂力：+5675
暴击伤害：+30%
当你招架后增加3.1%伤害减免，招架成功叠加两层，最多叠加22层(乾坤)
绝招：衡山五神剑.五神赋移除

增加其它可装备类型`);
  });
  test('词条信息格式化', () => {
    expect(entryFormat('')).toBe('');
  });
});
