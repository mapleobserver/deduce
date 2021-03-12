interface BaseType {
  type: string;
}

export interface BaseDialog extends BaseType {
  type: 'dialog';
  dialog: string;
}

export interface Roles extends BaseType {
  type: 'roles';
  roles: Array<{
    name: string;
    title: string;
    id: string;
  }>;
}

export interface Login extends BaseType {
  type: 'login';
  id: string;
  setting: {
    [index: string]: string | number;
  };
}

export interface Items extends BaseType {
  type: 'items';
  items: Array<{
    id: string;
    p?: number;
    name: string;
    mp?: number;
    hp?: number;
    max_mp?: number;
    max_hp?: number;
    status?: Array<{
      sid: string;
      name: string;
      duration: number;
      overtime: number;
    }>;
  }>;
}

export interface Status extends BaseType {
  type: 'status';
  action: 'add' | 'remove' | 'refresh';
  id: string;
  sid: string;
  name?: string;
  count?: number;
  duration?: number;
}

export interface Score extends BaseDialog {
  dialog: 'score';
  id: string;
  name: string;
  age: string;
  family: string;
  master: string;
  genter: string;
  level: string;
  hp: number;
  mp: number;
  max_hp: number;
  max_mp: number;
  limit_mp: number;
  str: number;
  con: number;
  dex: number;
  int: string;
  kar: 20;
  per: number;
  gj: number;
  fy: number;
  ds: number;
  mz: number;
  zj: number;
  exp: number;
  pot: number;
  str_add: number;
  con_add: number;
  dex_add: number;
  int_add: number;
  jingli: string;
  gjsd: number;
  gongji: number;
  bj: string;
}

export interface Pack extends BaseDialog {
  dialog: 'pack';
  items: Array<{
    id: string;
    name: string;
    count: number;
    unit: string;
    value: number;
    can_combine?: number;
    can_use?: number;
    can_eq?: number;
    can_study?: number;
  }>;
  money: number;
  eqs: Array<{
    name: string;
    id: string;
  }>;
  max_item_count: number;
}

export interface Tip extends BaseType {
  type: 'tip';
  message: string;
}

export type Message = Roles | Login | Items | Status | Score | Pack | Tip;
export type MessageType = Message['type'];
export type MessageMap = {
  roles: Roles;
  login: Login;
  items: Items;
  status: Status;
  score: Score;
  pack: Pack;
  tip: Tip;
};
