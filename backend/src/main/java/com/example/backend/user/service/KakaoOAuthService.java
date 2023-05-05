package com.example.backend.user.service;

import com.example.backend.user.dto.UserInfoDto;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class KakaoOAuthService {

	@Value("${spring.security.oauth2.client.registration.kakao.client-secret}")
	private String KAKAO_CLIENT_ID;

	@Value("${spring.security.oauth2.client.registration.kakao.redirect-uri}")
	private String KAKAO_REDIRECT_URI;

		public String getKakaoAccessToken (String code) {
			String accessToken = "";
			String refreshToken = "";
			String reqURL = "https://kauth.kakao.com/oauth/token";

			try {
				URL url = new URL(reqURL);
				HttpURLConnection conn = (HttpURLConnection) url.openConnection();

				//POST 요청을 위해 기본값이 false인 setDoOutput을 true로
				conn.setRequestMethod("POST");
				conn.setDoOutput(true);

				//POST 요청에 필요로 요구하는 파라미터 스트림을 통해 전송
				BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
				StringBuilder sb = new StringBuilder();
				sb.append("grant_type=authorization_code");
				sb.append("&client_id=" + KAKAO_CLIENT_ID); // TODO REST_API_KEY 입력
				sb.append("&redirect_uri=" + KAKAO_REDIRECT_URI); // TODO 인가코드 받은 redirect_uri 입력
				sb.append("&code=" + code);
				bw.write(sb.toString());
				bw.flush();

				//결과 코드가 200이라면 성공
				int responseCode = conn.getResponseCode();
				log.info("responseCode : " + responseCode);

				//요청을 통해 얻은 JSON타입의 Response 메세지 읽어오기
				BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
				String line = "";
				String result = "";

				while ((line = br.readLine()) != null) {
					result += line;
				}
				log.info("response body : " + result);

				//Gson 라이브러리에 포함된 클래스로 JSON파싱 객체 생성
				JsonParser parser = new JsonParser();
				JsonElement element = parser.parse(result);

				accessToken = element.getAsJsonObject().get("access_token").getAsString();
				refreshToken = element.getAsJsonObject().get("refresh_token").getAsString();

				log.info("access_token : " + accessToken);
				log.info("refresh_token : " + refreshToken);

				br.close();
				bw.close();
			} catch (IOException e) {
				e.printStackTrace();
			}

			return accessToken;
		}

		public UserInfoDto createKakaoUser(String token) {

			String reqURL = "https://kapi.kakao.com/v2/user/me";
			UserInfoDto userInfoDto = new UserInfoDto();

			//access_token을 이용하여 사용자 정보 조회
			try {
				URL url = new URL(reqURL);
				HttpURLConnection conn = (HttpURLConnection) url.openConnection();

				conn.setRequestMethod("POST");
				conn.setDoOutput(true);
				conn.setRequestProperty("Authorization", "Bearer " + token); //전송할 header 작성, access_token전송

				//결과 코드가 200이라면 성공
				int responseCode = conn.getResponseCode();
				log.info("responseCode : " + responseCode);

				//요청을 통해 얻은 JSON타입의 Response 메세지 읽어오기
				BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
				String line = "";
				String result = "";

				while ((line = br.readLine()) != null) {
					result += line;
				}
				log.info("response body : " + result);

				//Gson 라이브러리로 JSON파싱
				JsonParser parser = new JsonParser();
				JsonElement element = parser.parse(result);


				String nickname = element.getAsJsonObject().get("properties").getAsJsonObject().get("nickname").getAsString();
				boolean hasEmail = element.getAsJsonObject().get("kakao_account").getAsJsonObject().get("has_email").getAsBoolean();
				String email = "";
				if(hasEmail){
					email = element.getAsJsonObject().get("kakao_account").getAsJsonObject().get("email").getAsString();
				}
				log.info("email : " + email);
				log.info("nickname : " + nickname);

				br.close();

				userInfoDto.setEmail(email);
				userInfoDto.setNickname(nickname);

			} catch (IOException e) {
				e.printStackTrace();
			}

			return userInfoDto;
		}

}


