import { DeduceInterface } from '../types/System';
import { MessageMap } from '../types/Message';

export default (deduce: DeduceInterface) => (data: MessageMap['roles']): void => {
  const user = data.roles.find((role) => role.name === deduce.config.name);
  if (user) {
    deduce.logger.log('获取角色信息成功，开始登陆。');
    deduce.socket?.send(`login ${user.id}`);
  } else {
    deduce.logger.error('获取角色信息失败。');
    process.exit();
  }
};
