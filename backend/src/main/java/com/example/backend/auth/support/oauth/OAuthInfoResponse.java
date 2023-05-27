package com.example.backend.auth.support.oauth;

public interface OAuthInfoResponse {

    String getEmail();
    String getNickname();
    OAuthProvider getOAuthProvider();
}
