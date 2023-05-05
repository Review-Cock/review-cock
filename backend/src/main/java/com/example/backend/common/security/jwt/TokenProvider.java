package com.example.backend.common.security.jwt;

import com.example.backend.user.dto.AccessTokenDto;
import com.example.backend.user.dto.RefreshTokenDto;
import com.example.backend.common.security.jwt.type.TokenType;
import com.example.backend.user.dto.TokenDto;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.annotation.PostConstruct;
import java.time.Duration;
import java.util.Base64;
import java.util.Date;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class TokenProvider {

	@Value("{spring.jwt.access-secret-key}")
	private String accessSecretKey;

	@Value("{spring.jwt.refresh-secret-key}")
	private String refreshSecretKey;

	//토큰 유효시간 설정
	private Long access_tokenValidTime = Duration.ofMinutes(30).toMillis(); // 30분
	private Long refresh_tokenValidTime =  Duration.ofDays(7).toMillis(); //

	//secretkey를 미리 인코딩 해준다.
	@PostConstruct
	protected void init() {
		accessSecretKey = Base64.getEncoder().encodeToString(accessSecretKey.getBytes());
		refreshSecretKey = Base64.getEncoder().encodeToString(refreshSecretKey.getBytes());
	}

	public AccessTokenDto generateAccessToken(String userEmail, String roles) {
		Claims claims = Jwts.claims();
		claims.put("userId", userEmail);
		claims.put("roles", roles);
		claims.put("type", TokenType.LOGIN_ACCESS.getKey());
		claims.put("expiration", access_tokenValidTime);
		Date now = new Date();

		String accessToken = Jwts.builder()
			.setClaims(claims)
			.setIssuedAt(now)
			.setExpiration(new Date(now.getTime() + access_tokenValidTime))
			.signWith(SignatureAlgorithm.HS256, accessSecretKey)
			.compact();

		return new AccessTokenDto(accessToken);
	}

	public RefreshTokenDto generateRefreshToken(String userEmail, String roles) {
		Claims claims = Jwts.claims();
		claims.put("userId", userEmail);
		claims.put("roles", roles);
		claims.put("type", TokenType.LOGIN_REFRESH.getKey());
		claims.put("expiration", refresh_tokenValidTime);
		Date now = new Date();

		String refreshToken = Jwts.builder()
			.setClaims(claims)
			.setIssuedAt(now)
			.setExpiration(new Date(now.getTime() + refresh_tokenValidTime))
			.signWith(SignatureAlgorithm.HS256, refreshSecretKey)
			.compact();

		return new RefreshTokenDto(refreshToken);
	}

	public TokenDto generateTokenDto(String userEmail, String roles) {
		AccessTokenDto accessTokenDto = generateAccessToken(userEmail, roles);
		RefreshTokenDto refreshTokenDto = generateRefreshToken(userEmail, roles);
		return new TokenDto(accessTokenDto.getAccessToken(), refreshTokenDto.getRefreshToken());
	}
}
