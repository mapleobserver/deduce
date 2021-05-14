import { Config, DeduceConfig, UserConfig } from '../types/Config';
import regexps from '../regexps/index';

function checkUserConfig(config: UserConfig): string {
  let error: string = '';
  const errorMsg: {
    [key: string]: string;
  } = {
    name: '该值为玩家角色姓名',
    server: '该值为玩家服务器，可选值为：1 2 3 4 5',
    account: '该值为玩家账号',
    password: '该值为玩家账号密码',
  };

  Object.keys(errorMsg).forEach((type) => {
    if (!error && !(type in config)) {
      error += `参数错误：userConfig.${type}${type in errorMsg ? `，${errorMsg[type]}` : ''}`;
    }
  });

  return error;
}

function checkDeduceConfig(config: DeduceConfig): string {
  let error: string = '';

  if (!config.type || !(config.type in regexps)) {
    error += `参数错误：deduceConfig.type，该参数可选值为：${Object.keys(regexps).join(' ')}`;
  } else if (
    !config.entrys ||
    !Array.isArray(config.entrys) ||
    config.entrys.some(
      (entry) =>
        !Object.keys(regexps[config.type]).includes(entry.entry) || typeof entry.level !== 'number',
    )
  ) {
    error += `参数错误：deduceConfig.entrys，deduceConfig.type值为[${
      config.type
    }]时，该参数可选值为：${Object.keys(regexps[config.type]).join(' ')}`;
  }

  return error;
}

export default function checkConfig(config: Config): string {
  let error: string = '';
  const { userConfig, deduceConfig } = config;

  if (!userConfig || !deduceConfig) {
    error += `缺少参数：${!userConfig ? 'userConfig' : 'deduceConfig'}`;
  }

  if (!error) {
    error += checkUserConfig(userConfig);
  }

  if (!error) {
    error += checkDeduceConfig(deduceConfig);
  }

  return error;
}
