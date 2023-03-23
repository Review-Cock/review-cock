import React from 'react';
import styled, { css } from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <TopInfoContainer>
        <p>
          <span>개인정보처리방침</span>|<span>이용약관</span>|<span>운영정책</span>
        </p>
      </TopInfoContainer>
      <BottomInfoContainer>
        <LogoBox>로고</LogoBox>
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

const fontCss = css`
  font-style: normal;
  font-variant: normal;
  font-weight: medium;
  font-size: 16px;
  line-height: 19px;
  font-family: Pretendard;
`;

const Container = styled.div`
  height: 300px;
  width: 100%;
  background: #333333 0% 0% no-repeat padding-box;
  opacity: 1;
`;

const TopInfoContainer = styled.div`
  height: 40px;
  padding: 10px;
  border-bottom: 1px solid #707070;
  opacity: 1;
  display: flex;
  align-items: center;
  & p {
    text-align: left;
    ${fontCss}
    letter-spacing: 0px;
    color: #999999;
    opacity: 1;
    span {
      margin-right: 30px;
      margin-left: 30px;
    }
  }
`;

const BottomInfoContainer = styled.div`
  width: 100%;
  height: 220px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
`;

const LogoBox = styled.div`
  margin-left: 30px;
  margin-right: 50px;
  width: 200px;
  height: 50px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainInfoBox = styled.div`
  & > p {
    text-align: left;
    ${fontCss}
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0px;
    color: #555555;
    opacity: 1;
  }
`;

const TextBox = styled.div`
  display: flex;
  & > p {
    margin-bottom: 10px;
    margin-right: 50px;
    letter-spacing: 0px;
    color: #888888;
    opacity: 1;
  }
  & span {
    text-align: left;
    ${fontCss}
    letter-spacing: 0px;
    color: #cccccc;
    opacity: 1;
    margin-right: 10px;
  }
`;

const CommunicationInfoBox = styled.div`
  .call-number {
    text-align: left;
    ${fontCss}
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  }
  & > p {
    margin-bottom: 10px;
    margin-right: 50px;
    text-align: left;
    ${fontCss}
    letter-spacing: 0px;
    color: #888888;
    opacity: 1;
  }
`;

export default Footer;
