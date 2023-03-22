import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface DropDownMenuProps {
  type: string;
  show: boolean;
}

const DropDownMenu = ({ type, show }: DropDownMenuProps) => {
  const deliveryCategory = ['생활', '서비스', '유아동', '디지털', '뷰티', '패션', '도서', '식품', '반려동물'];
  const regionCategory = ['맛집', '뷰티', '숙박', '문화', '배달', '테이크아웃', '기타'];

  const Category = type === 'delivery' ? deliveryCategory : regionCategory;

  if (!show) {
    return null;
  }

  return (
    <Container>
      <ItemWrapper>
        {Category.map((categoryName, i) => (
          <LinkItem key={i} to={`/category/배송/${categoryName}`}>
            {categoryName}
          </LinkItem>
        ))}
      </ItemWrapper>
    </Container>
  );
};

const SelectedItem = css`
  &:focus {
    color: #e76969;
  }
  &:hover {
    color: #e76969;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 200px;
  height: 200px;
  background-color: #fff;
  box-shadow: 0 0.125rem 0.25rem 0 rgb(0 0 0 / 30%);
  border: 0.063rem solid #ddd;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
`;

const LinkItem = styled(Link)`
  width: 40%;
  margin-left: 15px;
  text-align: left;
  text-decoration: none;
  font: normal normal normal 16px/40px Pretendard;
  letter-spacing: 0px;
  color: #555555;
  cursor: pointer;
  ${SelectedItem}
`;

export default DropDownMenu;
