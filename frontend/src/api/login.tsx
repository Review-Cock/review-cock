import api from './api';

export interface SignInForm {
  email: string;
  password: string;
}

export interface SignInSuccess {
  message: string;
  accessToken: string;
}

// export const postSignIn = ({ email, password }: SignInForm) =>
//   api.post<SignInSuccess>('/users/login', { email, password });
