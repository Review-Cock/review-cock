import React from 'react';
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
import { JoinFormBox, Label, JoinInput, ErrorBox, RedStar } from './index.styles';

interface IForm {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
  phoneNumber: number;
}

const JoinForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
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
      <JoinInput
        id="nickname"
        {...register('nickname', { required: NICKNAME_REQUEST_MESSAGE })}
        placeholder={NICKNAME_REQUEST_MESSAGE}
      />
      <ErrorBox>{errors?.nickname?.message}</ErrorBox>

      <Label htmlFor="password">
        비밀번호 <RedStar>*</RedStar>
      </Label>
      <JoinInput
        id="password"
        {...register('password', {
          required: PASSWORD_REQUEST_MESSAGE,
          pattern: {
            value: /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+~|<>?]).{8,20}$/,
            message: '영문, 숫자, 특수문자가 혼합된 8에서 20자리의 비밀번호를 입력해주세요',
          },
        })}
        placeholder={PASSWORD_REQUEST_MESSAGE}
        type="password"
      />
      <ErrorBox>{errors?.password?.message}</ErrorBox>
      <Label htmlFor="passwordConfirm">
        비밀번호 확인 <RedStar>*</RedStar>
      </Label>
      <JoinInput
        id="passwordConfirm"
        {...register('passwordConfirm', {
          required: PASSWORD_RE_REQUEST_MESSAGE,
          pattern: {
            value: /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+~|<>?]).{8,20}$/,
            message: '영문, 숫자, 특수문자가 혼합된 8에서 20자리의 비밀번호를 입력해주세요',
          },
        })}
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
