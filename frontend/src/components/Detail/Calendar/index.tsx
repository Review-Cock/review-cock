import React, { useCallback } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth } from 'date-fns';
import { Container, Month, Week, Days, OneWeek, Day } from './index.style';

const Calendar = () => {
  const curDate = new Date();
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  const days = useCallback(() => {
    const days = [];
    const startMonth = startOfMonth(curDate);
    const endMonth = endOfMonth(startMonth);
    const firstWeek = startOfWeek(startMonth);
    const lastWeek = endOfWeek(endMonth);
    let day = firstWeek;

    while (day <= lastWeek) {
      const oneWeek = [];
      for (let i = 0; i < 7; i++) {
        if (isSameMonth(day, endMonth)) {
          oneWeek.push([format(day, 'd'), true, day]);
        } else {
          oneWeek.push([format(day, 'd'), false]);
        }
        day = addDays(day, 1);
      }
      days.push(oneWeek);
    }
    return days;
  }, [curDate])();

  return (
    <Container>
      <Month>
        <span>{format(curDate, 'Y년 M월')}</span>
      </Month>
      <Week>
        {week.map((v, i) => (
          <div key={i}>{v}</div>
        ))}
      </Week>
      <Days>
        {days.map((w, i) => (
          <OneWeek key={i}>
            {w.map(([d, ,]: any, j) => (
              <Day key={j}>{d}</Day>
            ))}
          </OneWeek>
        ))}
      </Days>
    </Container>
  );
};

export default Calendar;
