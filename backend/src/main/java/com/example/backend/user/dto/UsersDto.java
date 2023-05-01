package com.example.backend.user.dto;

import jakarta.persistence.Column;
import java.time.LocalDateTime;
import lombok.Builder;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

public class UsersDto {

	private String email;
	private String nickname;
	private String password;
	private String phoneNumber;

	@Builder
	public UsersDto(String email, String nickname, String password, String phoneNumber) {
		this.email = email;
		this.nickname = nickname;
		this.password = password;
		this.phoneNumber = phoneNumber;
	}
}
