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
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(unique = true, nullable = false)
	private String email;

	@Column(unique = true, nullable = false)
	private String nickname;

	@Column(nullable = false)
	private String password;

	@Column(unique = true, nullable = false)
	private String phoneNumber;

	@CreatedDate
	@Column(updatable = false, nullable = false)
	private LocalDateTime createdDate;

	@LastModifiedDate
	@Column(updatable = false, nullable = false)
	private LocalDateTime lastModifiedDate;

	@Builder
	private User(String email, String nickname, String password, String phoneNumber,
		LocalDateTime createdDate, LocalDateTime lastModifiedDate) {
		this.email = email;
		this.nickname = nickname;
		this.password = password;
		this.phoneNumber = phoneNumber;
		this.createdDate = createdDate;
		this.lastModifiedDate = lastModifiedDate;
	}
}
