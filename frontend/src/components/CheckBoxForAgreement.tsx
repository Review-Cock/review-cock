import React from 'react';
import styled from 'styled-components';

const CheckBoxForAgreement = () => {
  return (
    <Wrapper>
      <CheckBox>
        <input type="checkbox" id="check_btn" />
        <label htmlFor="check_btn">
          <p>캠페인 모집 및 추천, 설문조사, 이벤트 정보등의 마케팅 수신</p>
          <p>(이메일, 문자 및 카카오톡) 에 동의합니다. (선택)</p>
        </label>
      </CheckBox>
      <CheckBox>
        <input type="checkbox" id="check_btn2" />
        <label htmlFor="check_btn2">
          서비스 이용약관에 동의합니다. (필수) <Mark>내용보기 </Mark>
        </label>
      </CheckBox>
      <CheckBox>
        <input type="checkbox" id="check_btn3" />
        <label htmlFor="check_btn3">
          본인은 만 14세 이상입니다. (필수) <Mark>내용보기</Mark>
        </label>
      </CheckBox>
      <CheckBox>
        <input type="checkbox" id="check_btn4" />
        <label htmlFor="check_btn4">
          개인정보 수집및 이용에 동의합니다. (필수) <Mark>내용보기</Mark>
        </label>
      </CheckBox>

      <Table>
        <Box>
          <div>목적</div>
          <div> 이용자 식별및 본인 여부 확인 닉네임</div>
        </Box>
        <Box>
          <div>항목</div>
          <div>닉네임, 비밀번호, 이메일주소</div>
        </Box>
        <Box>
          <div>보유및 이용기간</div>
          <div>회원 탈퇴 즉시 또는 이용 목적 달성 즉시 파기</div>
        </Box>
      </Table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
`;

const CheckBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 10px 0px;
  color: #888888;
  font-size: 13px;
  cursor: pointer;

  label,
  input {
    cursor: pointer;
  }

  input {
    accent-color: red;
    margin-top: 0px;
    margin-right: 10px;
  }
`;

const Mark = styled.span`
  color: #e76969;
`;

const Table = styled.div`
  display: flex;
  margin: 20px 0px;
  border: 1px solid #eaeaea;
`;

const Box = styled.div`
  width: 99%;
  display: flex;
  flex-direction: column;
  font-size: 13px;

  &:nth-child(2) {
    border-left: 1px solid #eaeaea;
    border-right: 1px solid #eaeaea;
  }

  div {
    &:first-child {
      box-sizing: border-box;
      text-align: center;
      padding: 15px;
      background-color: #f5f5f5;
    }

    &:last-child {
      display: flex;
      justify-content: center;
      padding: 20px 10px;
      width: 80%;
    }
  }
`;

export default CheckBoxForAgreement;
