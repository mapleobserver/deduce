import { DeduceInterface } from '../types/System';
import { MessageMap } from '../types/Message';
import { tipFormat } from '../utils/formatTool';

export default (deduce: DeduceInterface) => (data: MessageMap['tip']): void => {
  deduce.logger.log(tipFormat(data.message));
};
