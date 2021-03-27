const prompts = require('prompts');
const types = require('./types');

async function getConfig() {
  const response = await prompts(
    [
      {
        type: 'text',
        name: 'account',
        message: '账号？',
        validate: (value) => (/^[a-z0-9]+$/.test(value) ? true : '账号输入错误，请重新输入。'),
      },
      {
        type: 'password',
        name: 'password',
        message: '密码？',
        validate: (value) => (/^[\S]+$/.test(value) ? true : '密码输入错误，请重新输入。'),
      },
      {
        type: 'select',
        name: 'server',
        message: '服务器？',
        choices: [
          { title: '一区', value: 1 },
          { title: '二区', value: 2 },
          { title: '三区', value: 3 },
          { title: '四区', value: 4 },
          { title: '测试服', value: 5 },
        ],
        initial: 0,
      },
      {
        type: 'text',
        name: 'name',
        message: '角色名？',
      },
      {
        type: 'select',
        name: 'type',
        message: '推演位置？',
        choices: Object.keys(types).map((type) => ({
          title: type,
          value: type,
        })),
        initial: 0,
      },
    ],
    {
      onCancel: () => process.exit(),
    },
  );

  return response;
}

async function getEntrys(type) {
  const response = await prompts(
    {
      type: 'multiselect',
      name: 'entrys',
      message: '推哪些词条？',
      choices: types[type].map((entry) => ({
        title: entry,
        value: entry,
      })),
      min: 1,
      max: 5,
      hint: '空格键选择，最少选择一个，最多选择五个',
      instructions: false,
    },
    {
      onCancel: () => process.exit(),
    },
  );

  return response;
}

module.exports = {
  getConfig,
  getEntrys,
};
