import fileParse from '../../source/utils/fileParse';

describe('加载配置文件', () => {
  test('正确加载yml', () => {
    const data = fileParse('config.yml');
    expect(data).not.toBeNull();
  });

  test('正确加载json', () => {
    const data = fileParse('package.json');
    expect(data).not.toBeNull();
  });

  test('未找到文件', () => {
    expect(() => {
      fileParse('error.yml');
    }).toThrow(Error);
  });

  test('不受支持文件类型', () => {
    expect(() => {
      fileParse('README.md');
    }).toThrow(Error);
  });
});
