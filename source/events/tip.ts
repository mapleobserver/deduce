import { DeduceInterface } from '../types/System';
import { MessageMap } from '../types/Message';

export default (deduce: DeduceInterface) => (data: MessageMap['tip']): void => {
  deduce.logger.log(data.message);
};
