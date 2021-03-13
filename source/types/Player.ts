import { BasePackItem, BaseRoomItem } from './Message';

export default interface Player {
  id?: string;
  pot?: number;
  packList: Array<BasePackItem>;
  status: Set<string>;
  roomItems: Array<BaseRoomItem>;
}
