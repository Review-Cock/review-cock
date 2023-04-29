import styled, { css } from 'styled-components';

export const FontCss = css`
  text-align: left;
  font-style: normal;
  font-variant: normal;
  font-weight: medium;
  letter-spacing: 0px;
  opacity: 1;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const Month = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 25px;
  font-size: 20px;
  line-height: 26px;
  color: #222222;
  & > div {
    position: absolute;
    right: 30px;
    margin-left: 100px;
    cursor: pointer;
  }
`;

export const Week = styled.div`
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

export const Days = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Day = styled.div`
  width: 100%;
  &.same {
    color: black;
  }
  & > div {
    width: 55px;
    height: 20px;
    &.reg {
      background-color: #f1d8d8;
    }
    &.notice {
      background-color: #e76969;
    }
    &.exp {
      background-color: #eaeaea;
    }
  }
`;

export const OneWeek = styled.div`
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

export const Types = styled.div`
  display: flex;
  align-items: center;
  & > p {
    margin: 0 10px;
  }
  & > div {
    width: 55px;
    height: 20px;
    &.reg {
      background-color: #f1d8d8;
    }
    &.notice {
      background-color: #e76969;
    }
    &.exp {
      background-color: #eaeaea;
    }
  }
`;
