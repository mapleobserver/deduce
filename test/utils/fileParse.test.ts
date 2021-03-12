import fileParse from '../../source/utils/fileParse';

test('加载配置测试', () => {
  const data = fileParse('config.yml');
  expect(data).toEqual({
    server: 1,
    name: '测试工具',
    account: 'testaccount',
    password: 'testpassword',
  });
});
