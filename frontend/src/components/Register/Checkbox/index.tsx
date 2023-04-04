import React, { useState } from 'react';
import styled from 'styled-components';
import checkIcon from '@assets/checkIcon.png';
import checkedIcon from '@assets/checkedIcon.png';

interface CheckboxProps {
  type: string;
  onChangeType: (t: string) => void;
  onChangeCategory?: (t: string) => void;
}

const Checkbox = ({ type, onChangeType, onChangeCategory }: CheckboxProps) => {
  const deliveryCategory = ['생활', '서비스', '유아동', '디지털', '뷰티', '패션', '도서', '식품', '반려동물'];
  const regionCategory = ['맛집', '뷰티', '숙박', '문화', '배달', '테이크아웃', '기타'];
  const [curCampaignType, setCurCampaignType] = useState('');

  const handleSnsTypeCheckbox = (e: React.MouseEvent<HTMLInputElement>) => {
    const currentCheck = e.target;
    const allCheckbox = document.getElementsByName('snsType') as NodeListOf<HTMLInputElement>;
    for (let i = 0; i < allCheckbox.length; i++) {
      if (allCheckbox[i] !== currentCheck) {
        allCheckbox[i].checked = false;
      } else {
        allCheckbox[i].checked = true;
        onChangeType(allCheckbox[i].value);
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
        onChangeType(allCheckbox[i].value);
        setCurCampaignType(allCheckbox[i].value);
      }
    }
  };

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeCategory(e.target.value);
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
            <CheckBoxItem type="checkbox" name="campaignType" value="region" onClick={handleCampaignTypeCheckbox} />
            지역형
          </CheckBoxLabel>
          <CheckBoxLabel htmlFor="">
            <CheckBoxItem type="checkbox" name="campaignType" value="delivery" onClick={handleCampaignTypeCheckbox} />
            배송형
          </CheckBoxLabel>
          {curCampaignType === 'region' && (
            <SelectTag onChange={handleCategory}>
              {regionCategory.map((name, i) => (
                <option key={i} value={name}>
                  {name}
                </option>
              ))}
            </SelectTag>
          )}
          {curCampaignType === 'delivery' && (
            <SelectTag onChange={handleCategory}>
              {deliveryCategory.map((name, i) => (
                <option key={i} value={name}>
                  {name}
                </option>
              ))}
            </SelectTag>
          )}
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

const SelectTag = styled.select`
  outline: none;
  border: 1px solid #cccccc;
  padding: 5px;
`;
export default Checkbox;
