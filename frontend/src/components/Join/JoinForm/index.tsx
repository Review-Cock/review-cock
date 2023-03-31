import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import {
  NOT_CORRECT_PASSWORD_MESSAGE,
  EMAIL_REQUEST_MESSAGE,
  NICKNAME_REQUEST_MESSAGE,
  PASSWORD_REQUEST_MESSAGE,
  PASSWORD_RE_REQUEST_MESSAGE,
  PHONENUMBER_REQUEST_MESSAGE,
} from '../../../utils/JoinConstants';
import CheckBoxForAgreement from '../CheckBoxForAgreement';
import { JoinFormBox, Label, JoinInput, ErrorBox, RedStar, NickNameBox } from './index.styles';

interface IForm {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
  phoneNumber: number;
}

const JoinForm = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [disable, setDisable] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setFocus,
    setValue,
  } = useForm<IForm>();

  const JoinMutation = useMutation(
    ({ email, nickname, password, passwordConfirm, phoneNumber }: IForm) =>
      axios.post('', {
        email,
        nickname,
        password,
        passwordConfirm,
        phoneNumber,
      }),
    {
      onSuccess: (response) => {
        console.log(response);
        navigate('/');
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );

  const onValid = (data: IForm) => {
    const { email, nickname, password, passwordConfirm, phoneNumber } = data;

    if (password !== passwordConfirm) {
      setError('passwordConfirm', { message: NOT_CORRECT_PASSWORD_MESSAGE }, { shouldFocus: true });
      setValue('password', '');
      setValue('passwordConfirm', '');
    } else if (!disable) {
      alert('닉네임 중복확인 부탁드립니다');
      setFocus('nickname');
    } else {
      JoinMutation.mutate({
        email,
        nickname,
        password,
        passwordConfirm,
        phoneNumber,
      });
    }
  };

  const handleNickNameBtn = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    axios
      .get('http://localhost:8080/test', {
        params: {
          nicknameDuplicateCheck: nickname,
        },
      })
      .then((res) => {
        // 성공시
        if (res.status === 200) {
          alert('중복확인이 완료되었습니다.');
          setDisable(true);
        }
      })
      .catch((error) => {
        // 실패시
        if (error.response.status === 409) {
          alert('중복된 Nickname 입니다');
          setNickname('');
        } else {
          console.log(error);
        }
      });
  };

  return (
    <JoinFormBox onSubmit={handleSubmit(onValid)}>
      <Label htmlFor="email">
        이메일 <RedStar>*</RedStar>
      </Label>
      <JoinInput
        id="email"
        {...register('email', {
          required: EMAIL_REQUEST_MESSAGE,
          pattern: {
            value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
            message: EMAIL_REQUEST_MESSAGE,
          },
        })}
        placeholder={EMAIL_REQUEST_MESSAGE}
        type="email"
      />
      <ErrorBox>{errors.email?.message}</ErrorBox>
      <Label htmlFor="nickname">
        닉네임 <RedStar>*</RedStar>
      </Label>
      <NickNameBox>
        <JoinInput
          id="nickname"
          {...register('nickname', { required: NICKNAME_REQUEST_MESSAGE })}
          placeholder={NICKNAME_REQUEST_MESSAGE}
          onChange={(e: React.FormEvent<HTMLInputElement>) => setNickname(e.currentTarget.value)}
          disabled={disable}
          value={nickname}
        />
        <button onClick={handleNickNameBtn}>중복확인</button>
      </NickNameBox>

      <Label htmlFor="password">
        비밀번호 <RedStar>*</RedStar>
      </Label>
      <JoinInput
        id="password"
        {...register('password', { required: PASSWORD_REQUEST_MESSAGE })}
        placeholder={PASSWORD_REQUEST_MESSAGE}
        type="password"
      />

      <Label htmlFor="passwordConfirm">
        비밀번호 확인 <RedStar>*</RedStar>
      </Label>
      <JoinInput
        id="passwordConfirm"
        {...register('passwordConfirm', { required: PASSWORD_RE_REQUEST_MESSAGE })}
        placeholder={PASSWORD_RE_REQUEST_MESSAGE}
        type="password"
      />
      <ErrorBox>{errors?.passwordConfirm?.message}</ErrorBox>

      <Label htmlFor="phoneNumber">
        휴대전화 <RedStar>*</RedStar>
      </Label>
      <JoinInput
        id="phoneNumber"
        {...register('phoneNumber', {
          required: PHONENUMBER_REQUEST_MESSAGE,
          pattern: {
            value: /\d{3}\d{4}\d{4}$/,
            message: PHONENUMBER_REQUEST_MESSAGE,
          },
          maxLength: { value: 11, message: PHONENUMBER_REQUEST_MESSAGE },
        })}
        placeholder={PHONENUMBER_REQUEST_MESSAGE}
      />
      <ErrorBox>{errors?.phoneNumber?.message}</ErrorBox>

      <CheckBoxForAgreement />
      <JoinInput value="가입하기" type="submit" />
    </JoinFormBox>
  );
};

export default JoinForm;
