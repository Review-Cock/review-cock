package com.example.backend.auth.support.oauth.kakao;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.example.backend.auth.support.oauth.OAuthApiClient;
import com.example.backend.auth.support.oauth.OAuthInfoResponse;
import com.example.backend.auth.support.oauth.OAuthLoginParams;
import com.example.backend.auth.support.oauth.OAuthProvider;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Component
public class KakaoApiClient implements OAuthApiClient {

    private static final String GRANT_TYPE = "authorization_code";

    @Value("${security.oauth2.kakao.url.auth}")
    private String authUrl;

    @Value("${security.oauth2.kakao.url.api}")
    private String apiUrl;

    @Value("${security.oauth2.kakao.client-id}")
    private String clientId;

    private final RestTemplate restTemplate;

    @Override
    public OAuthProvider oAuthProvider() {
        return OAuthProvider.KAKAO;
    }

    @Override
    public String requestAccessToken(OAuthLoginParams params) {
        String url = authUrl + "/oauth/token";

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> body = params.makeBody();
        body.add("grant_type", GRANT_TYPE);
        body.add("client_id", clientId);

        HttpEntity<?> request = new HttpEntity<>(body, httpHeaders);

        KakaoToken response = restTemplate.postForObject(url, request, KakaoToken.class);

        return response.getAccessToken();
    }

    @Override
    public OAuthInfoResponse requestOauthInfo(String accessToken) {
        String url = apiUrl + "/v2/user/me";

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        httpHeaders.set("Authorization", "Bearer " + accessToken);

        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("property_keys", "[\"kakao_account.email\"");

        HttpEntity<?> request = new HttpEntity<>(body, httpHeaders);
        OAuthInfoResponse response = restTemplate.postForObject(url, request, KakaoInfoResponse.class);

        return response;
    }
}
