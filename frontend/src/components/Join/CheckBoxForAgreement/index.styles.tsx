import styled from 'styled-components';
import checkIcon from '../../../assets/checkIcon.png';
import checkedIcon from '../../../assets/checkedIcon.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
`;

export const CheckBoxWrapper = styled.div`
  margin: 10px 0px;
  color: #888888;
  font-size: 13px;
  cursor: pointer;
`;

export const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  color: #888888;
  cursor: pointer;

  div {
    margin-left: 5px;
  }
`;

export const CheckBox = styled.input`
  appearance: none;
  padding: 8px;
  background-size: 100% 100%;
  background-image: url(${checkIcon});
  cursor: pointer;

  &:checked {
    border: transparent;
    background-image: url(${checkedIcon});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
`;

export const Mark = styled.span`
  color: #e76969;
`;

export const Table = styled.div`
  display: flex;
  margin: 20px 0px;
  border: 1px solid #eaeaea;
`;

export const Box = styled.div`
  width: 99%;
  display: flex;
  flex-direction: column;
  font-size: 13px;

  &:nth-child(2) {
    border-left: 1px solid #eaeaea;
    border-right: 1px solid #eaeaea;
  }

  div {
    &:first-child {
      font-size: 13px;
      font-style: normal;
      font-variant: normal;
      font-weight: normal;
      line-height: 24px;
      box-sizing: border-box;
      text-align: center;
      padding: 15px;
      background-color: #f5f5f5;
    }

    &:last-child {
      padding: 20px 10px;
      color: #555555;
      display: flex;
      justify-content: center;
      font-size: 13px;
      font-style: normal;
      font-variant: normal;
      font-weight: normal;
      line-height: 24px;
      font-family: Pretendard;

      span {
        width: 70%;
      }
    }
  }
`;
