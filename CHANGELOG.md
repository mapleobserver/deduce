## [0.4.4](https://github.com/wsmud/deduce/compare/v0.4.3...v0.4.4) (2021-03-27)

### fix

- 修复招架位置乾坤词条错误 ([822bb91](https://github.com/wsmud/deduce/commit/822bb91f58482fc27139f48b1b7edd54fa699a95))

## [0.4.2](https://github.com/wsmud/deduce/compare/v0.2.38...v0.4.2) (2021-03-22)

### refactor

- 删除无意义变量重命名 ([698bd29](https://github.com/wsmud/deduce/commit/698bd299b14cba5059f1bbc00ebc98d58596add2))
- 修改推演逻辑 ([3bb48ed](https://github.com/wsmud/deduce/commit/3bb48ed9d14bfb3d3c066e20bfa8d23ce575c7fb))

## [0.2.38](https://github.com/wsmud/deduce/compare/v0.2.36...v0.2.38) (2021-03-22)

### fix

- 修复因包裹里有无法放置的香炉而引起的续香炉失败 ([f3575ce](https://github.com/wsmud/deduce/commit/f3575ce86e4cc8389d6a246df913746b17809145))

## [0.2.36](https://github.com/wsmud/deduce/compare/v0.2.3...v0.2.36) (2021-03-18)

### chore

- update git hook ([3222cd5](https://github.com/wsmud/deduce/commit/3222cd5cd2aee86ae263761d70fd276518fe99e6))

### fix

- 修复续香炉失败的问题 ([9c68469](https://github.com/wsmud/deduce/commit/9c68469da632579981e5a987ebf32068227a3f3a))

## [0.2.3](https://github.com/wsmud/deduce/compare/v0.2.2...v0.2.3) (2021-03-17)

### fix

- 修复剑心词条解析错误的问题 ([a70207d](https://github.com/wsmud/deduce/commit/a70207d2bcf5542bff88e1eae5bcb3e99f2c0fdf))

### refactor

- 去除多余重复判断 ([6c06b63](https://github.com/wsmud/deduce/commit/6c06b63866870c6abf4b776c5f56910119f7c6be))

## [0.2.2](https://github.com/wsmud/deduce/compare/v0.2.1...v0.2.2) (2021-03-16)

### build

- 适配低版本 node ([a929d06](https://github.com/wsmud/deduce/commit/a929d06b3e29649dd30147de1c9e90fdf9c6f1f8))

## [0.2.1](https://github.com/wsmud/deduce/compare/v0.2.0...v0.2.1) (2021-03-16)

### fix

- 修复某些特殊词条解析失败的问题 ([270dd72](https://github.com/wsmud/deduce/commit/270dd729b8b8f5989a9b498e20f8cd04506fdeae))

# [0.2.0](https://github.com/wsmud/deduce/compare/v0.1.5...v0.2.0) (2021-03-15)

### feat

- 增加了断线重连机制 ([f2601dc](https://github.com/wsmud/deduce/commit/f2601dce6c08fcfd4f5bd610357c54c4ace277f6))

### refactor

- 升级属性时现在会显示当前属性值 ([5078a0a](https://github.com/wsmud/deduce/commit/5078a0a71d05a40db448e4d32531c183004ab9a4))

## [0.1.5](https://github.com/wsmud/deduce/compare/v0.1.2...v0.1.5) (2021-03-15)

### chore

- update readme ([98c2cce](https://github.com/wsmud/deduce/commit/98c2cce44661e10e7b98369bb9b6452be3957d89))
- update readme ([09ab536](https://github.com/wsmud/deduce/commit/09ab5367fa5cde029d7d4e97df19505384543d4f))

### feat

- 增加推演前获取推演位置各词条的等级 ([6951a24](https://github.com/wsmud/deduce/commit/6951a2437d62d64fee269b787a80d3cab2ebaa9f))

### fix

- 修正 log 信息 ([2dd8132](https://github.com/wsmud/deduce/commit/2dd81328c42c5a511b7e3359e6aeb5a68a04a34e))

## [0.1.2](https://github.com/wsmud/deduce/compare/v0.1.1...v0.1.2) (2021-03-14)

### fix

- 修复各种效率正则错误的问题 ([d1e019f](https://github.com/wsmud/deduce/commit/d1e019ff1955fce1b2e58398352dbe873b45e32a))

## [0.1.1](https://github.com/wsmud/deduce/compare/v0.1.0...v0.1.1) (2021-03-14)

### chore

- update readme ([80585a1](https://github.com/wsmud/deduce/commit/80585a1b4314afaf8110e01897a546c0a6c5defe))

### fix

- 修复招架位置词条缺失问题 ([528928e](https://github.com/wsmud/deduce/commit/528928e5ca9d39bddc4e7b062deb30bfa339fd67))

# [0.1.0](https://github.com/wsmud/deduce/compare/02c13b762c380afc185a880c74a35cb18e6e73aa...v0.1.0) (2021-03-14)

### build

- build 排除 fs 依赖 ([def7be5](https://github.com/wsmud/deduce/commit/def7be5eab5179b052625074be6d7b24c3bac8c5))

### ci

- 修改持续集成配置 ([02c13b7](https://github.com/wsmud/deduce/commit/02c13b762c380afc185a880c74a35cb18e6e73aa))

### feat

- 完善房间物品以及生物变更事件 ([cfe7770](https://github.com/wsmud/deduce/commit/cfe77701434c2877c5243938e4fe6dfecf3ebdd5))
- 完善推演功能 ([072c3ba](https://github.com/wsmud/deduce/commit/072c3ba017f808bd2eeb1a7da750c53cdc7e7164))
- 新增类型声明 ([7307397](https://github.com/wsmud/deduce/commit/730739795568ecfa18c8281d6671048bfcc6eaa1))
- 新增配置加载模块 ([dc90b05](https://github.com/wsmud/deduce/commit/dc90b053c555ca63bf914ec1fa71e6d5980cc41e))
- 新增配置检查机制，逐步完善配置模块 ([8a052e0](https://github.com/wsmud/deduce/commit/8a052e0aecb1159e3ba9bed5b21821b2b9a78501))
- 新增推演各部位词条信息 ([c12e8c8](https://github.com/wsmud/deduce/commit/c12e8c8b99865dbe45f6bdf925342a48738c3a31))
- 增加格式化工具 ([3685bb3](https://github.com/wsmud/deduce/commit/3685bb3139b0995837456d4aa565d693b861ff3a))

### fix

- 修复检查配置模块因配置类型引起的错误 ([f8687cc](https://github.com/wsmud/deduce/commit/f8687ccd50e2ecaea5ecf15e91090f42bf38d845))
- 修复配置文件类型错误 ([13c6375](https://github.com/wsmud/deduce/commit/13c6375df30548be4e16c6f09ed985ba61b725b9))

### refactor

- 完善 pack 事件 ([0ee95a1](https://github.com/wsmud/deduce/commit/0ee95a1672830d8d2f655dff724e5582e7681abc))
- 重构部分代码 ([497a0af](https://github.com/wsmud/deduce/commit/497a0af187ee9af0736194834dbe8cc8cce8c04c))
- 重构部分代码 ([f828c6e](https://github.com/wsmud/deduce/commit/f828c6e8ea22a0455c5491414955f50f9408b749))

### test

- 新增词条正则测试用例 ([d2d65e4](https://github.com/wsmud/deduce/commit/d2d65e4290971ce0fcf2d5c7d53f9f50b5269c62))
- 新增 api 测试用例 ([5a2d736](https://github.com/wsmud/deduce/commit/5a2d7367f2ef34094eb9ac86c0cc71d22c9f9289))
- 增加配置检查测试用例 ([4ef7895](https://github.com/wsmud/deduce/commit/4ef789548db9afa983f474e15d13c4f3a53df028))
- 增加 formatToll 测试用例 ([c89ca1a](https://github.com/wsmud/deduce/commit/c89ca1ac7910ac2ebbac0c52082cb857fd1b4271))
