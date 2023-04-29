package com.example.backend.user.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RegisterUsers {

	@NotBlank(message = "사용자 e-mail은 필수 항목입니다.")
	@Pattern(regexp = "^([a-zA-Z0-9_\\.-]+)@([\\da-zA-Z\\.-]+)\\.([a-zA-Z\\.]{2,6})$", message = "이메일 형식을 올바르게 입력해주세요.")
	private String email;

	@NotBlank(message = "사용자 비밀번호는 필수 항목입니다.")
	@Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)[a-zA-Z\\d]{8,20}$", message = "비밀번호는 영어와 숫자로 포함해서 8~20자리 이내로 입력해주세요.")
	@Size(min = 8, max = 20, message = "8~20자 사이 이내로 입력해주세요.")
	private String password;

	@NotBlank(message = "사용자 비밀번호는 필수 항목입니다.")
	@Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)[a-zA-Z\\d]{8,20}$", message = "비밀번호는 영어와 숫자로 포함해서 8~20자리 이내로 입력해주세요.")
	@Size(min = 8, max = 20, message = "8~20자 사이 이내로 입력해주세요.")
	private String passwordCheck;

	@NotBlank(message = "사용자 닉네임은 필수 항목입니다.")
	@Pattern(regexp = "^[a-zA-Z0-9]{2,10}$", message = "특수문자를 제외한 영어, 숫자로 입력해주세요.")
	@Size(min = 2, max = 10, message = "2~10자 사이 이내로 입력해주세요.")
	private String nickname;

	@NotBlank(message = "사용자 전화번호는 필수 항목입니다.")
	@Pattern(regexp = "^\\d{2,3}\\d{3,4}\\d{4}$", message = " '-'를 제외한 전화번호만 입력해주세요. ")
	private String phoneNumber;
}
