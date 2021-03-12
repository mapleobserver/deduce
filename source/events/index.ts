import { Event } from '../types/Event';
import dialog from './dialog';
import roles from './roles';
import login from './login';
import score from './score';
import items from './items';
import pack from './pack';
import status from './status';
import tip from './tip';
import error from './error';

const eventList: {
  [key: string]: Event;
} = {
  roles,
  login,
  score,
  items,
  pack,
  status,
  dialog,
  tip,
  error,
};

export default eventList;
