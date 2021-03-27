#!/usr/bin/env node
const fs = require('fs');
const yaml = require('js-yaml');

const startJs = `const wsmudDeduce = require('@wsmud/deduce');
new wsmudDeduce('config.yml');`;
const config = {
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
fs.writeFileSync('config.yml', yaml.dump(config));
