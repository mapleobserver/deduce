import { DeduceInterface } from '../types/System';
import { Tip } from '../types/Message';
import { tipFormat } from '../utils/formatTool';

export default (deduce: DeduceInterface) => (data: Tip): void => {
  deduce.logger.log(tipFormat(data.message));
};
