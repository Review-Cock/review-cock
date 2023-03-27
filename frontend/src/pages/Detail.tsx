import React from 'react';
import styled, { css } from 'styled-components';
import DefaultImage from '../assets/defaultImage.png';

import MainPage from '../Layouts/MainPage';
import KakaoMap from '../components/Detail/KakaoMap';
import Calendar from '../components/Detail/Calendar';

const Detail = () => {
  return (
    <MainPage>
      <Container>
        <LeftCotainer>
          <TitleWrapper>
            <TitleText>타이틀이 들어갑니다.</TitleText>
            <p>
              <DisabledText>4만원 이용권</DisabledText>
            </p>
            <TitleTextBox>
              <p>
                <NomalText>신청</NomalText>
                <NumberText>13명</NumberText> <DisabledText>| 모집 20명</DisabledText>
              </p>
              <p>
                <DisabledText>참가형</DisabledText>
              </p>
              <div>인스타로고</div>
              <div>마감임박</div>
            </TitleTextBox>
          </TitleWrapper>
          <MainImage src={DefaultImage} alt="캠페인 이미지" />
          <SlideBtn>상세페이지 펼쳐보기</SlideBtn>
          <CampaignTypeBox>
            <span>배송형 캠페인</span>
            <p>업체 배송한 상품에 대한 SNS리뷰를 작성하는 캠페인이에요.</p>
            <div>
              <p>1) 업체 배송 시 전달받은 송장번호를 확인한다.</p>
              <p>2) 송장번호를 통해 배송 현황을 파악한다.</p>
              <p>3) 배송받은 상품을 체험하고 리뷰를 쓴다.</p>
            </div>
          </CampaignTypeBox>
          <CampaignInfoBox>
            <span>신청현황</span>
            <CampaignInfoBoxItem>
              <div>
                <span>모집</span>
                <span>
                  <NomalText>총</NomalText>
                  <NumberText>24</NumberText>
                  <DisabledText> 명</DisabledText>
                </span>
              </div>

              <div>
                <span>신청</span>
                <span>
                  <NomalText>총</NomalText>
                  <NumberText>10</NumberText>
                  <DisabledText> 명</DisabledText>
                </span>
              </div>
            </CampaignInfoBoxItem>
          </CampaignInfoBox>
          <CampaignInfoBox>
            <span>리뷰어 제공</span>
            <CampaignInfoBoxItem>
              <p>제품설명</p>
            </CampaignInfoBoxItem>
          </CampaignInfoBox>
          <CampaignInfoBox>
            <span>필수 키워드</span>
            <CampaignInfoBoxItem>
              <TagBox>
                <TagItem>#긴태그으으으으으으으으</TagItem>
                <TagItem>#짧태</TagItem>
                <TagItem>#짧태</TagItem>
              </TagBox>
              <TagDescriptionBox>
                <p>위의 키워드 중 제목, 본문, #태그 에 아래와 같이 키워드를 기재해주세요.</p>
                <p>
                  <NomalText>제목: 상품명 키워드(필수) + 이외 키워드 택 1개</NomalText>
                </p>
                <p>
                  <NomalText>본문: 제목에서 선택한 키워드 1개를 본문에 2번 이상 언급</NomalText>
                </p>
                <p>
                  <NomalText>#해시태그: 제시된 키워드 모두 기재해주세요.</NomalText>
                </p>
                <p>키워드가 지켜지지 않으면 수정요청이 있을 수 있어요.</p>
                <p>인스타그램 리뷰는 #협찬 #리뷰콕 #브랜드 #상품명 꼭 넣어주세요.</p>
              </TagDescriptionBox>
            </CampaignInfoBoxItem>
          </CampaignInfoBox>
          <CampaignInfoBox>
            <span>리뷰어 미션</span>
            <CampaignInfoBoxItem>
              <p>리뷰작성시 하단링크 첨부 부탁드립니다.</p>
              <TagBox>
                <TagItem>구매링크</TagItem>
              </TagBox>
              <p>
                <NumberText>https://www.sadfposdafjsdf.com</NumberText>
              </p>
              <TagDescriptionBox>
                <p>
                  <NomalText>캠페인 홍보로 체험하는 만큼 책임감 가지고 성의 있는 리뷰 부탁드립니다.</NomalText>
                </p>
                <p>
                  <NomalText>블로그 작성의 경우 사진 15장 이상 영상 1개 필수 첨부 부탁드립니다.</NomalText>
                </p>
                <p>
                  <NomalText>
                    인스타 작성의 경우 사진 8장 이상 (실사용 이미지 포함) 영상 1개 필수 첨부 부탁드립니다.
                  </NomalText>
                </p>
              </TagDescriptionBox>
            </CampaignInfoBoxItem>
          </CampaignInfoBox>
        </LeftCotainer>
        <RightCotainer>
          <RemainTime>
            <span>신청기간이 1일 남았어요.</span>
          </RemainTime>
          <TimeInfoWrapper>
            <div>
              <span>신청기간 </span>
              <p>2023.12.31 ~ 2023. 12. 31</p>
            </div>
            <div>
              <span>발표일</span>
              <p> 2023.12.31</p>
            </div>
            <div>
              <span>체험기간</span>
              <p> 2023.12.31 ~ 2023. 12. 31</p>
            </div>
          </TimeInfoWrapper>
          <Calendar />
          <SubmitBox>
            <SnsLinkText htmlFor="snsLink">나의 SNS 링크</SnsLinkText>
            <input type="text" id="snsLink" />
            <button>배송체험 신청하기</button>
            <KakaoMap />
          </SubmitBox>
        </RightCotainer>
      </Container>
    </MainPage>
  );
};

