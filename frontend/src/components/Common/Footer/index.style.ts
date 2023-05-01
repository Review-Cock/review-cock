import styled, { css } from 'styled-components';

export const fontCss = css`
  font-style: normal;
  font-variant: normal;
  font-weight: medium;
  font-size: 12px;
  line-height: 19px;
  font-family: Pretendard;
`;

export const Container = styled.div`
  height: 300px;
  width: 100%;
  background: #333333 0% 0% no-repeat padding-box;
  opacity: 1;
  min-width: 1130px;
  p {
    font-size: 13px;
  }
`;

export const TopInfoContainer = styled.div`
  height: 40px;
  padding: 10px;
  border-bottom: 1px solid #707070;
  opacity: 1;
  display: flex;
  align-items: center;
  & p {
    text-align: left;
    ${fontCss}
    letter-spacing: 0px;
    color: #999999;
    opacity: 1;
    span {
      margin-right: 30px;
      margin-left: 30px;
    }
  }
`;

export const BottomInfoContainer = styled.div`
  width: 100%;
  height: 180px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  & > img {
    height: 100%;
  }
`;

export const MainInfoBox = styled.div`
  & > p {
    text-align: left;
    ${fontCss}
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0px;
    color: #555555;
    opacity: 1;
  }
`;

export const TextBox = styled.div`
  display: flex;
  & > p {
    margin-bottom: 10px;
    margin-right: 50px;
    letter-spacing: 0px;
    color: #888888;
    opacity: 1;
  }
  & span {
    text-align: left;
    ${fontCss}
    letter-spacing: 0px;
    color: #cccccc;
    opacity: 1;
    margin-right: 10px;
  }
`;

export const CommunicationInfoBox = styled.div`
  .call-number {
    text-align: left;
    ${fontCss}
    font-size: 20px;
    line-height: 36px;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  }
  & > p {
    margin-bottom: 10px;
    margin-right: 50px;
    text-align: left;
    ${fontCss}
    letter-spacing: 0px;
    color: #888888;
    opacity: 1;
  }
`;
