import React from 'react';
import DefaultImage from '@assets/defaultImage.png';

import {
  NumberText,
  NomalText,
  DisabledText,
  Container,
  LeftCotainer,
  RightCotainer,
  TitleWrapper,
  TitleTextBox,
  TitleText,
  MainImage,
  SlideBtn,
  CampaignTypeBox,
  CampaignInfoBox,
  CampaignInfoBoxItem,
  TagBox,
  TagItem,
  TagDescriptionBox,
  RemainTime,
  TimeInfoWrapper,
  SubmitBox,
  SnsLinkText,
} from './index.styles';

import MainPage from '@layouts/MainPage';
import KakaoMap from '@components/Detail/KakaoMap';
import Calendar from '@components/Detail/Calendar';

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
            <KakaoMap campaignAddress="경기 성남시 분당구 정자일로 95" />
          </SubmitBox>
        </RightCotainer>
      </Container>
    </MainPage>
  );
};

export default Detail;