const FontCss = css`
  text-align: left;
  font-style: normal;
  font-variant: normal;
  font-weight: medium;
`;

const NumberText = styled.span`
  ${FontCss}
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0px;
  color: #e76969;
  opacity: 1;
`;

const NomalText = styled.span`
  ${FontCss}
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0px;
  color: #888888;
`;

const DisabledText = styled.span`
  ${FontCss}
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0px;
  color: #888888;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #eaeaea;
  margin: 30px;
`;
const LeftCotainer = styled.div`
  min-width: 600px;
  max-width: 900px;
  width: 70%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #eaeaea;
  margin-left: 30px;
  padding-right: 40px;
`;
const RightCotainer = styled.div`
  min-width: 350px;
  max-width: 400px;
  width: 30%;
  margin-left: 40px;
  & > * {
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 30px;
  }
`;

// LeftCotainer
const TitleWrapper = styled.div`
  margin-bottom: 44px;
  & > p {
    margin-bottom: 34px;
  }
`;

const TitleTextBox = styled.div`
  display: flex;
  justify-content: flex-start;
  & > p,
  div {
    margin-right: 40px;
  }
`;

const TitleText = styled.span`
  ${FontCss}
  font-size: 28px;
  line-height: 38px;
  font-family: Pretendard;
  letter-spacing: 0px;
  color: #222222;
  opacity: 1;
  margin-bottom: 20px;
  display: block;
`;

const MainImage = styled.img`
  border-radius: 20px;
  margin-bottom: 60px;
`;

const SlideBtn = styled.button`
  ${FontCss}
  color: #888888;
  text-align: center;
  font-size: 16px;
  line-height: 26px;
  height: 72px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #cccccc;
  border-radius: 10px;
  opacity: 1;
  margin-bottom: 40px;
`;

const CampaignTypeBox = styled.div`
  ${FontCss}
  height: 200px;
  background: #fef3f3 0% 0% no-repeat padding-box;
  border: 1px solid #e76969;
  border-radius: 10px;
  opacity: 1;
  padding: 20px;
  margin-bottom: 20px;
  & > span {
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 20px;
    display: block;
  }
  & p {
    margin-bottom: 10px;
    color: #555555;
  }
  & > p {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 26px;
    color: #222222;
  }
`;

const CampaignInfoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #eaeaea;
  padding: 30px 0;
  & > span {
    min-width: 25%;
    ${FontCss}
    font-size: 24px;
    line-height: 26px;
    font-family: Pretendard;
    letter-spacing: 0px;
    color: #222222;
    opacity: 1;
    display: block;
  }
  & p {
    margin-bottom: 20px;
  }
`;

const CampaignInfoBoxItem = styled.div`
  display: flex;
  flex-direction: column;
  & > div > span {
    margin-bottom: 20px;
    margin-right: 38px;
    font-size: 18px;
    line-height: 26px;
    span:first-child {
      margin-right: 15px;
    }
  }
  & > div {
    margin-bottom: 20px;
  }
`;

const TagBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const TagItem = styled.div`
  ${FontCss}
  font-size: 16px;
  line-height: 26px;
  padding: 0 10px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  background: #e76969 0% 0% no-repeat padding-box;
  border-radius: 23px;
  opacity: 1;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;

const TagDescriptionBox = styled.div`
  width: 600px;
  background: #f5f5f5 0% 0% no-repeat padding-box;
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  opacity: 1;
  margin-top: 10px;
  & > p {
    margin-bottom: 12px;
  }
`;

// RigthCotainer

const SubTitleCss = css`
  display: block;
  width: 30%;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0px;
  color: #222222;
  opacity: 1;
`;

const RemainTime = styled.p`
  margin-top: 100px;
  margin-bottom: 18px;
  & > span {
    ${FontCss}
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0px;
    color: #222222;
    opacity: 1;
  }
`;

const TimeInfoWrapper = styled.div`
  ${FontCss}
  & > div {
    display: flex;
    margin-bottom: 21px;
  }
  & > div > span {
    ${SubTitleCss}
  }
  & > div > p {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0px;
    color: #555555;
    opacity: 1;
  }
`;

const SubmitBox = styled.div`
  ${FontCss}
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 40px;
  }
  & > input {
    height: 41px;
    border: 3px solid #f58e8e;
    border-radius: 5px;
    outline: none;
  }
  & > button {
    height: 64px;
    background: #f58e8e 0% 0% no-repeat padding-box;
    border-radius: 10px;
    border: none;
    opacity: 1;
    text-align: center;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  }
`;

const SnsLinkText = styled.label`
  ${SubTitleCss}
`;

export default Detail;
