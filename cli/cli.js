#!/usr/bin/env node
/* eslint 'no-restricted-syntax': 'off' */
/* eslint 'no-await-in-loop': 'off' */

const fs = require('fs');
const yaml = require('js-yaml');
const prompts = require('./prompts');

const startJs = `const wsmudDeduce = require('@wsmud/deduce');
new wsmudDeduce('config.yml');`;
const baseConfig = {
  userConfig: {},
  deduceConfig: {},
  accessories: { food: true, fy: true, xlu: true },
};

(async () => {
  const config = await prompts.getConfig();
  const { entrys } = await prompts.getEntrys(config.type);
  const entrysInfo = entrys.map((entry) => ({ entry, level: 0 }));
  const autoReLogin = await prompts.getYesOrNo('是否自动重连？');
  const checkStatusOnLevelUp = await prompts.getYesOrNo(
    '是否设置续buff时机为词条升级时，否则将在buff移除时立刻续。',
  );
  const setOverEntry = await prompts.getYesOrNo('是否设置拿到某些词条后暂停？');
  if (setOverEntry.choose) {
    const { entry } = await prompts.getOverEntry(entrys);
    baseConfig.deduceConfig.overEntry = entry;
  }
  const setLevel = await prompts.getYesOrNo('是否设置词条目标等级？');
  if (setLevel.choose) {
    if (setOverEntry.choose) {
      entrysInfo.splice(
        entrysInfo.findIndex((entry) => entry.entry === baseConfig.deduceConfig.overEntry),
        1,
      );
    }
    for (const entry of entrysInfo) {
      const { level } = await prompts.getEntryLevel(entry.entry);
      entry.level = level;
    }
  }
  const setPiror = await prompts.getYesOrNo('是否设置词条优先？');
  if (setPiror.choose) {
    for (const entry of entrysInfo) {
      const { choose } = await prompts.getYesOrNo(`是否将${entry.entry}设置为优先词条？`);
      entry.prior = choose;
    }
  }
  baseConfig.autoReLogin = autoReLogin.choose;
  baseConfig.checkStatusOnLevelUp = checkStatusOnLevelUp.choose;
  baseConfig.userConfig.server = config.server;
  baseConfig.userConfig.name = config.name;
  baseConfig.userConfig.account = config.account;
  baseConfig.userConfig.password = config.password;
  baseConfig.deduceConfig.type = config.type;
  baseConfig.deduceConfig.entrys = entrysInfo;
  fs.writeFileSync('start.js', startJs);
  fs.writeFileSync('config.yml', yaml.dump(baseConfig));
  console.log('启动文件与配置已生成，请执行node start.js');
})();
