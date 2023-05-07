package com.example.backend.user.service;

import com.example.backend.user.dto.OAuthUserInfo;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Base64;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Slf4j
@RequiredArgsConstructor
@Service
public class NaverOAuthService {

	@Value("${spring.security.oauth2.client.registration.naver.client-id}")
	private String NAVER_CLIENT_ID;

	@Value("${spring.security.oauth2.client.registration.naver.client-secret}")
	private String NAVER_CLIENT_SECRET;

	@Value("${spring.security.oauth2.client.registration.naver.redirect-uri")
	private String NAVER_REDIRECT_URI;

	@Value("${spring.security.oauth2.client.provider.naver.user-info-uri")
	private String NAVER_USER_INFO_URI;

	public String getAccessToken(String code, String state) {
		// Combine the client ID and client secret into a single string with a colon separator
		String credentials = NAVER_CLIENT_ID + ":" + NAVER_CLIENT_SECRET;

		// Encode the credentials string using Base64
		String encodedCredentials = Base64.getEncoder().encodeToString(credentials.getBytes());

		// Create HTTP 요청 헤더
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		headers.add("Authorization", "Basic " + encodedCredentials);

		// Create HTTP 요청 바디
		MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
		body.add("grant_type", "authorization_code");
		body.add("client_id", NAVER_CLIENT_ID);
		body.add("client_secret", NAVER_CLIENT_SECRET);
		body.add("redirect_uri", NAVER_REDIRECT_URI);
		body.add("code", code);
		body.add("state", state);

		// Create HTTP 요청 엔티티
		HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(body, headers);

		// Send HTTP POST 요청 to 네이버 소셜 로그인 API
		RestTemplate rt = new RestTemplate();
		ResponseEntity<String> response = rt.postForEntity("https://nid.naver.com/oauth2.0/token",
			request, String.class);

		// HTTP 응답 (JSON) -> 액세스 토큰 파싱
		String responseBody = response.getBody();
		try {
			ObjectMapper objectMapper = new ObjectMapper();
			JsonNode jsonNode = objectMapper.readTree(responseBody);
			log.info(String.valueOf(jsonNode));
			return jsonNode.get("access_token").asText();
		} catch (Exception e) {
			log.info("in exception");
			return e.toString();
		}
	}

	public OAuthUserInfo getUserInfo(String accessToken, String state)
		throws JsonProcessingException {

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		headers.add("Authorization", "Bearer " + accessToken);
		headers.add("X-Naver-Client-Id", NAVER_CLIENT_ID);
		headers.add("X-Naver-Client-Secret", NAVER_CLIENT_SECRET);

		HttpEntity<?> userInfoRequest = new HttpEntity<>(headers);

		RestTemplate rt = new RestTemplate();
		ResponseEntity<String> response = rt.exchange("https://openapi.naver.com/v1/nid/me",
			HttpMethod.GET, userInfoRequest, String.class);

		String responseBody = response.getBody();

		ObjectMapper objectMapper = new ObjectMapper();
		JsonNode jsonNode = objectMapper.readTree(responseBody);
		JsonNode responseNode = jsonNode.get("response");

		String nickname = null;
		String email = null;

		if (responseNode != null) {
			nickname =
				responseNode.get("nickname") != null ? responseNode.get("nickname").asText() : null;
			email = responseNode.get("email") != null ? responseNode.get("email").asText() : null;
		}

		log.info(nickname);
		log.info(email);

		return new OAuthUserInfo(email, nickname);
	}
}
