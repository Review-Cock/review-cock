package com.example.backend.config.security.jwt;

import com.example.backend.config.security.jwt.type.TokenType;
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
	private Long refresh_tokenValidTime =  Duration.ofDays(14).toMillis(); // 14일

	// 토큰 고유 식별 id 값
	UUID uuid = UUID.randomUUID();
	String tokenId = uuid.toString();

	//secretkey를 미리 인코딩 해준다.
	@PostConstruct
	protected void init() {
		accessSecretKey = Base64.getEncoder().encodeToString(accessSecretKey.getBytes());
		refreshSecretKey = Base64.getEncoder().encodeToString(refreshSecretKey.getBytes());
	}

	public TokenDto generatedToken(String userEmail, String roles) {
		Claims claims = Jwts.claims();
		claims.put("type", TokenType.LOGIN_ACCESS.getKey());
		claims.put("expiration", access_tokenValidTime);
		claims.put("id", tokenId);
		claims.put("userId", userEmail);
		claims.put("roles", roles);
		Date now = new Date();

		// Access Token
		String accessToken = Jwts.builder()
			.setId(tokenId)
			.setClaims(claims)
			.setIssuedAt(now)
			.setExpiration(new Date(now.getTime() + access_tokenValidTime))
			.signWith(SignatureAlgorithm.HS256, accessSecretKey)
			.compact();

		// Refresh Token
		String refreshToken = Jwts.builder()
			.setId(tokenId)
			.setClaims(claims).setSubject(TokenType.LOGIN_REFRESH.getKey())
			.setIssuedAt(now)
			.setExpiration(new Date(now.getTime() + refresh_tokenValidTime))
			.signWith(SignatureAlgorithm.HS256, refreshSecretKey)
			.compact();

		return TokenDto.builder().accessToken(accessToken).refreshToken(refreshToken).build();
	}
}
