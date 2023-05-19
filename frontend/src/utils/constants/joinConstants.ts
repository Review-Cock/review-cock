export const SITE_NAME = '리뷰콕';
export const JOIN_TITLE = '회원가입';

export const EMAIL_REGEX = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z.]{2,6}$/;
export const NICKNAME_REGEX = /^[a-zA-Z0-9]{2,10}$/;
export const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,20}$/;
export const PHONENUMBER_REGEX = /^\d{2,3}\d{3,4}\d{4}$/;

export const NICKNAME_MINLENGTH = 2;
export const NICKNAME_MAXLENGTH = 10;

export const PASSWORD_MINLENGTH = 8;
export const PASSWORD_MAXLENGTH = 20;

export const PHONENUMBER_MINLENGTH = 9;
export const PHONENUMBER_MAXLENGTH = 11;

export const SUCCESS_JOIN_MESSAGE = '회원가입을 축하합니다';

export const EMAIL_REQUEST_MESSAGE = 'Email 형식에 맞게 입력해주세요';
export const NICKNAME_REQUEST_MESSAGE = 'Nickname을 입력해주세요';
export const PASSWORD_REQUEST_MESSAGE = '비밀번호는 8~16자를 입력해주세요';
export const PASSWORD_RE_REQUEST_MESSAGE = '다시한번 Password를 입력해주세요';
export const PHONENUMBER_REQUEST_MESSAGE = "' - ' 없이 연락처 9 ~ 11자리를 입력해주세요 Ex) 01012345678";
export const BUSINESSNUMBER_REQUEST_MESSAGE = " ' - ' 없이 사업자번호 10자리를 입력해주세요";

export const NICKNAME_ERROR_MESSAGE = '영문, 숫자가 혼합된 2에서 10자리의 닉네임을 입력해주세요';
export const PASSWORD_ERROR_MESSAGE = '영문, 숫자, 특수문자가 혼합된 8에서 20자리의 비밀번호를 입력해주세요';

export const NOT_CORRECT_PASSWORD_MESSAGE = '비밀번호가 일치하지 않습니다.';
