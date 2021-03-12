import Api from '../../source/utils/Api';

test('获取服务器地址', async () => {
  const wsUrl = await Api.getServer(1);
  expect(wsUrl).not.toBeNull();
});

test('获取用户凭证', async () => {
  const token = await Api.getToken('testaccount', 'testpassword');
  expect(token).not.toBeNull();
});
