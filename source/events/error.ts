import { DeduceInterface } from '../types/System';

export default (deduce: DeduceInterface) => (data: Error): void => {
  deduce.logger.error(data.message);
};
