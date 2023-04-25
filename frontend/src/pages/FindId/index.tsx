import MainPage from '@layouts/MainPage';
import React, { useState } from 'react';
import { FindIdBox, FindIdForm, FindIdInput, Notice, Title } from './index.styles';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface IPhoneNumber {
  phoneNumber: string;
}

const FindId = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigate = useNavigate();

  const loginMutation = useMutation(({ phoneNumber }: IPhoneNumber) => axios.post('', { phoneNumber }), {
    onSuccess: (response) => {
      if (response) {
        alert(`찾으시는 이메일은 : ${response.data.email} 입니다.`);
        navigate('/users/login');
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleFindIdSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!/^\d{11}$/.test(phoneNumber)) {
      alert('핸드폰 번호는 숫자로 11자리를 입력해주세요');
      setPhoneNumber('');
      return;
    }
    loginMutation.mutate({ phoneNumber });
  };

  const handlePhoneNumber = (e: React.FormEvent<HTMLInputElement>) => {
    setPhoneNumber(e.currentTarget.value);
  };
  return (
    <MainPage>
      <FindIdBox>
        <Title>{'아이디 찾기'}</Title>
        <Notice>
          <p>아이디를 잊어버리셨나요? </p>
          <p>가입할때 사용한 핸드폰 번호를 입력하시면 이메일을 알 수 있습니다.</p>
        </Notice>
        <FindIdForm onSubmit={handleFindIdSubmit}>
          <FindIdInput
            name="phoneNumber"
            type="phoneNumber"
            placeholder={'핸드폰 번호를 입력해주세요'}
            onChange={handlePhoneNumber}
            value={phoneNumber}
            required
          />
          <FindIdInput type="submit" value={'아이디 찾기'} />
        </FindIdForm>
      </FindIdBox>
    </MainPage>
  );
};

export default FindId;
