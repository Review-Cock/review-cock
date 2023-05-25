package com.example.backend.auth.support.oauth.kakao;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class KakaoToken {

    private String accessToken;
    private String tokenType;
    private String refreshToken;
    private String expiresIn;
    private String refreshTokenExpiresIn;
    private String scope;
}
