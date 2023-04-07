import React from 'react';
import { Wrapper, CheckBoxWrapper, CheckBoxLabel, CheckBox, Mark, Table, Box } from './index.styles';

const AGGREMENT_BOX = [
  { title: '목적', contents: '이용자 식별 및 본인 여부 확인 닉네임' },
  { title: '항목', contents: '닉네임, 비밀번호, 이메일주소' },
  {
    title: '보유 및 이용기간',
    contents: '회원 탈퇴 즉시  또는 이용 목적 달성 즉시 파기',
  },
];

const AGGREMENT_CHECKBOX = [
  {
    contents:
      '캠페인 모집 및 추천, 설문조사, 이벤트 정보등의 마케팅 수신 이메일, 문자 및 카카오톡) 에 동의합니다. (선택)',
  },

  {
    contents: '서비스 이용약관에 동의합니다.',
    mark: '(필수) 내용보기',
  },
  {
    contents: '본인은 만 14세 이상입니다.',
    mark: '(필수) 내용보기',
  },
  {
    contents: '개인정보 수집및 이용에 동의합니다.',
    mark: '(필수) 내용보기',
  },
];

const CheckBoxForAgreement = () => {
  return (
    <Wrapper>
      {AGGREMENT_CHECKBOX.map((item, i) => {
        return (
          <CheckBoxWrapper key={i}>
            <CheckBoxLabel htmlFor={`check_btn${i}`}>
              <CheckBox type="checkbox" id={`check_btn${i}`} />
              <div>
                {item.contents} <Mark>{item.mark}</Mark>
              </div>
            </CheckBoxLabel>
          </CheckBoxWrapper>
        );
      })}

      <Table>
        {AGGREMENT_BOX.map((item, i) => {
          return (
            <Box key={i}>
              <div>
                <span>{item.title}</span>
              </div>
              <div>
                <span>{item.contents}</span>
              </div>
            </Box>
          );
        })}
      </Table>
    </Wrapper>
  );
};

export default CheckBoxForAgreement;
