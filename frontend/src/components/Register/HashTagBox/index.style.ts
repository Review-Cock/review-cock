import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 30%;
  width: 460px;
  flex-wrap: wrap;
`;

export const FontCss = css`
  text-align: left;
  font-style: normal;
  font-variant: normal;
  font-weight: medium;
`;

export const TagItem = styled.div`
  ${FontCss}
  font-size: 16px;
  line-height: 26px;
  padding: 0 10px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-top: 10px;
  background: #e76969 0% 0% no-repeat padding-box;
  border-radius: 23px;
  opacity: 1;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;
