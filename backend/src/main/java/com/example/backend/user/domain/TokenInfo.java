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
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
@Entity
public class TokenInfo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(unique = true, nullable = false)
	private String email;

	@Setter
	@Column(nullable = false)
	private String refreshToken;

	@Setter
	@Column(nullable = false)
	private LocalDateTime expirationDt;

	@Builder
	private TokenInfo(String email, String refreshToken, LocalDateTime expirationDt) {
		this.email = email;
		this.refreshToken = refreshToken;
		this.expirationDt = expirationDt;
	}
}
