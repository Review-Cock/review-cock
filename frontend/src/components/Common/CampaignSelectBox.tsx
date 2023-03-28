import React, { useState } from 'react';
import styled from 'styled-components';

const CampaignSelectBox = () => {
  const [currentType, setCurrentType] = useState('');

  const deliveryCategory = ['생활', '서비스', '유아동', '디지털', '뷰티', '패션', '도서', '식품', '반려동물'];
  const regionCategory = ['맛집', '뷰티', '숙박', '문화', '배달', '테이크아웃', '기타'];

  const onChangeCurrentType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentType(e.target.value);
  };

  return (
    <Container>
      <select name="type" onChange={onChangeCurrentType}>
        <option value="">캠페인 종류</option>
        <option value="delivery">배송형</option>
        <option value="region">지역형</option>
      </select>
      {currentType === 'delivery' && (
        <select name="categoty">
          <option value="">카테고리</option>
          {deliveryCategory.map((categoryName, i) => (
            <option key={i} value={i}>
              {categoryName}
            </option>
          ))}
        </select>
      )}
      {currentType === 'region' && (
        <select name="categoty">
          <option value="">카테고리</option>
          {regionCategory.map((categoryName, i) => (
            <option key={i} value={i}>
              {categoryName}
            </option>
          ))}
        </select>
      )}
    </Container>
  );
};

const Container = styled.div`
  & > select {
    outline: none;
    margin: 0 0 0.5rem 0;
  }
`;

export default CampaignSelectBox;
