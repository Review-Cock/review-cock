import React, { useState } from 'react';

import { CheckBoxWrapper, CheckBoxLabel, CheckBoxItem, SelectTag } from '@components/Register/Checkbox/index.style';

interface CheckboxProps {
  type: string;
  onChangeType: (t: string) => void;
  onChangeCategory?: (t: string) => void;
}

const Checkbox = ({ type, onChangeType, onChangeCategory }: CheckboxProps) => {
  const deliveryCategory = [
    ['생활', 'LIFE'],
    ['서비스', 'SERVICE'],
    ['유아동', 'TODDLER'],
    ['디지털', 'DIGITAL'],
    ['뷰티', 'BEAUTY'],
    ['패션', 'FASHION'],
    ['도서', 'BOOK'],
    ['식품', 'FOOD'],
    ['반려동물', 'PET'],
  ];
  const regionCategory = [
    ['맛집', 'FAMOUS_RESTAURANT'],
    ['숙박', 'ACCOMMODATION'],
    ['문화', 'CULTURE'],
    ['배달', 'DELIVERY'],
    ['테이크아웃', 'TAKEOUT'],
    ['기타', 'ETC'],
  ];
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
            <CheckBoxItem type="checkbox" name="snsType" value="BLOG" onClick={handleSnsTypeCheckbox} />
            블로그
          </CheckBoxLabel>
          <CheckBoxLabel>
            <CheckBoxItem type="checkbox" name="snsType" value="INSTAGRAM" onClick={handleSnsTypeCheckbox} />
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
              {regionCategory.map(([name, value], i) => (
                <option key={i} value={value}>
                  {name}
                </option>
              ))}
            </SelectTag>
          )}
          {curCampaignType === 'delivery' && (
            <SelectTag onChange={handleCategory}>
              {deliveryCategory.map(([name, value], i) => (
                <option key={i} value={value}>
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

export default Checkbox;
