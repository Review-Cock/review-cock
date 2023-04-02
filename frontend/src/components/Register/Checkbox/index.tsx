import React from 'react';
import styled from 'styled-components';
import checkIcon from '@assets/checkIcon.png';
import checkedIcon from '@assets/checkedIcon.png';

interface CheckboxProps {
  type: string;
}

const Checkbox = ({ type }: CheckboxProps) => {
  const handleSnsTypeCheckbox = (e: React.MouseEvent<HTMLInputElement>) => {
    const currentCheck = e.target;
    const allCheckbox = document.getElementsByName('snsType') as NodeListOf<HTMLInputElement>;
    for (let i = 0; i < allCheckbox.length; i++) {
      if (allCheckbox[i] !== currentCheck) {
        allCheckbox[i].checked = false;
      } else {
        allCheckbox[i].checked = true;
      }
    }
  };

  const handleCampaignTypeCheckbox = (e: React.MouseEvent<HTMLInputElement>) => {
    const currentCheck = e.target;
    const allCheckbox = document.getElementsByName('campaignType') as NodeListOf<HTMLInputElement>;
    for (let i = 0; i < allCheckbox.length; i++) {
      if (allCheckbox[i] !== currentCheck) {
        allCheckbox[i].checked = false;
      } else {
        allCheckbox[i].checked = true;
      }
    }
  };

  return (
    <div>
      {type === 'snsType' && (
        <CheckBoxWrapper>
          <CheckBoxLabel>
            <CheckBoxItem type="checkbox" name="snsType" value="blog" onClick={handleSnsTypeCheckbox} />
            블로그
          </CheckBoxLabel>
          <CheckBoxLabel>
            <CheckBoxItem type="checkbox" name="snsType" value="insta" onClick={handleSnsTypeCheckbox} />
            인스타그램
          </CheckBoxLabel>
        </CheckBoxWrapper>
      )}
      {type === 'campaignType' && (
        <CheckBoxWrapper>
          <CheckBoxLabel htmlFor="">
            <CheckBoxItem type="checkbox" name="campaignType" onClick={handleCampaignTypeCheckbox} />
            참가형
          </CheckBoxLabel>
          <CheckBoxLabel htmlFor="">
            <CheckBoxItem type="checkbox" name="campaignType" onClick={handleCampaignTypeCheckbox} />
            배송형
          </CheckBoxLabel>
        </CheckBoxWrapper>
      )}
    </div>
  );
};

const CheckBoxWrapper = styled.div`
  width: 460px;
  height: 60px;
  display: flex;
  align-items: center;
`;

const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  color: #888888;
  margin-right: 60px;
`;

const CheckBoxItem = styled.input`
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
export default Checkbox;
