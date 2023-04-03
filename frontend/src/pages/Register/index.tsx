import React, { useState } from 'react';
import styled from 'styled-components';

import useInput from '@hooks/useInput';

import MainPage from '@layouts/MainPage';
import HashTagBox from '@components/Register/HashTagBox';
import FindPostcode from '@components/Register/FindPostcode';
import ImageUpload from '@components/Register/ImageUpload';
import Checkbox from '@components/Register/Checkbox';

const Register = () => {
  const [businessNumber, onChangeBusinessNumber] = useInput('');
  const [title, onChangeTitle] = useInput('');
  const [service, onChangeService] = useInput('');
  const [detail, onChangeDetail] = useInput('');
  const [headCount, onChangeHeadCount] = useInput('');
  const [mission, onChangeMission] = useInput('');
  const [hashTag, onChangeHashTag, setHashTag] = useInput('');
  const [applyStart, onChangeApplyStart] = useInput('');
  const [applyEnd, onChangeApplyEnd] = useInput('');
  const [experienceStart, onChangeExperienceStart] = useInput('');
  const [experienceEnd, onChangeExperienceEnd] = useInput('');
  const [announce, onChangeAnnounce] = useInput('');
  const [snsType, , setSnsType] = useInput('');
  const [campaignType, , setCampaignType] = useInput('');
  const [address, , setAddress] = useInput('');
  const [hashTagList, setHashTagList] = useState([]);
  const [mainImage, setMainImage] = useState([]);
  const [detailImage, setDetailImage] = useState([]);

  const handleBusinessNumberBtn = () => {
    window.alert('시연을 위해 인증코드를 비활성화 해놓았습니다.\n그냥 진행하시면 됩니다.');
  };

  const handelHashTagKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && hashTag !== '') {
      setHashTagList((v) => [...v, hashTag]);
      setHashTag('');
    }
  };

  return (
    <MainPage>
      <Container>
        <TitleBox>
          <h1>캠페인 등록하기</h1>
          <p>사업자등록번호 인증 후 양식을 작성해 주세요.</p>
        </TitleBox>

        <CampainInfoBox>
          <InputBox>
            <InputLabel htmlFor="businessNumber">사업자등록번호 인증하기</InputLabel>
            <RedStar>*</RedStar>

            <BusinessNumberInput
              value={businessNumber}
              onChange={onChangeBusinessNumber}
              type="text"
              name="businessNumber"
              id="businessNumber"
              placeholder="1234-5678 을 입력해주세요."
            />
            <Button onClick={handleBusinessNumberBtn}>인증하기</Button>
          </InputBox>
        </CampainInfoBox>

        <CampainInfoBox>
          <InputBox>
            <InputLabel htmlFor="title">제목</InputLabel>
            <RedStar>*</RedStar>
            <TextInput
              value={title}
              onChange={onChangeTitle}
              type="text"
              name="title"
              id="title"
              placeholder="제목을 입력해 주세요."
            />
          </InputBox>
          <InputBox>
            <InputLabel htmlFor="service">제공 상품</InputLabel>
            <RedStar>*</RedStar>
            <TextInput
              value={service}
              onChange={onChangeService}
              type="text"
              name="title"
              id="title"
              placeholder="리뷰어에게 제공하는 상품을 입력해주세요."
            />
          </InputBox>
          <InputBox>
            <InputLabel htmlFor="detail">소개</InputLabel>
            <RedStar></RedStar>
            <TextInput
              value={detail}
              onChange={onChangeDetail}
              type="text"
              name="detail"
              id="detail"
              placeholder="캠페인 소개"
            />
          </InputBox>
          <InputBox>
            <InputLabel htmlFor="headCount">총 모집 인원</InputLabel>
            <RedStar>*</RedStar>
            <TextInput
              value={headCount}
              onChange={onChangeHeadCount}
              type="number"
              id="headCount"
              name="headCount"
              placeholder="N명"
            />
          </InputBox>
          <InputBox>
            <InputLabel htmlFor="mission">리뷰어 미션</InputLabel>
            <RedStar>*</RedStar>
            <TextInput
              value={mission}
              onChange={onChangeMission}
              type="text"
              id="mission"
              name="mission"
              placeholder="https://"
            />
          </InputBox>
          <InputBox>
            <InputLabel htmlFor="keyword">필수키워드</InputLabel>
            <RedStar>*</RedStar>
            <div>
              <TextInput
                type="text"
                name="keyword"
                id="keyword"
                placeholder="키워드를 입력 후 엔터를 추가해주세요."
                value={hashTag}
                onChange={onChangeHashTag}
                onKeyPress={handelHashTagKeydown}
              />
              <HashTagBox tagList={hashTagList} />
            </div>
          </InputBox>
          <InputBox>
            <InputLabel htmlFor="">SNS 유형</InputLabel>
            <RedStar>*</RedStar>
            <Checkbox onChangeType={setSnsType} type="snsType" />
          </InputBox>
          <InputBox>
            <InputLabel htmlFor="">유형선택</InputLabel>
            <RedStar>*</RedStar>
            <Checkbox onChangeType={setCampaignType} type="campaignType" />
          </InputBox>
        </CampainInfoBox>

        <CampainInfoBox>
          <InputBox>
            <InputLabel htmlFor="applyStart">신청기간</InputLabel>
            <RedStar>*</RedStar>
            <DateInput
              value={applyStart}
              onChange={onChangeApplyStart}
              type="date"
              name="applyStart"
              id="applyStart"
              data-placeholder="YYYY-MM-DD"
              required
              aria-required="true"
            />
            <Tilde>~</Tilde>
            <DateInput
              value={applyEnd}
              onChange={onChangeApplyEnd}
              name="applyEnd"
              id="applyEnd"
              type="date"
              data-placeholder="YYYY-MM-DD"
              required
              aria-required="true"
            />
          </InputBox>
          <InputBox>
            <InputLabel htmlFor="experienceStart">체험기간</InputLabel>
            <RedStar>*</RedStar>
            <DateInput
              value={experienceStart}
              onChange={onChangeExperienceStart}
              type="date"
              name="experienceStart"
              id="experienceStart"
              data-placeholder="YYYY-MM-DD"
              required
              aria-required="true"
            />
            <Tilde>~</Tilde>
            <DateInput
              value={experienceEnd}
              onChange={onChangeExperienceEnd}
              name="experienceEnd"
              id="experienceEnd"
              type="date"
              data-placeholder="YYYY-MM-DD"
              required
              aria-required="true"
            />
          </InputBox>
          <InputBox>
            <InputLabel htmlFor="announce">발표일</InputLabel>
            <RedStar>*</RedStar>
            <DateInput
              value={announce}
              onChange={onChangeAnnounce}
              type="date"
              name="announce"
              id="announce"
              data-placeholder="YYYY-MM-DD"
              required
              aria-required="true"
            />
          </InputBox>
        </CampainInfoBox>

        <CampainInfoBox>
          <InputBox>
            <InputLabel htmlFor="adress">주소</InputLabel>
            <RedStar>*</RedStar>
            <FindPostcode onChangeAddress={setAddress} />
          </InputBox>

          <InputBox>
            <InputLabel htmlFor="">대표이미지</InputLabel>
            <RedStar>*</RedStar>
            <ImageUpload type="single" setImage={setMainImage} />
          </InputBox>

          <InputBox>
            <InputLabel htmlFor="">상세이미지</InputLabel>
            <RedStar>*</RedStar>
            <ImageUpload type="multiple" setImage={setDetailImage} />
          </InputBox>
        </CampainInfoBox>
        <ButtonBox>
          <SubmitButton>등록하기</SubmitButton>
          <SubmitButton>작성취소</SubmitButton>
        </ButtonBox>
      </Container>
    </MainPage>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.div`
  min-width: 950px;
  width: 100%;
  border-bottom: 2px solid #707070;
  opacity: 1;
  & > h1 {
    text-align: center;
    font: normal normal bold 36px/40px Pretendard;
    letter-spacing: 0px;
    color: #222222;
    opacity: 1;
    margin-top: 60px;
    margin-bottom: 21px;
  }
  & > p {
    text-align: center;
    font: normal normal normal 16px/28px Pretendard;
    letter-spacing: 0px;
    color: #e38787;
    opacity: 1;
    margin-bottom: 60px;
  }
`;

const CampainInfoBox = styled.div`
  width: 100%;
  padding: 50px 0 20px 0;
  border-bottom: 1px solid #cccccc;
  opacity: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const InputBox = styled.div`
  min-width: 950px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

const ButtonBox = styled.div`
  min-width: 950px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  & > button {
    margin-right: 20px;
    :first-child {
      background-color: #f58e8e;
    }
  }
`;

const BusinessNumberInput = styled.input`
  width: 310px;
  height: 48px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #cccccc;
  border-radius: 5px;
  opacity: 1;
  outline: none;
  text-align: left;
  font: normal normal normal 16px/40px Pretendard;
  margin-right: 20px;
  letter-spacing: 0px;
  padding-left: 20px;
  opacity: 1;
  ::placeholder {
    color: #cccccc;
  }
`;

const InputLabel = styled.label`
  display: flex;
  justify-content: flex-end;
  width: 30%;
  font: normal normal medium 20px/28px Pretendard;
  letter-spacing: 0px;
  color: #404040;
  opacity: 1;
  margin-right: 5px;
  display: flex;
  cursor: pointer;
`;

const TextInput = styled.input`
  width: 30%;
  width: 460px;
  height: 48px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #cccccc;
  border-radius: 5px;
  opacity: 1;
  outline: none;
  text-align: left;
  font: normal normal normal 16px/40px Pretendard;
  letter-spacing: 0px;
  padding-left: 20px;
  ::placeholder {
    color: #cccccc;
  }
  opacity: 1;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const DateInput = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #cccccc;
  border-radius: 5px;
  opacity: 1;
  outline: none;
  text-align: center;
  width: 30%;
  width: 215px;
  height: 48px;
  margin-right: 20px;

  ::before {
    content: attr(data-placeholder);
    color: #cccccc;
    width: 100%;
  }
  :focus::before,
  :valid::before {
    display: none;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const RedStar = styled.div`
  width: 1%;
  display: flex;
  height: 100%;
  align-items: center;
  padding: 5px 0 0 0;
  font: normal normal medium 20px/26px Pretendard;
  letter-spacing: 0px;
  color: #e76969;
  opacity: 1;
  margin-right: 80px;
`;

const Tilde = styled.div`
  width: 10px;
  height: 10px;
  margin-right: 19px;
`;

const Button = styled.button`
  width: 130px;
  height: 48px;
  background: #555555 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  text-align: center;
  font: normal normal medium 18px/40px Pretendard;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  cursor: pointer;
`;

const SubmitButton = styled(Button)`
  width: 240px;
  height: 72px;
  background: #555555 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  border: none;
`;

export default Register;
