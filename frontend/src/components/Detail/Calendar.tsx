import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth } from 'date-fns';

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

const FontCss = css`
  text-align: left;
  font-style: normal;
  font-variant: normal;
  font-weight: medium;
  letter-spacing: 0px;
  opacity: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 350px;
`;
const Month = styled.div`
  margin-bottom: 25px;
  font-size: 20px;
  line-height: 26px;
  color: #222222;
`;

const Week = styled.div`
  display: flex;
  margin-bottom: 20px;
  ${FontCss}
  font-size: 16px;
  line-height: 26px;
  color: #222222;
  opacity: 1;
  & > :first-child {
    color: #e14d4d;
  }
  & > :last-child {
    color: #372cdf;
  }
  & > div {
    width: 100%;
  }
`;

const Days = styled.div`
  display: flex;
  flex-direction: column;
`;

const OneWeek = styled.div`
  display: flex;
  margin-bottom: 30px;
  ${FontCss}
  font-size: 14px;
  line-height: 26px;
  color: #888888;
  & > :first-child {
    color: #e14d4d;
  }
  & > :last-child {
    color: #372cdf;
  }
`;

const Day = styled.div`
  width: 100%;
`;
