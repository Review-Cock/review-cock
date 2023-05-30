package com.example.backend.auth.support.oauth.naver;

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
public class NaverApiClient implements OAuthApiClient {

    private static final String GRANT_TYPE = "authorization_code";

    @Value("${security.oauth2.naver.url.auth}")
    private String authUrl;

    @Value("${security.oauth2.naver.url.api}")
    private String apiUrl;

    @Value("${security.oauth2.naver.client-id}")
    private String clientId;

    @Value("${security.oauth2.naver.secret}")
    private String clientSecret;

    private final RestTemplate restTemplate;

    @Override
    public OAuthProvider oAuthProvider() {
        return OAuthProvider.NAVER;
    }

    @Override
    public String requestAccessToken(OAuthLoginParams params) {
        String url = authUrl + "/oauth2.0/token";

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> body = params.makeBody();
        body.add("grant_type", GRANT_TYPE);
        body.add("client_id", clientId);
        body.add("client_secret", clientSecret);

        HttpEntity<?> request = new HttpEntity<>(body, httpHeaders);

        NaverToken response = restTemplate.postForObject(url, request, NaverToken.class);

        assert response != null;
        return response.getAccessToken();
    }

    @Override
    public OAuthInfoResponse requestOauthInfo(String accessToken) {
        String url = apiUrl + "/v1/nid/me";

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        httpHeaders.set("Authorization", "Bearer " + accessToken);

        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();

        HttpEntity<?> request = new HttpEntity<>(body, httpHeaders);

        return restTemplate.postForObject(url, request, NaverInfoResponse.class);
    }
}
