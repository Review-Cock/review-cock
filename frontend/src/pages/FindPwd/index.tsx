import MainPage from '@layouts/MainPage';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FindPwdBox, FindPwdForm, FindPwdInput, Notice, Title } from './index.styles';

interface IEmail {
  email: string;
}

const FindPwd = () => {
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const loginMutation = useMutation(({ email }: IEmail) => axios.post('', { email }), {
    onSuccess: (response) => {
      if (response) {
        alert('비밀번호가 0000으로 초기화 됐습니다');
        navigate('/users/login');
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleFindPwdSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutation.mutate({ email });
  };

  const handleEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  return (
    <MainPage>
      <FindPwdBox>
        <Title>{'비밀번호 찾기'}</Title>
        <Notice>
          <p>비밀번호를 잊어버리셨나요? </p>
          <p>가입할때 사용한 이메일 번호를 입력하시면 비밀번호를 재설정 해드립니다.</p>
        </Notice>
        <FindPwdForm onSubmit={handleFindPwdSubmit}>
          <FindPwdInput
            name="email"
            type="email"
            placeholder={'이메일을 입력해주세요'}
            onChange={handleEmail}
            required
          />
          <FindPwdInput type="submit" value={'비밀번호 찾기'} />
        </FindPwdForm>
      </FindPwdBox>
    </MainPage>
  );
};

export default FindPwd;
