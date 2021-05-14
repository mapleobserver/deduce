import checkConfig from '../../source/utils/checkConfig';
import { DeduceType } from '../../source/types/Deduce';
import { Config, UserConfig } from '../../source/types/Config';

describe('检查配置测试', () => {
  test('通过检查', () => {
    expect(
      checkConfig({
        userConfig: {
          server: 1,
          name: '测试工具',
          account: 'testaccount',
          password: 'testpassword',
        },
        deduceConfig: {
          type: '剑法',
          entrys: [
            { entry: '臂力', level: 10 },
            { entry: '攻击百分比', level: 50 },
          ],
        },
      }),
    ).toBe('');
  });

  test('缺少userConfig', () => {
    expect(
      checkConfig(<Config>{
        deduceConfig: {
          type: '剑法',
          entrys: [
            { entry: '臂力', level: 10 },
            { entry: '攻击百分比', level: 50 },
          ],
        },
      }),
    ).toBe('缺少参数：userConfig');
  });

  test('缺少deduceConfig', () => {
    expect(
      checkConfig(<Config>{
        userConfig: {
          server: 1,
          name: '测试工具',
          account: 'testaccount',
          password: 'testpassword',
        },
      }),
    ).toBe('缺少参数：deduceConfig');
  });

  test('缺少userConfig.server', () => {
    expect(
      checkConfig({
        userConfig: <UserConfig>{
          name: '测试工具',
          account: 'testaccount',
          password: 'testpassword',
        },
        deduceConfig: {
          type: '剑法',
          entrys: [
            { entry: '臂力', level: 10 },
            { entry: '攻击百分比', level: 50 },
          ],
        },
      }),
    ).toBe('参数错误：userConfig.server，该值为玩家服务器，可选值为：1 2 3 4 5');
  });

  test('缺少userConfig.name', () => {
    expect(
      checkConfig({
        userConfig: <UserConfig>{
          server: 1,
          account: 'testaccount',
          password: 'testpassword',
        },
        deduceConfig: {
          type: '剑法',
          entrys: [
            { entry: '臂力', level: 10 },
            { entry: '攻击百分比', level: 50 },
          ],
        },
      }),
    ).toBe('参数错误：userConfig.name，该值为玩家角色姓名');
  });

  test('缺少userConfig.account', () => {
    expect(
      checkConfig({
        userConfig: <UserConfig>{
          server: 1,
          name: '测试工具',
          password: 'testpassword',
        },
        deduceConfig: {
          type: '剑法',
          entrys: [
            { entry: '臂力', level: 10 },
            { entry: '攻击百分比', level: 50 },
          ],
        },
      }),
    ).toBe('参数错误：userConfig.account，该值为玩家账号');
  });

  test('缺少userConfig.password', () => {
    expect(
      checkConfig({
        userConfig: <UserConfig>{
          server: 1,
          name: '测试工具',
          account: 'testaccount',
        },
        deduceConfig: {
          type: '剑法',
          entrys: [
            { entry: '臂力', level: 10 },
            { entry: '攻击百分比', level: 50 },
          ],
        },
      }),
    ).toBe('参数错误：userConfig.password，该值为玩家账号密码');
  });

  test('推演类型错误', () => {
    expect(
      checkConfig({
        userConfig: {
          server: 1,
          name: '测试工具',
          account: 'testaccount',
          password: 'testpassword',
        },
        deduceConfig: {
          type: <keyof DeduceType>'剑',
          entrys: [
            { entry: '臂力', level: 10 },
            { entry: '攻击百分比', level: 50 },
          ],
        },
      }),
    ).toBe(
      '参数错误：deduceConfig.type，该参数可选值为：内功 轻功 招架 暗器 拳脚 剑法 刀法 棍法 鞭法 杖法',
    );
  });

  test('推演词条错误', () => {
    expect(
      checkConfig({
        userConfig: {
          server: 1,
          name: '测试工具',
          account: 'testaccount',
          password: 'testpassword',
        },
        deduceConfig: {
          type: '剑法',
          entrys: [
            { entry: '臂力', level: 10 },
            { entry: '击百分比', level: 50 },
          ],
        },
      }),
    ).toBe(
      '参数错误：deduceConfig.entrys，deduceConfig.type值为[剑法]时，该参数可选值为：攻击 防御 命中 招架 躲闪 臂力 根骨 身法 悟性 暴击伤害 内力消耗 防御百分比 命中百分比 招架百分比 躲闪百分比 气血百分比 暴击 暴击抵抗 攻击百分比 忙乱时间百分比 忽视忙乱 伤害减免 最终伤害 忽视对方防御 弱化 溅射 吸血 穿透 无情 嗜血 内伤',
    );
  });
});
