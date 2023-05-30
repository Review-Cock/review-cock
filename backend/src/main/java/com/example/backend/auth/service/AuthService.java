package com.example.backend.auth.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.backend.auth.domain.Token;
import com.example.backend.auth.dto.response.AccessTokenResponse;
import com.example.backend.auth.dto.request.LoginRequest;
import com.example.backend.auth.dto.response.LoginResponse;
import com.example.backend.auth.repository.TokenRepository;
import com.example.backend.auth.support.JwtTokenProvider;
import com.example.backend.auth.support.PasswordEncoder;
import com.example.backend.common.exception.auth.InvalidTokenException;
import com.example.backend.common.exception.user.InvalidEmailAndPasswordException;
import com.example.backend.user.domain.User;
import com.example.backend.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Transactional
@Service
public class AuthService {

    private final TokenService tokenService;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenRepository tokenRepository;

    public LoginResponse login(LoginRequest request) {
        String email = request.getEmail();
        String password = passwordEncoder.encrypt(request.getPassword());
        User user = userRepository.findByEmailAndPassword(email, password)
            .orElseThrow(InvalidEmailAndPasswordException::new);
        String accessToken = jwtTokenProvider.createAccessToken(user.getId());
        String refreshToken = jwtTokenProvider.createRefreshToken(user.getId());
        tokenService.synchronizeRefreshToken(user, refreshToken);

        return LoginResponse.of(accessToken, refreshToken);
    }

    public void logout(Long userId) {
        tokenService.deleteByUserId(userId);
    }

    @Transactional(readOnly = true)
    public AccessTokenResponse reissueAccessToken(String refreshToken) {
        Token token = tokenRepository.findByRefreshToken(refreshToken)
            .orElseThrow(InvalidTokenException::new);
        String accessToken = jwtTokenProvider.createAccessToken(token.getUser().getId());

        return new AccessTokenResponse(accessToken);
    }
}
