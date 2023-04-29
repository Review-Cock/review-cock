import React, { useState } from 'react';
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
  IconImage,
} from './index.styles';

import MainPage from '@layouts/MainPage';
import KakaoMap from '@components/Detail/KakaoMap';
import Calendar from '@components/Detail/Calendar';

import blogIcon from '@assets/blogIcon.png';
import instaIcon from '@assets/instaIcon.png';
import useInput from '@hooks/useInput';
import { useNavigate } from 'react-router-dom';

const data = {
  campaignDescription: '우리집으로 모여!!!!!!!!!!!',
  campaignType: '11',
  category: '맛집',
  channelType: 'BLOG',
  content: '얼마 이용권',
  expEndDateTime: '2023-04-30T23:59:59',
  expStartDateTime: '2023-04-01T00:00:00',
  imageUrls: [1, 2, 3],
  location: '전북 전주시 완산구 선너머로 40',
  name: '우리집',
  noticeDateTime: '2023-03-30T23:59:59',
  recruitNumber: 20,
  regStartDateTime: '2023-03-01T00:00:00',
  regEndDateTime: '2023-05-05T23:59:59',
  searchTags: ['태그1', '태그2', '태그3', '긴이이이잉이인태그'],
  siteUrl: 'www.abcd.com',
  totalNumber: 20, // 신청한 인원 수
};

const Detail = () => {
  const navigate = useNavigate();
  const [userSnsLink, onChangeUserSnsLink] = useInput('');
  const [isLogin, setIsLogin] = useState(false);

  const dates = {
    regStart: new Date(data.regStartDateTime),
    regEnd: new Date(data.regEndDateTime),
    notice: new Date(data.noticeDateTime),
    expStart: new Date(data.expStartDateTime),
    expEnd: new Date(data.expEndDateTime),
  };

  const calDay = Math.floor((dates.regEnd.getTime() - new Date().getTime()) / (24 * 60 * 60 * 1000));
  const remainDay =
    calDay > 0
      ? `신청기간이 ${calDay}일 남았습니다.`
      : calDay === 0
      ? '신청기간이 오늘까지입니다.'
      : '신청기간이 지났습니다.';

  const handleApplyBtn = () => {
    if (!userSnsLink || userSnsLink.trim() === '') {
      alert('SNS 주소를 입력해주세요!');
      return;
    }
    alert('신청성공!!');
  };

  const handleLoginBtn = () => {
    navigate('/login');
  };

  return (
    <MainPage>
      <Container>
        <LeftCotainer>
          <TitleWrapper>
            <TitleText>{data.name}</TitleText>
            <p>
              <DisabledText>{data.content}</DisabledText>
            </p>
            <TitleTextBox>
              <p>
                <NomalText>신청 </NomalText>
                <NumberText>{data.totalNumber}명</NumberText> <DisabledText>| 모집 {data.recruitNumber}명</DisabledText>
              </p>
              <p>
                <DisabledText>{data.campaignType === 'region' ? '지역형' : '배송형'}</DisabledText>
              </p>
              <div>
                {data.channelType === 'BLOG' ? (
                  <IconImage src={blogIcon} alt="블로그" />
                ) : (
                  <IconImage src={instaIcon} alt="인스타" />
                )}
              </div>
            </TitleTextBox>
          </TitleWrapper>
          <MainImage src={DefaultImage} alt="캠페인 이미지" />
          <SlideBtn>상세페이지 펼쳐보기</SlideBtn>

          {data.campaignType === 'region' ? (
            <CampaignTypeBox>
              <span>배송형 캠페인</span>
              <p>업체 배송한 상품에 대한 SNS리뷰를 작성하는 캠페인이에요.</p>
              <div>
                <p>1) 업체 배송 시 전달받은 송장번호를 확인한다.</p>
                <p>2) 송장번호를 통해 배송 현황을 파악한다.</p>
                <p>3) 배송받은 상품을 체험하고 리뷰를 쓴다.</p>
              </div>
            </CampaignTypeBox>
          ) : (
            <CampaignTypeBox>
              <span>지역형 캠페인</span>
              <p>업체를 직접 방문하고 상품에 대한 SNS리뷰를 작성하는 캠페인이에요.</p>
              <div>
                <p>1) 방문 2~3일전 예약문의를 진행한다.</p>
                <p>2) 예약한 시간에 방문한다.</p>
                <p>3) 상품을 체험하고 리뷰를 쓴다.</p>
              </div>
            </CampaignTypeBox>
          )}

          <CampaignInfoBox>
            <span>신청현황</span>
            <CampaignInfoBoxItem>
              <div>
                <span>모집</span>
                <span>
                  <NomalText>총</NomalText>
                  <NumberText>{data.recruitNumber}</NumberText>
                  <DisabledText> 명</DisabledText>
                </span>
              </div>

              <div>
                <span>신청</span>
                <span>
                  <NomalText>총</NomalText>
                  <NumberText>{data.totalNumber}</NumberText>
                  <DisabledText> 명</DisabledText>
                </span>
              </div>
            </CampaignInfoBoxItem>
          </CampaignInfoBox>
          <CampaignInfoBox>
            <span>캠페인 소개</span>
            <CampaignInfoBoxItem>
              <p>{data.campaignDescription}</p>
            </CampaignInfoBoxItem>
          </CampaignInfoBox>
          <CampaignInfoBox>
            <span>필수 키워드</span>
            <CampaignInfoBoxItem>
              <TagBox>
                {data.searchTags.map((tag, index) => (
                  <TagItem key={index}>{tag}</TagItem>
                ))}
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
                <NumberText>{data.siteUrl}</NumberText>
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
            <span>{remainDay}</span>
          </RemainTime>
          <TimeInfoWrapper>
            <div>
              <span>신청기간 </span>
              <p>
                {dates.regStart.toLocaleDateString()} ~ {dates.regEnd.toLocaleDateString()}
              </p>
            </div>
            <div>
              <span>발표일</span>
              <p> {dates.notice.toLocaleDateString()}</p>
            </div>
            <div>
              <span>체험기간</span>
              {dates.expStart.toLocaleDateString()} ~ {dates.expEnd.toLocaleDateString()}
            </div>
          </TimeInfoWrapper>
          <Calendar dates={dates} />
          <SubmitBox>
            {calDay > 0 && isLogin && (
              <div>
                <SnsLinkText htmlFor="snsLink">나의 SNS 링크</SnsLinkText>
                <input value={userSnsLink} onChange={onChangeUserSnsLink} type="text" id="snsLink" />
                <button onClick={handleApplyBtn}>배송체험 신청하기</button>
              </div>
            )}
            {calDay > 0 && !isLogin && (
              <div>
                <button onClick={handleLoginBtn}>로그인하고 신청하기</button>
              </div>
            )}
            <KakaoMap campaignAddress={data.location} />
            <p>상세주소</p>
            <p>{data.location}</p>
          </SubmitBox>
        </RightCotainer>
      </Container>
    </MainPage>
  );
};

export default Detail;
