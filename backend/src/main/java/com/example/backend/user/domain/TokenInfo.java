package com.example.backend.user.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDateTime;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
@Entity
public class TokenInfo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String refreshToken;

	@Column(unique = true, nullable = false)
	private String email;

	@Column(nullable = false)
	private LocalDateTime expirationDt; // 토큰 만료 시간

	@Builder
	public TokenInfo(String refreshToken, String email, LocalDateTime expirationDt) {
		this.refreshToken = refreshToken;
		this.email = email;
		this.expirationDt = expirationDt;
	}

}
