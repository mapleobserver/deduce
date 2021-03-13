import { getServer, getToken } from '../../source/utils/api';

describe('API测试', () => {
  test('获取服务器地址', async () => {
    const wsUrl = await getServer(1);
    expect(wsUrl).not.toBeNull();
  });

  test('获取服务器地址失败', async () => {
    const wsUrl = await getServer(9);
    expect(wsUrl).toBeNull();
  });

  test('获取用户凭证', async () => {
    const token = await getToken('testaccount', 'testpassword');
    expect(token).not.toBeNull();
  });

  test('获取用户凭证失败', async () => {
    const token = await getToken('wrougaccount', 'wrongpassword');
    expect(token).toBeNull();
  });
});
