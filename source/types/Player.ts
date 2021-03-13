import { BasePackItem } from './Message';

export default interface Player {
  id?: string;
  pot?: number;
  pack: Array<BasePackItem>;
  status: Set<string>;
  items: Map<string, string>;
}
