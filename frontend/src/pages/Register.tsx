import React from 'react';
import styled from 'styled-components';
import checkIcon from '../assets/checkIcon.png';
import checkedIcon from '../assets/checkedIcon.png';

import MainPage from '../Layouts/MainPage';

const Register = () => {
  return (
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
            type="text"
            name="businessNumber"
            id="businessNumber"
            placeholder="1234-5678 을 입력해주세요."
          />
          <Button>인증하기</Button>
        </InputBox>
      </CampainInfoBox>

      <CampainInfoBox>
        <InputBox>
          <InputLabel htmlFor="title">제목</InputLabel>
          <RedStar>*</RedStar>
          <TextInput type="text" name="title" id="title" placeholder="제목을 입력해 주세요." />
        </InputBox>
        <InputBox>
          <InputLabel htmlFor="detail">소개</InputLabel>
          <RedStar></RedStar>
          <TextInput type="text" name="detail" id="detail" placeholder="1234-5678 을 입력해주세요." />
        </InputBox>
        <InputBox>
          <InputLabel htmlFor="headCount">총 모집 인원</InputLabel>
          <RedStar>*</RedStar>
          <TextInput type="number" id="headCount" name="headCount" placeholder="N명" />
        </InputBox>
        <InputBox>
          <InputLabel htmlFor="snsLink">SNS링크</InputLabel>
          <RedStar>*</RedStar>
          <TextInput type="text" id="snsLink" name="snsLink" placeholder="https://" />
        </InputBox>
        <InputBox>
          <InputLabel htmlFor="">유형선택</InputLabel>
          <RedStar>*</RedStar>
          <CheckBoxWrapper>
            <CheckBoxLabel htmlFor="">
              <CheckBox type="checkbox" />
              참가형
            </CheckBoxLabel>
            <CheckBoxLabel htmlFor="">
              <CheckBox type="checkbox" />
              배송형
            </CheckBoxLabel>
          </CheckBoxWrapper>
        </InputBox>
      </CampainInfoBox>

      <CampainInfoBox>
        <InputBox>
          <InputLabel htmlFor="apply">신청기간</InputLabel>
          <RedStar>*</RedStar>
          <DateInput type="date" name="apply" id="apply" />
          <Tilde>~</Tilde>
          <DateInput type="date" />
        </InputBox>
        <InputBox>
          <InputLabel htmlFor="experience">체험기간</InputLabel>
          <RedStar>*</RedStar>
          <DateInput type="date" name="experience" id="experience" />
          <Tilde>~</Tilde>
          <DateInput type="date" />
        </InputBox>
        <InputBox>
          <InputLabel htmlFor="announce">발표일</InputLabel>
          <RedStar>*</RedStar>
          <DateInput type="date" name="announce" id="announce" />
        </InputBox>
      </CampainInfoBox>

      <CampainInfoBox>
        <InputBox>
          <InputLabel htmlFor="adress">주소</InputLabel>
          <RedStar>*</RedStar>
          <AdressBox>
            <div>
              <BusinessNumberInput type="text" placeholder="우편번호" disabled />
              <Button name="adress" id="adress">
                우편번호 찾기
              </Button>
            </div>
            <BusinessNumberInput type="text" placeholder="주소" disabled />
            <BusinessNumberInput type="text" placeholder="상세주소" />
          </AdressBox>
        </InputBox>

        <InputBox>
          <InputLabel htmlFor="">대표이미지</InputLabel>
          <RedStar>*</RedStar>
          <FileInput type="file" name="" id="" />
          <ImageBox>
            <p>다운이미지</p>
            <p>등록할 이미지를 끌어오거나,</p>
            <p>
              <span>여기</span>를 클릭하여 등록하세요.
            </p>
          </ImageBox>
        </InputBox>
        <InputBox>
          <InputLabel htmlFor="">상세이미지</InputLabel>
          <RedStar>*</RedStar>
          <FileInput type="file" name="" id="" />
          <ImageBox>
            <p>다운이미지</p>
            <p>등록할 이미지를 끌어오거나,</p>
            <p>
              <span>여기</span>를 클릭하여 등록하세요.
            </p>
          </ImageBox>
        </InputBox>
      </CampainInfoBox>
      <ButtonBox>
        <SubmitButton>등록하기</SubmitButton>
        <SubmitButton>작성취소</SubmitButton>
      </ButtonBox>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
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

const AdressBox = styled.div`
  display: flex;
  flex-direction: column;
  & input {
    margin-bottom: 10px;
  }
`;

const ButtonBox = styled.div`
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
`;

const FileInput = styled.input`
  display: none;
`;

const CheckBoxWrapper = styled.div`
  width: 460px;
  height: 60px;
  display: flex;
  align-items: center;
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

const CheckBox = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  background-size: 100% 100%;
  background-image: url(${checkIcon});
  cursor: pointer;

  &:checked {
    border: transparent;
    background-image: url(${checkedIcon});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
`;

const ImageBox = styled.div`
  width: 482px;
  height: 167px;
  background: #fef3f3 0% 0% no-repeat padding-box;
  border: 1px solid #cccccc;
  border-radius: 5px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: right;
  font: normal normal normal 16px/24px Pretendard;
  letter-spacing: 0px;
  color: #555555;
  opacity: 1;

  & > p {
    :first-child {
      margin-bottom: 20px;
    }
    span {
      color: #e76969;
      cursor: pointer;
    }
  }
`;

const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  color: #888888;
  margin-right: 60px;
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
