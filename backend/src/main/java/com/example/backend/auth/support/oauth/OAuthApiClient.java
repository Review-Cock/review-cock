package com.example.backend.auth.support.oauth;

public interface OAuthApiClient {

    OAuthProvider oAuthProvider();
    String requestAccessToken(OAuthLoginParams params);
    OAuthInfoResponse requestOauthInfo(String accessToken);
}
