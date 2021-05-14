import { load } from 'js-yaml';
import { parse } from 'json5';
import { extname } from 'path';
import { existsSync, readFileSync, realpathSync } from 'fs';

export default function filePsrse(path: string): any {
  if (!existsSync(path)) {
    throw new Error('未找到配置文件');
  }
  const ext: string = extname(path);
  const file = readFileSync(realpathSync(path)).toString();
  let data: any;
  switch (ext) {
    case '.json':
      data = parse(file);
      break;
    case '.yml':
    case '.yaml':
      data = load(file) as any;
      break;
    default:
      throw new TypeError('不受支持的配置文件类型');
  }
  if (Object.prototype.toString.call(data) !== '[object Object]') {
    throw new TypeError('配置文件错误');
  }
  return data;
}
