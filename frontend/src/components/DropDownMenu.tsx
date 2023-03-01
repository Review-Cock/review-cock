import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const DropDownMenu = () => {
  const deliveryCategory = ['생활', '서비스', '유아동', '디지털', '뷰티', '패션', '도서', '식품', '반려동물'];
  const regionCategory = ['맛집', '뷰티', '숙박', '문화', '배달', '테이크아웃', '기타'];

  return (
    <Container>
      <ItemWrapper>
        <ItemTitle to={'/category/배송'}>배송 전체</ItemTitle>
        {deliveryCategory.map((categoryName, i) => (
          <Item key={i} to={`/category/배송/${categoryName}`}>
            {categoryName}
          </Item>
        ))}
      </ItemWrapper>
      <ItemWrapper>
        <ItemTitle to={'/category/지역'}>지역 전체</ItemTitle>
        {regionCategory.map((categoryName, i) => (
          <Item key={i} to={`/category/지역/${categoryName}`}>
            {categoryName}
          </Item>
        ))}
      </ItemWrapper>
      <ItemWrapper>
        <ItemTitle to={'/profile'}>서비스</ItemTitle>
        <Item to={'/profile'}>마이페이지</Item>
      </ItemWrapper>
    </Container>
  );
};

const SelectedItem = css`
  &:focus {
    font-weight: 700;
  }
  &:hover {
    font-weight: 700;
  }
`;

const Container = styled.div`
  width: 25rem;
  min-width: 25rem;
  height: 20rem;
  background-color: #fff;
  box-shadow: 0 0.125rem 0.25rem 0 rgb(0 0 0 / 30%);
  border: 0.063rem solid #ddd;
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 4rem;
  left: 8.8rem;
`;

const ItemWrapper = styled.div`
  width: 100%;
  border-right: 0.063rem solid #ddd;
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  ${SelectedItem}
`;

const Item = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 0.7rem;
  margin: 0.5rem 1rem;
  cursor: pointer;
  ${SelectedItem}
`;

export default DropDownMenu;
