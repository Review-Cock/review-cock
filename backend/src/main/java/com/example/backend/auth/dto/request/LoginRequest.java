package com.example.backend.auth.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class LoginRequest {

    @NotBlank(message = "사용자 e-mail은 필수 항목입니다.")
    @Pattern(regexp = "^([a-zA-Z0-9_\\.-]+)@([\\da-zA-Z\\.-]+)\\.([a-zA-Z\\.]{2,6})$", message = "이메일 형식을 올바르게 입력해주세요.")
    private String email;

    @NotBlank(message = "사용자 비밀번호는 필수 항목입니다.")
    @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!@#$%^&*])[a-zA-Z\\d!@#$%^&*]{8,20}$", message = "비밀번호는 영어, 숫자, 특수문자 포함해서 8~20자리 이내로 입력해주세요.")
    @Size(min = 8, max = 20, message = "8~20자 사이 이내로 입력해주세요.")
    private String password;
}
