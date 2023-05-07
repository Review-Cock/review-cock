package com.example.backend.user.controller;

import com.example.backend.common.security.jwt.filter.JwtAuthenticateFilter;
import com.example.backend.user.dto.LoginUser;
import com.example.backend.user.dto.RegisterUser;
import com.example.backend.user.dto.Token;
import com.example.backend.user.exception.UsersException;
import com.example.backend.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RequestMapping("/users")
@RestController
public class UserController {

	private final UserService usersService;

	private final static String REFRESH_TOKEN = "refreshToken";

	@PostMapping("/join")
	public ResponseEntity<Void> join (@RequestBody @Validated RegisterUser request) {
		try {
			usersService.join(request);
			return ResponseEntity.status(HttpStatus.OK).build();
		} catch (UsersException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}

	@PostMapping("/login")
	public ResponseEntity<Token> logIn(@RequestBody @Validated LoginUser request) {
		try {
			Token tokenDto = usersService.logIn(request);
			HttpHeaders httpHeaders = new HttpHeaders();
			httpHeaders.add(JwtAuthenticateFilter.TOKEN_HEADER,
				JwtAuthenticateFilter.TOKEN_PREFIX + tokenDto.getAccessToken());
			return ResponseEntity.ok().headers(httpHeaders).body(tokenDto);
		} catch (UsersException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}

	@PostMapping("/silent-refresh")
	public ResponseEntity<String> reissueAccessToken(@RequestHeader("Authorization") String refreshToken) {
		try {
			Token tokenDto = usersService.reissueAccessToken(refreshToken);

			ResponseCookie cookie = ResponseCookie.from(REFRESH_TOKEN, tokenDto.getRefreshToken())
				.httpOnly(true).secure(true).path("/").build();
			HttpHeaders headers = new HttpHeaders();
			headers.add(HttpHeaders.SET_COOKIE, cookie.toString());

			return ResponseEntity.ok().headers(headers).body(tokenDto.getAccessToken());
		} catch (UsersException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}
}
