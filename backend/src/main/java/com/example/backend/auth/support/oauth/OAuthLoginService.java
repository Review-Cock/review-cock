package com.example.backend.auth.support.oauth;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.backend.auth.dto.response.AccessTokenResponse;
import com.example.backend.auth.dto.response.LoginResponse;
import com.example.backend.auth.support.JwtTokenProvider;
import com.example.backend.user.domain.User;
import com.example.backend.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Transactional
@Service
public class OAuthLoginService {

    private final UserRepository userRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final RequestOAuthInfoService requestOAuthInfoService;

    public LoginResponse login(OAuthLoginParams params) {
        OAuthInfoResponse response = requestOAuthInfoService.request(params);
        Long userId = findOrSaveUser(response);
        String accessToken = jwtTokenProvider.createAccessToken(userId);
        String refreshToken = jwtTokenProvider.createRefreshToken(userId);

        return LoginResponse.of(accessToken, refreshToken);
    }

    private Long findOrSaveUser(OAuthInfoResponse response) {
        return userRepository.findByEmail(response.getEmail())
            .map(User::getId)
            .orElseGet(() -> newUser(response));
    }

    private Long newUser(OAuthInfoResponse response) {
        User user = User.builder()
            .email(response.getEmail())
            .nickname(response.getNickname())
            .phoneNumber("OAuthUser")
            .build();

        return userRepository.save(user).getId();
    }
}
