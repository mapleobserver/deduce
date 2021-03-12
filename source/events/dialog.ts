import { DeduceInterface } from '../types/System';
import { BaseDialog } from '../types/Message';

export default (deduce: DeduceInterface) => (data: BaseDialog): void => {
  deduce.socket?.emit(data.dialog, data);
};
