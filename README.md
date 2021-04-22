# <p align="center">Wsmud Deduce</p>

<p align="center">
  <a href="https://github.com/wsmud/deduce/actions?query=workflow%3APackage"><img src="https://img.shields.io/github/workflow/status/wsmud/deduce/Node.js%20Package"></a>
  <a href="https://codecov.io/gh/wsmud/deduce"><img src="https://img.shields.io/codecov/c/github/wsmud/deduce/master"/></a>
  <a href="http://commitizen.github.io/cz-cli/"><img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg"></a>
  <a href="https://github.com/wsmud/deduce/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@wsmud/deduce"></a>
  <a href="https://www.npmjs.com/package/@wsmud/deduce"><img src="https://img.shields.io/npm/v/@wsmud/deduce"></a>
  <a href="https://www.npmjs.com/package/@wsmud/deduce"><img src="https://img.shields.io/npm/dt/@wsmud/deduce"></a>
  <a href="https://jq.qq.com/?_wv=1027&k=lhe1GnIq"><img src="https://img.shields.io/badge/QQ群-58806400-blue"></a>
</p>

## 使用方法

- [无任何基础请点这里](https://baidu.com)

- 安装 [nodejs](http://nodejs.cn/download/)

```sh
npm i @wsmud/deduce
npx deduce
```

## 配置文件

支持格式为 json|yml|yaml

```yaml
#config.yml

userConfig:
  server: 1
  name: 测试工具
  account: testaccount
  password: testpassword

deduceConfig:
  overEntry: 不灭
  type: 内功
  entrys:
    - entry: 攻击
      level: 50
    - entry: 防御
      level: 50
    - entry: 命中
      level: 50
    - entry: 招架
      level: 50

accessories:
  food: true
  fy: true
  xlu: true

autoReLogin: true
```

#### userConfig

- name: 名字
- server: 区 1|2|3|4|5
- account: 账号
- password: 密码

#### deduConfig

- type: 推演位置 内功|轻功|招架|拳脚|剑法|刀法|棍法|杖法|鞭法|暗器
- overEntry: 拿到某个词条后停止
- entrys
  - entry 词条 [词条信息](#词条信息)
  - level 词条等级 0 级为无限制
  - prior 词条优先提升及获取

#### accessories

- food: 续冰心丹 true|false
- fy: 续飞翼剑 true|false
- xlu: 续香炉 true|false

#### autoReLogin

是否自动重连

## 词条信息

1. [内功](#内功词条)
1. [轻功](#轻功词条)
1. [招架](#招架词条)
1. [拳脚](#兵器词条)
1. [剑法](#兵器词条)
1. [刀法](#兵器词条)
1. [棍法](#兵器词条)
1. [杖法](#兵器词条)
1. [鞭法](#兵器词条)
1. [暗器](#暗器词条)

## 内功词条

```
攻击 防御 命中 招架 躲闪 臂力 根骨 身法 悟性 暴击伤害 内力消耗 防御百分比 命中百分比 招架百分比 躲闪百分比 气血百分比 内力上限 内力转化 暴击 暴击抵抗 练习效率 学习效率 打坐效率 忙乱时间 攻击百分比 忙乱时间百分比 忽视忙乱 绝招释放时间 绝招释放时间百分比 绝招冷却时间 绝招冷却时间百分比 攻击速度 攻击速度百分比 伤害减免 最终伤害 忽视对方防御 吸血 不灭 战神 反震 守护 剑心
```

## 轻功词条

```
攻击 防御 命中 招架 躲闪 臂力 根骨 身法 悟性 暴击伤害 内力消耗 防御百分比 命中百分比 招架百分比 躲闪百分比 气血百分比 练习效率 学习效率 打坐效率 反击 灵动 专注

```

## 招架词条

```
攻击 防御 命中 招架 躲闪 臂力 根骨 身法 悟性 暴击伤害 内力消耗 防御百分比 命中百分比 招架百分比 躲闪百分比 气血百分比 练习效率 学习效率 打坐效率 反击 灵动 专注 乾坤 纵横
```

## 兵器词条

```
攻击 防御 命中 招架 躲闪 臂力 根骨 身法 悟性 暴击伤害 内力消耗 防御百分比 命中百分比 招架百分比 躲闪百分比 气血百分比 暴击 暴击抵抗 攻击百分比 忙乱时间百分比 忽视忙乱 伤害减免 最终伤害 忽视对方防御 弱化 溅射 吸血 穿透 无情 嗜血 内伤
```

## 暗器词条

```
攻击 防御 命中 招架 躲闪 臂力 根骨 身法 悟性 暴击伤害 内力消耗 防御百分比 命中百分比 招架百分比 躲闪百分比 气血百分比 暴击 暴击抵抗 攻击百分比 忙乱时间百分比 忽视忙乱 伤害减免 最终伤害 忽视对方防御
```
