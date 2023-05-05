package com.example.backend.user.controller;

import com.example.backend.user.dto.Token;
import com.example.backend.user.exception.UsersException;
import com.example.backend.user.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class OAuthController {

	private final UserService usersService;


	@GetMapping("/oauth/kakao/callback")
	public ResponseEntity<String> createLoginTokenWithKakao(@Valid @RequestParam("code") String code) {
		try {
			Token tokenDto = usersService.createLoginTokenWithKakao(code);
			ResponseCookie cookie = ResponseCookie.from("refreshToken", tokenDto.getRefreshToken())
				.httpOnly(true).secure(true).path("/").build();
			HttpHeaders headers = new HttpHeaders();
			headers.add(HttpHeaders.SET_COOKIE, cookie.toString());
			return ResponseEntity.ok().headers(headers).body(tokenDto.getAccessToken());
		} catch (UsersException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}

	}

	@GetMapping("/oauth/naver/callback")
	public ResponseEntity<String> createLoginTokenWithNaver(
		@Valid @RequestParam(value = "code") String code, @RequestParam String state)
		throws JsonProcessingException {
		try {
			Token tokenDto = usersService.createLoginTokenWithNaver(code, state);
			ResponseCookie cookie = ResponseCookie.from("refreshToken", tokenDto.getRefreshToken())
				.httpOnly(true).secure(true).path("/").build();
			HttpHeaders headers = new HttpHeaders();
			headers.add(HttpHeaders.SET_COOKIE, cookie.toString());
			return ResponseEntity.ok().headers(headers).body(tokenDto.getAccessToken());
		} catch (UsersException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}
}
