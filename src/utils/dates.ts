import {format} from 'date-fns';

const DEFAULT_DAY_FORMAT = 'dd';

export const formatDay = (date: Date) => {
  return format(date, DEFAULT_DAY_FORMAT);
};
