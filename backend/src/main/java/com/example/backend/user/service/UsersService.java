package com.example.backend.user.service;

import com.example.backend.config.security.jwt.TokenProvider;
import com.example.backend.user.domain.RefreshToken;
import com.example.backend.user.domain.User;
import com.example.backend.user.dto.LoginUsers;
import com.example.backend.user.dto.RegisterUsers;
import com.example.backend.user.dto.TokenDto;
import com.example.backend.user.dto.UserInfoDto;
import com.example.backend.user.exception.UsersError;
import com.example.backend.user.exception.UsersException;
import com.example.backend.user.repository.RefreshTokenRepository;
import com.example.backend.user.repository.UsersRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import java.time.LocalDateTime;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class UsersService {

	private final UsersRepository usersRepository;
	private final PasswordEncoder passwordEncoder;
	private final TokenProvider tokenProvider;
	private final RefreshTokenRepository refreshTokenRepository;
	private final KakaoOAuthService kakaoOAuthService;
	private final NaverOAuthService naverOAuthService;


	public void join(RegisterUsers parameter) {

		Optional<User> optionalUser = usersRepository.findByEmail(parameter.getEmail());

		if (optionalUser.isPresent()) {
			throw new UsersException(UsersError.USERS_ALREADY_EMAIL);
		}

		if (!parameter.getPassword().equals(parameter.getPasswordCheck())) {
			throw new UsersException(UsersError.USERS_JOIN_RE_PASSWORD_UN_MATCH);
		}

		if (usersRepository.existsByNickname(parameter.getNickname())) {
			throw new UsersException(UsersError.USERS_ALREADY_NICKNAME);
		}

		String pw = BCrypt.hashpw(parameter.getPassword(), BCrypt.gensalt());

		User user = usersRepository.save(User.builder().email(parameter.getEmail()).password(pw)
			.nickname(parameter.getNickname()).phoneNumber(parameter.getPhoneNumber()).build());

		log.info(String.valueOf(user));
	}

	public TokenDto logIn(LoginUsers parameter) {

		User user = usersRepository.findByEmail(parameter.getEmail())
			.orElseThrow(() -> new UsersException(UsersError.USERS_NOT_FOUND));

		if (!passwordEncoder.matches(parameter.getPassword(), user.getPassword())) {
			throw new UsersException(UsersError.USERS_PASSWORD_NOT_SAME);
		}

		TokenDto tokenDto = tokenProvider.generateTokenDto(parameter.getEmail(), "ROLE_USER");

		if(refreshTokenRepository.findByEmail(parameter.getEmail()).isPresent()){
			RefreshToken refreshToken = refreshTokenRepository.findByEmail(parameter.getEmail()).get();
			refreshToken.setRefreshToken(tokenDto.getRefreshToken());
			refreshTokenRepository.save(refreshToken);
			return tokenDto;
		}

		refreshTokenRepository.save(RefreshToken.builder()
			.refreshToken(tokenDto.getRefreshToken())
			.email(parameter.getEmail())
			.expirationDt(LocalDateTime.now().plusDays(7))
			.build());

		return tokenDto;
	}

	public TokenDto reissueAccessToken(String refreshToken) {
		// 요청받은 리프레쉬 토큰 찾기
		RefreshToken token = refreshTokenRepository.findByRefreshToken(refreshToken)
			.orElseThrow(() -> new UsersException(UsersError.USERS_TOKEN_NOT_SAME));

		// 새 액세스 토큰과 리프레시 토큰 생성
		TokenDto reissueTokenDto = tokenProvider.generateTokenDto(token.getEmail(), "ROLE_USER");
		RefreshToken newRefreshToken = RefreshToken.builder()
			.refreshToken(reissueTokenDto.getRefreshToken())
			.email(token.getEmail())
			.expirationDt(LocalDateTime.now().plusDays(7))
			.build();

		Optional<RefreshToken> existingRefreshToken = refreshTokenRepository.findByEmail(token.getEmail());

		if (existingRefreshToken.isPresent()) {
			// 리프레시 토큰을 업데이트
			RefreshToken refreshTokenToUpdate = existingRefreshToken.get();
			refreshTokenToUpdate.setRefreshToken(newRefreshToken.getRefreshToken());
			refreshTokenToUpdate.setExpirationDt(newRefreshToken.getExpirationDt());
			refreshTokenRepository.save(refreshTokenToUpdate);
		} else {
			// 새로운 리프레시 토큰을 추가
			refreshTokenRepository.save(newRefreshToken);
		}

		return reissueTokenDto;
	}

	public TokenDto createLoginTokenWithKakao(String code) {

		String kakaoToken = kakaoOAuthService.getKakaoAccessToken(code);
		UserInfoDto userInfoDto = kakaoOAuthService.createKakaoUser(kakaoToken);

		Optional<User> usersOptional = usersRepository.findByEmail(userInfoDto.getEmail());

		if (usersOptional.isEmpty()) {
			throw new UsersException(UsersError.USERS_NOT_FOUND);
		}

		User users = usersOptional.get();

		TokenDto tokenDto = tokenProvider.generateTokenDto(users.getEmail(), "ROLE_USER");

		if(refreshTokenRepository.findByEmail(users.getEmail()).isPresent()){
			RefreshToken refreshToken = refreshTokenRepository.findByEmail(users.getEmail()).get();
			refreshToken.setRefreshToken(tokenDto.getRefreshToken());
			refreshTokenRepository.save(refreshToken);
			return tokenDto;
		}

		refreshTokenRepository.save(RefreshToken.builder()
			.refreshToken(tokenDto.getRefreshToken())
			.email(users.getEmail())
			.expirationDt(LocalDateTime.now().plusDays(7))
			.build());

		return tokenDto;
	}

	public TokenDto createLoginTokenWithNaver(String code, String state) throws JsonProcessingException {

		String naverToken = naverOAuthService.getAccessToken(code, state);
		UserInfoDto userInfoDto = naverOAuthService.getUserInfo(naverToken, state);

		Optional<User> usersOptional = usersRepository.findByEmail(userInfoDto.getEmail());

		if (usersOptional.isEmpty()) {
			throw new UsersException(UsersError.USERS_NOT_FOUND);
		}

		User users = usersOptional.get();

		TokenDto tokenDto = tokenProvider.generateTokenDto(users.getEmail(), "ROLE_USER");

		if(refreshTokenRepository.findByEmail(users.getEmail()).isPresent()){
			RefreshToken refreshToken = refreshTokenRepository.findByEmail(users.getEmail()).get();
			refreshToken.setRefreshToken(tokenDto.getRefreshToken());
			refreshTokenRepository.save(refreshToken);
			return tokenDto;
		}

		refreshTokenRepository.save(RefreshToken.builder()
			.refreshToken(tokenDto.getRefreshToken())
			.email(users.getEmail())
			.expirationDt(LocalDateTime.now().plusDays(7))
			.build());

		return tokenDto;
	}
}
