import {
  Container,
  TitleBox,
  CampainInfoBox,
  InputBox,
  ButtonBox,
  InputLabel,
  TextInput,
  DateInput,
  RedStar,
  Tilde,
  SubmitButton,
} from '@pages/Register/index.styles';

import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import useInput from '@hooks/useInput';

import MainPage from '@layouts/MainPage';
import HashTagBox from '@components/Register/HashTagBox';
import FindPostcode from '@components/Register/FindPostcode';
import ImageUpload from '@components/Register/ImageUpload';
import Checkbox from '@components/Register/Checkbox';
import { fetchRegisterCampaign } from '@utils/api/register';

interface ICampaignInfo {
  category: string;
  title: string;
  description: string;
  content: string;
  recruitNumber: string;
  address: string;
  type: string;
  channelType: string;
  siteUrl: string;
  registrationStartDate: string;
  registrationEndDate: string;
  presentationDate: string;
  experienceStartDate: string;
  experienceEndDate: string;
  keywords?: string[];
}

const Register = () => {
  const { mutate: registerCampaign } = useMutation(fetchRegisterCampaign, {
    onSuccess: () => {
      window.alert('새로운 캠페인이 등록되었습니다.');
      navigate('/');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const navigate = useNavigate();
  const [hashTag, onChangeHashTag, setHashTag] = useInput('');

  const [category, setCategory] = useState('');
  const [title, onChangeTitle] = useInput('');
  const [description, onChangeDescription] = useInput('');
  const [content, onChangeContent] = useInput('');
  const [recruitNumber, onChangeRecruitNumber] = useInput('');
  const [address, , setAddress] = useInput('');
  const [type, , setType] = useInput('');
  const [channelType, , setChannelType] = useInput('');
  const [siteUrl, onChangeSiteUrl] = useInput('');
  const [keywords, setKeywords] = useState([]);
  const [registrationStartDate, onChangeRegistrationStartDate] = useInput('');
  const [registrationEndDate, onChangeRegistrationEndDate] = useInput('');
  const [presentationDate, onChangePresentationDate] = useInput('');
  const [experienceStartDate, onChangeExperienceStartDate] = useInput('');
  const [experienceEndDate, onChangeExperienceEndDate] = useInput('');
  const [mainImage, setMainImage] = useState<FileList>();
  const [detailImage, setDetailImage] = useState<FileList>();

  const handleHashTagKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && hashTag !== '') {
      setKeywords((v) => [...v, hashTag]);
      setHashTag('');
    }
  };

  const handleSummit = () => {
    const CampaignInfo: ICampaignInfo = {
      category,
      title,
      description,
      content,
      recruitNumber,
      address,
      type,
      channelType,
      siteUrl,
      registrationStartDate,
      registrationEndDate,
      presentationDate,
      experienceStartDate,
      experienceEndDate,
    };

    for (const [key, value] of Object.entries(CampaignInfo)) {
      if (!value || value.trim() === '') {
        alert(`${key}가 입력되지 않았습니다.`);
        return;
      }
    }

    if (keywords.length === 0) {
      alert('keyword가 입력되지 않았습니다.');
      return;
    }

    if (Number(recruitNumber) <= 0) {
      alert('모집인원은 1보다 커야합니다.');
      return;
    }

    if (new Date(registrationStartDate) < new Date()) {
      alert('신청시작일은 오늘 이후여야 합니다.');
      return;
    }

    if (new Date(registrationEndDate) < new Date(registrationStartDate)) {
      alert('신청마감일은 신청시작일 이후여야 합니다.');
      return;
    }

    if (new Date(presentationDate) < new Date(registrationEndDate)) {
      alert('발표일은 신청마감일 이후여야 합니다.');
      return;
    }

    if (new Date(experienceStartDate) < new Date(presentationDate)) {
      alert('체험시작일은 발표일 이후여야 합니다.');
      return;
    }

    if (new Date(experienceEndDate) < new Date(experienceStartDate)) {
      alert('체험마감일은 체험시작일 이후여야 합니다.');
      return;
    }
    if (!mainImage) {
      alert('대표이미지는 필수입니다.');
      return;
    }

    if (!detailImage) {
      alert('상세이미지는 1장 이상이어야 합니다.');
      return;
    }
    CampaignInfo.keywords = keywords;

    const dataTransfer = new DataTransfer();

    Array.from(mainImage).forEach((file) => dataTransfer.items.add(file));
    Array.from(detailImage).forEach((file) => dataTransfer.items.add(file));

    const images = dataTransfer.files;

    const CampaignInfoFormData = new FormData();

    for (const image of Array.from(images)) {
      CampaignInfoFormData.append('images', image);
    }

    CampaignInfoFormData.append('request', JSON.stringify(CampaignInfo));

    registerCampaign(CampaignInfoFormData);
  };

  return (
    <MainPage>
      <Container>
        <TitleBox>
          <h1>캠페인 등록하기</h1>
          <p>캠페인 정보를 작성해주세요.</p>
        </TitleBox>

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
              value={content}
              onChange={onChangeContent}
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
              value={description}
              onChange={onChangeDescription}
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
              value={recruitNumber}
              onChange={onChangeRecruitNumber}
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
              value={siteUrl}
              onChange={onChangeSiteUrl}
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
                placeholder="Enter로 키워드 추가하기"
                value={hashTag}
                onChange={onChangeHashTag}
                onKeyPress={handleHashTagKeydown}
              />
              <HashTagBox tagList={keywords} />
            </div>
          </InputBox>
          <InputBox>
            <InputLabel htmlFor="">SNS 유형</InputLabel>
            <RedStar>*</RedStar>
            <Checkbox onChangeType={setChannelType} type="snsType" />
          </InputBox>
          <InputBox>
            <InputLabel htmlFor="">유형선택</InputLabel>
            <RedStar>*</RedStar>
            <Checkbox onChangeCategory={setCategory} onChangeType={setType} type="campaignType" />
          </InputBox>
        </CampainInfoBox>

        <CampainInfoBox>
          <InputBox>
            <InputLabel htmlFor="applyStart">신청기간</InputLabel>
            <RedStar>*</RedStar>
            <DateInput
              value={registrationStartDate}
              onChange={onChangeRegistrationStartDate}
              type="date"
              name="applyStart"
              id="applyStart"
              data-placeholder="YYYY-MM-DD"
              required
              aria-required="true"
            />
            <Tilde>~</Tilde>
            <DateInput
              value={registrationEndDate}
              onChange={onChangeRegistrationEndDate}
              name="applyEnd"
              id="applyEnd"
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
              value={presentationDate}
              onChange={onChangePresentationDate}
              type="date"
              name="announce"
              id="announce"
              data-placeholder="YYYY-MM-DD"
              required
              aria-required="true"
            />
          </InputBox>
          <InputBox>
            <InputLabel htmlFor="experienceStart">체험기간</InputLabel>
            <RedStar>*</RedStar>
            <DateInput
              value={experienceStartDate}
              onChange={onChangeExperienceStartDate}
              type="date"
              name="experienceStart"
              id="experienceStart"
              data-placeholder="YYYY-MM-DD"
              required
              aria-required="true"
            />
            <Tilde>~</Tilde>
            <DateInput
              value={experienceEndDate}
              onChange={onChangeExperienceEndDate}
              name="experienceEnd"
              id="experienceEnd"
              type="date"
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
          <SubmitButton onClick={handleSummit}>등록하기</SubmitButton>
          <SubmitButton
            onClick={() => {
              navigate('/');
            }}
          >
            작성취소
          </SubmitButton>
        </ButtonBox>
      </Container>
    </MainPage>
  );
};

export default Register;
