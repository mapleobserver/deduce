#!/usr/bin/env node
const fs = require('fs');
const yaml = require('js-yaml');
const prompts = require('./prompts');

const startJs = `const wsmudDeduce = require('@wsmud/deduce');
new wsmudDeduce('config.yml');`;
const baseConfig = {
  userConfig: {
    server: 1,
    name: '测试工具',
    account: 'testaccount',
    password: 'testpassword',
  },
  deduceConfig: { type: '剑法', entrys: ['臂力', '忽视对方防御', '暴击', '攻击百分比', '嗜血'] },
  accessories: { food: true, fy: true, xlu: true },
};

fs.writeFileSync('start.js', startJs);

(async () => {
  const config = await prompts.getConfig();
  const entrys = await prompts.getEntrys(config.type);
  baseConfig.userConfig.server = config.server;
  baseConfig.userConfig.name = config.name;
  baseConfig.userConfig.account = config.account;
  baseConfig.userConfig.password = config.password;
  baseConfig.deduceConfig.type = config.type;
  baseConfig.deduceConfig.entrys = entrys.entrys;
  fs.writeFileSync('config.yml', yaml.dump(baseConfig));
  console.log('启动文件与配置已生成，请执行node start.js');
})();
