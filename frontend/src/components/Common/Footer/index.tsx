import React from 'react';
import {
  Container,
  TopInfoContainer,
  BottomInfoContainer,
  MainInfoBox,
  TextBox,
  CommunicationInfoBox,
} from './index.style';

import footerLogo from '@assets/footerLogo.png';

const Footer = () => {
  return (
    <Container>
      <TopInfoContainer>
        <p>
          <span>개인정보처리방침</span>|<span>이용약관</span>|<span>운영정책</span>
        </p>
      </TopInfoContainer>
      <BottomInfoContainer>
        <img src={footerLogo} alt="하단로고" />
        <MainInfoBox>
          <TextBox>
            <p>
              <span>대표이사</span>박보검
            </p>
            <p>
              <span>개인정보 보호 최고책임자</span>홍길동
            </p>
          </TextBox>

          <TextBox>
            <p>
              <span>사업자등록번호</span>123-45-67890
            </p>
            <p>
              <span>통신판매업신고번호</span>제2023-서울강남-01234호
            </p>
          </TextBox>

          <TextBox>
            <p>
              <span>주소</span>서울특별시 강남구 논현로 99길23(논현동)
            </p>
          </TextBox>

          <TextBox>
            <p>
              <span>메일</span>업체명@gmail.com
            </p>
            <p>
              <span>전화</span>02)1234-5678
            </p>
            <p>
              <span>팩스</span>02)1234-5678
            </p>
          </TextBox>

          <p>@업체명.All Rights Reserved</p>
        </MainInfoBox>
        <CommunicationInfoBox>
          <p>문의번호</p>
          <p className="call-number">1234-5678</p>
          <p>월-금: 9:00 ~ 18:00</p>
          <p>주말,공휴일 휴무</p>
        </CommunicationInfoBox>
      </BottomInfoContainer>
    </Container>
  );
};

export default Footer;
