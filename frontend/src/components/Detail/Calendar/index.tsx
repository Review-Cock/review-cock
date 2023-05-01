import React, { useCallback, useState } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isWithinInterval,
  isSameDay,
} from 'date-fns';
import { Container, Month, Week, Days, OneWeek, Day, Types } from './index.style';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

interface dates {
  regStart: Date;
  regEnd: Date;
  notice: Date;
  expStart: Date;
  expEnd: Date;
}

interface CalendarProps {
  dates: dates;
}

const Calendar = ({ dates }: CalendarProps) => {
  const [curDate, setCurDate] = useState(new Date());
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
          oneWeek.push([format(day, 'd'), 'same', day, '']);
        } else {
          oneWeek.push([format(day, 'd'), 'different', day, '']);
        }
        day = addDays(day, 1);
      }
      days.push(oneWeek);
    }

    days.forEach((w) => {
      w.forEach(([, , originD]: any, i) => {
        if (isWithinInterval(originD, { start: dates.regStart, end: dates.regEnd })) {
          w[i][3] = 'reg';
        } else if (isWithinInterval(originD, { start: dates.expStart, end: dates.expEnd })) {
          w[i][3] = 'exp';
        } else if (isSameDay(originD, dates.notice)) {
          w[i][3] = 'notice';
        }
      });
    });

    return days;
  }, [curDate])();

  const handleChangeMonthBtn = (v: number) => {
    const preMonth = new Date(curDate.getFullYear(), curDate.getMonth() + v);
    setCurDate(preMonth);
  };

  return (
    <Container>
      <Month>
        <span>{format(curDate, 'Y년 M월')}</span>
        <div>
          <GrFormPrevious
            size={'1.5rem'}
            onClick={() => {
              handleChangeMonthBtn(-1);
            }}
          />
          <GrFormNext
            size={'1.5rem'}
            onClick={() => {
              handleChangeMonthBtn(1);
            }}
          />
        </div>
      </Month>
      <Week>
        {week.map((v, i) => (
          <div key={i}>{v}</div>
        ))}
      </Week>
      <Days>
        {days.map((w, i) => (
          <OneWeek key={i}>
            {w.map(([strDate, sameMonth, , type]: any, j) => (
              <Day className={sameMonth} key={j}>
                {strDate}
                <div className={type}></div>
              </Day>
            ))}
          </OneWeek>
        ))}
      </Days>
      <Types>
        <div className="reg"></div> <p>신청기간</p>
        <div className="notice"></div> <p>발표일</p>
        <div className="exp"></div> <p>체험기간</p>
      </Types>
    </Container>
  );
};

export default Calendar;
