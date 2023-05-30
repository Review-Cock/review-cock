package com.example.backend.auth.dto.response;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class LoginResponse {

    private String accessToken;
    @JsonIgnore
    private String refreshToken;

    public static LoginResponse of(String accessToken, String refreshToken) {
        return LoginResponse.builder()
            .accessToken(accessToken)
            .refreshToken(refreshToken)
            .build();
    }
}
