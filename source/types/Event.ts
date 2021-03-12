import { DeduceInterface } from './System';
import { Message } from './Message';

export interface Listener {
  (data: Message): void;
}
export interface Event {
  (deduce: DeduceInterface): Function;
}
