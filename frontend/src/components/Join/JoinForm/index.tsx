import React from 'react';
import CheckBoxForAgreement from '../CheckBoxForAgreement';
import { useForm } from 'react-hook-form';
import { JoinFormBox, Label, JoinInput, ErrorBox, RedStar } from './index.styles';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

import axiosInstance from '@utils/api/axiosInstance';
import { JOIN_URL } from '@utils/constants/apiConstants';
import {
  NOT_CORRECT_PASSWORD_MESSAGE,
  EMAIL_REQUEST_MESSAGE,
  NICKNAME_REQUEST_MESSAGE,
  PASSWORD_REQUEST_MESSAGE,
  PASSWORD_RE_REQUEST_MESSAGE,
  PHONENUMBER_REQUEST_MESSAGE,
  EMAIL_REGEX,
  NICKNAME_REGEX,
  NICKNAME_ERROR_MESSAGE,
  PASSWORD_REGEX,
  PASSWORD_ERROR_MESSAGE,
  PHONENUMBER_REGEX,
  NICKNAME_MINLENGTH,
  NICKNAME_MAXLENGTH,
  PASSWORD_MINLENGTH,
  PASSWORD_MAXLENGTH,
  PHONENUMBER_MINLENGTH,
  PHONENUMBER_MAXLENGTH,
  SUCCESS_JOIN_MESSAGE,
} from '../../../utils/constants/joinConstants';
import { LOGIN_URL } from '@utils/constants/routesConstants';

interface IJoinForm {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
  phoneNumber: number;
}

const JoinForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<IJoinForm>();

  const navigate = useNavigate();

  const JoinMutation = useMutation(
    ({ email, nickname, password, passwordCheck, phoneNumber }: IJoinForm) =>
      axiosInstance.post(JOIN_URL, {
        email,
        nickname,
        password,
        passwordCheck,
        phoneNumber,
      }),
    {
      onSuccess: () => {
        alert(SUCCESS_JOIN_MESSAGE);
        navigate(LOGIN_URL);
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );

  const onValid = (data: IJoinForm) => {
    const { email, nickname, password, passwordCheck, phoneNumber } = data;

    if (password !== passwordCheck) {
      setError('passwordCheck', { message: NOT_CORRECT_PASSWORD_MESSAGE }, { shouldFocus: true });
      setValue('password', '');
      setValue('passwordCheck', '');
    } else {
      JoinMutation.mutate({
        email,
        nickname,
        password,
        passwordCheck,
        phoneNumber,
      });
    }
  };

  return (
    <JoinFormBox onSubmit={handleSubmit(onValid)}>
      <Label htmlFor="email">
        이메일 <RedStar>*</RedStar>
      </Label>
      <JoinInput
        id="email"
        type="email"
        placeholder={EMAIL_REQUEST_MESSAGE}
        {...register('email', {
          required: EMAIL_REQUEST_MESSAGE,
          pattern: {
            value: EMAIL_REGEX,
            message: EMAIL_REQUEST_MESSAGE,
          },
        })}
      />
      <ErrorBox>{errors.email?.message}</ErrorBox>

      <Label htmlFor="nickname">
        닉네임 <RedStar>*</RedStar>
      </Label>
      <JoinInput
        id="nickname"
        type="text"
        placeholder={NICKNAME_REQUEST_MESSAGE}
        {...register('nickname', {
          required: NICKNAME_REQUEST_MESSAGE,
          pattern: {
            value: NICKNAME_REGEX,
            message: NICKNAME_ERROR_MESSAGE,
          },
          minLength: { value: NICKNAME_MINLENGTH, message: NICKNAME_ERROR_MESSAGE },
          maxLength: { value: NICKNAME_MAXLENGTH, message: NICKNAME_ERROR_MESSAGE },
        })}
      />
      <ErrorBox>{errors?.nickname?.message}</ErrorBox>

      <Label htmlFor="password">
        비밀번호 <RedStar>*</RedStar>
      </Label>
      <JoinInput
        id="password"
        type="password"
        placeholder={PASSWORD_REQUEST_MESSAGE}
        {...register('password', {
          required: PASSWORD_REQUEST_MESSAGE,
          pattern: {
            value: PASSWORD_REGEX,
            message: PASSWORD_ERROR_MESSAGE,
          },
          minLength: { value: PASSWORD_MINLENGTH, message: PASSWORD_ERROR_MESSAGE },
          maxLength: { value: PASSWORD_MAXLENGTH, message: PASSWORD_ERROR_MESSAGE },
        })}
      />
      <ErrorBox>{errors?.password?.message}</ErrorBox>

      <Label htmlFor="passwordCheck">
        비밀번호 확인 <RedStar>*</RedStar>
      </Label>
      <JoinInput
        id="passwordCheck"
        type="password"
        placeholder={PASSWORD_RE_REQUEST_MESSAGE}
        {...register('passwordCheck', {
          required: PASSWORD_RE_REQUEST_MESSAGE,
          pattern: {
            value: PASSWORD_REGEX,
            message: PASSWORD_ERROR_MESSAGE,
          },
          minLength: { value: PASSWORD_MINLENGTH, message: PASSWORD_ERROR_MESSAGE },
          maxLength: { value: PASSWORD_MAXLENGTH, message: PASSWORD_ERROR_MESSAGE },
        })}
      />
      <ErrorBox>{errors?.passwordCheck?.message}</ErrorBox>

      <Label htmlFor="phoneNumber">
        휴대전화 <RedStar>*</RedStar>
      </Label>
      <JoinInput
        id="phoneNumber"
        placeholder={PHONENUMBER_REQUEST_MESSAGE}
        {...register('phoneNumber', {
          required: PHONENUMBER_REQUEST_MESSAGE,
          pattern: {
            value: PHONENUMBER_REGEX,
            message: PHONENUMBER_REQUEST_MESSAGE,
          },
          minLength: { value: PHONENUMBER_MINLENGTH, message: PHONENUMBER_REQUEST_MESSAGE },
          maxLength: { value: PHONENUMBER_MAXLENGTH, message: PHONENUMBER_REQUEST_MESSAGE },
        })}
      />
      <ErrorBox>{errors?.phoneNumber?.message}</ErrorBox>

      <CheckBoxForAgreement />
      <JoinInput value="가입하기" type="submit" />
    </JoinFormBox>
  );
};

export default JoinForm;
