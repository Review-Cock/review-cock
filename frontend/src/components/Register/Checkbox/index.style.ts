import styled from 'styled-components';
import checkIcon from '@assets/checkIcon.png';
import checkedIcon from '@assets/checkedIcon.png';

export const CheckBoxWrapper = styled.div`
  width: 460px;
  height: 60px;
  display: flex;
  align-items: center;
`;

export const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  color: #888888;
  margin-right: 60px;
`;

export const CheckBoxItem = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
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

export const SelectTag = styled.select`
  outline: none;
  border: 1px solid #cccccc;
  padding: 5px;
`;
