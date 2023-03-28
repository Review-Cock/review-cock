import styled from 'styled-components';
import checkIcon from '../../../assets/checkIcon.png';
import checkedIcon from '../../../assets/checkedIcon.png';

export const LoginFormBox = styled.form`
  margin-top: 50px;
  width: 35%;
  display: flex;
  flex-direction: column;
`;

export const LoginInput = styled.input`
  padding: 15px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #cccccc;

  &:focus {
    outline-color: #e76969;
  }

  &::placeholder {
    color: #cccccc;
  }

  &:first-child {
    border-radius: 5px 5px 0px 0px;
  }

  &:nth-child(2) {
    border-top: none;
    border-radius: 0px 0px 5px 5px;
  }

  &:last-child {
    margin-top: 20px;
    padding: 20px 15px;
    border: none;
    background-color: #e76969;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
  }
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

export const IDManagementBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0px;
  margin: 10px 0px;
  font-size: 14px;
  color: #888888;
`;

export const FindIdBox = styled.div`
  display: flex;

  div {
    cursor: pointer;
    &:nth-child(2) {
      margin: 0px 5px;
    }
  }
  a {
    text-decoration: none;
    &:visited {
      color: #888888;
    }
  }
`;
