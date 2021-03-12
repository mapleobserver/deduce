import { DeduceInterface } from '../types/System';
import { MessageMap } from '../types/Message';

export default (deduce: DeduceInterface) => (data: MessageMap['status']): void => {
  if (deduce.player.id === data.id) {
    switch (data.action) {
      case 'add':
        deduce.player.status.add(data.sid);
        break;
      case 'remove':
        deduce.player.status.delete(data.sid);
        break;
      default:
    }
  }
};
