package com.example.backend.auth.support.oauth.kakao;

import com.example.backend.auth.support.oauth.OAuthInfoResponse;
import com.example.backend.auth.support.oauth.OAuthProvider;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class KakaoInfoResponse implements OAuthInfoResponse {

    private KakaoAccount kakaoAccount;

    @Getter
    @NoArgsConstructor(access = AccessLevel.PRIVATE)
    @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
    static class KakaoAccount {

        private KakaoProfile profile;
        private String email;
    }

    @Getter
    @NoArgsConstructor(access = AccessLevel.PRIVATE)
    @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
    static class KakaoProfile {

        private String nickname;
    }

    @Override
    public String getEmail() {
        return null;
    }

    @Override
    public String getNickname() {
        return null;
    }

    @Override
    public OAuthProvider getOAuthProvider() {
        return null;
    }
}
