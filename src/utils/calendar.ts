import {eachDayOfInterval, endOfWeek, startOfWeek} from 'date-fns';

export const weekRange = (date: Date) => {
  const start = startOfWeek(date, {
    weekStartsOn: 1,
  });
  const end = endOfWeek(date, {
    weekStartsOn: 1,
  });

  return [start, end];
};

export const generateWeek = (date: Date) => {
  const [start, end] = weekRange(date);
  const days = eachDayOfInterval({start, end});

  return days;
};
