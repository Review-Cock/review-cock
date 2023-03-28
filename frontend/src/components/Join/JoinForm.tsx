import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { IForm } from '../../types/join';
import {
  NOT_CORRECT_PASSWORD_MESSAGE,
  EMAIL_REQUEST_MESSAGE,
  NICKNAME_REQUEST_MESSAGE,
  PASSWORD_REQUEST_MESSAGE,
  PASSWORD_RE_REQUEST_MESSAGE,
  PHONENUMBER_REQUEST_MESSAGE,
} from '../../utils/JoinConstants';
import CheckBoxForAgreement from './CheckBoxForAgreement';

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
    }

    JoinMutation.mutate({
      email,
      nickname,
      password,
      passwordConfirm,
      phoneNumber,
    });
  };

  return (
    <JoinFormBox onSubmit={handleSubmit(onValid)}>
      <Label htmlFor="email">이메일</Label>
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
      <Label htmlFor="nickname">닉네임</Label>

      <JoinInput
        id="nickname"
        {...register('nickname', { required: NICKNAME_REQUEST_MESSAGE })}
        placeholder={NICKNAME_REQUEST_MESSAGE}
      />

      <Label htmlFor="password">비밀번호</Label>
      <JoinInput
        id="password"
        {...register('password', { required: PASSWORD_REQUEST_MESSAGE })}
        placeholder={PASSWORD_REQUEST_MESSAGE}
        type="password"
      />

      <Label htmlFor="passwordConfirm">비밀번호 확인</Label>
      <JoinInput
        id="passwordConfirm"
        {...register('passwordConfirm', { required: PASSWORD_RE_REQUEST_MESSAGE })}
        placeholder={PASSWORD_RE_REQUEST_MESSAGE}
        type="password"
      />
      <ErrorBox>{errors?.passwordConfirm?.message}</ErrorBox>

      <Label htmlFor="phoneNumber">휴대전화</Label>
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

const JoinFormBox = styled.form`
  width: 35%;
  margin: 40px 0px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 15px;
  color: #404040;
  margin: 10px 0px;
`;

const JoinInput = styled.input`
  padding: 15px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #cccccc;
  border-radius: 5px;

  &:focus {
    outline-color: #e76969;
  }

  &::placeholder {
    color: #cccccc;
  }

  &:last-child {
    border: none;
    background-color: #e76969;
    color: #ffffff;
    cursor: pointer;
  }
`;

const ErrorBox = styled.div`
  color: #f58e8e;
  font-size: 0.5rem;
  margin: 0.25rem;
  padding-left: 0.25rem;
`;
