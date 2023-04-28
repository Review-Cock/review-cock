package com.example.backend.user.controller;

import com.example.backend.config.security.jwt.filter.JwtAuthenticateFilter;
import com.example.backend.user.dto.LoginUsers;
import com.example.backend.user.dto.RegisterUsers;
import com.example.backend.user.dto.TokenDto;
import com.example.backend.user.exception.UsersException;
import com.example.backend.user.service.UsersService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UsersController {

	private final UsersService usersService;

	@PostMapping("/join")
	public ResponseEntity<Void> join (@RequestBody @Validated RegisterUsers request) {
		try {
			usersService.join(request);
			return ResponseEntity.status(HttpStatus.OK).build();
		} catch (UsersException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}

	@PostMapping("/login")
	public ResponseEntity<TokenDto> logIn(@RequestBody @Validated LoginUsers request) {
		try {
			TokenDto tokenDto = usersService.logIn(request);
			HttpHeaders httpHeaders = new HttpHeaders();
			httpHeaders.add(JwtAuthenticateFilter.TOKEN_HEADER,
				JwtAuthenticateFilter.TOKEN_PREFIX + tokenDto.getAccessToken());
			return ResponseEntity.ok().headers(httpHeaders).body(tokenDto);
		} catch (UsersException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}

}
