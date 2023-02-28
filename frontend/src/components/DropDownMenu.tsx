import React from 'react';
import styled, { css } from 'styled-components';

const DropDownMenu = () => {
  return (
    <Container>
      <ItemWrapper>
        <ItemTitle>배송 전체</ItemTitle>
        <Item>생활</Item>
        <Item>서비스</Item>
        <Item>유아동</Item>
        <Item>디지털</Item>
        <Item>뷰티</Item>
        <Item>패션</Item>
        <Item>도서</Item>
        <Item>식품</Item>
        <Item>반려동물</Item>
      </ItemWrapper>
      <ItemWrapper>
        <ItemTitle>지역 전체</ItemTitle>
        <Item>맛집</Item>
        <Item>뷰티</Item>
        <Item>숙박</Item>
        <Item>문화</Item>
        <Item>배달</Item>
        <Item>테이크아웃</Item>
        <Item>기타</Item>
      </ItemWrapper>
      <ItemWrapper>
        <ItemTitle>서비스</ItemTitle>
        <Item>마이페이지</Item>
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
`;

const ItemTitle = styled.div`
  margin: 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  ${SelectedItem}
`;

const Item = styled.div`
  font-size: 0.7rem;
  margin: 1rem;
  cursor: pointer;
  ${SelectedItem}
`;

export default DropDownMenu;
