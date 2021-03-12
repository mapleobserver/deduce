import Api from '../../source/utils/Api';

describe('API测试', () => {
  test('获取服务器地址', async () => {
    const wsUrl = await Api.getServer(1);
    expect(wsUrl).not.toBeNull();
  });

  test('获取服务器地址失败', async () => {
    const wsUrl = await Api.getServer(9);
    expect(wsUrl).toBeNull();
  });

  test('获取用户凭证', async () => {
    const token = await Api.getToken('testaccount', 'testpassword');
    expect(token).not.toBeNull();
  });

  test('获取用户凭证失败', async () => {
    const token = await Api.getToken('wrougaccount', 'wrongpassword');
    expect(token).toBeNull();
  });
});
