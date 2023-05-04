package com.example.backend.user.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum UsersError {

	USERS_ALREADY_EMAIL("이미 등록된 e-mail 입니다."), USERS_JOIN_RE_PASSWORD_UN_MATCH(
		"비밀번호가 동일하지 않습니다."), USERS_ALREADY_NICKNAME("이미 등록된 닉네임 입니다."), USERS_NOT_FOUND(
		"사용자를 찾을 수 없습니다."), USERS_PASSWORD_NOT_SAME("비밀번호가 일치하지 않습니다."), USERS_TOKEN_NOT_SAME(
		"토큰이 일치하지 않습니다.");
	private final String description;
}
