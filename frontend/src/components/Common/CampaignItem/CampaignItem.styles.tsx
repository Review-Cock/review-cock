import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 10px 20px;
  border: 1px solid #eaeaea;
  border-radius: 0px 0px 20px 20px;
`;

export const TitleText = styled.div`
  width: 100%;
  font-style: normal;
  font-variant: normal;
  font-weight: medium;
  font-size: 20px;
  line-height: 26px;
  font-family: Pretendard;
  color: #222222;
`;

export const PriceNameText = styled.div`
  padding-top: 5px;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  font-family: Pretendard;
  color: #555555;
`;

export const ApplicationText = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  margin: 8px 0px;
  color: #555555;
  div {
    box-sizing: border-box;
    display: flex;

    &:first-child {
      width: 50px;
      line-height: 26px;
      span {
        color: #e76969;
        font-size: 14px;
        font-weight: 600;
      }
    }

    &:nth-child(2) {
      display: flex;
      justify-content: center;
      margin: 0px 5px;
      font-style: normal;
      font-variant: normal;
      font-weight: medium;
      font-size: 12px;
      line-height: 26px;
      font-family: Pretendard;
      color: #cccccc;
    }

    &:last-child {
      font-style: normal;
      font-variant: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 26px;
      font-family: Pretendard;
    }
  }
`;

export const ReionText = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  font-size: 16px;
  font-family: Pretendard;
  color: #aaaaaa;
`;
