package com.example.backend.user.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class LoginUsers {

	@NotBlank(message = "사용자 ID는 필수 항목입니다.")
	private String email;

	@NotBlank(message = "사용자 비밀번호는 필수 항목입니다.")
	private String password;
}
