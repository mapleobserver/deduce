import { Event } from '../types/Event';
import error from './error';
import close from './close';

const eventList: {
  [key: string]: Event;
} = {
  error,
  close,
};

export default eventList;
