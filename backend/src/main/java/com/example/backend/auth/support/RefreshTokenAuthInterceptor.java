package com.example.backend.auth.support;

import org.springframework.web.servlet.HandlerInterceptor;

import com.example.backend.auth.domain.Token;
import com.example.backend.auth.repository.TokenRepository;
import com.example.backend.common.exception.auth.InvalidTokenException;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class RefreshTokenAuthInterceptor implements HandlerInterceptor {

    private final JwtTokenProvider jwtTokenProvider;
    private final TokenRepository tokenRepository;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        String refreshToken = AuthorizationExtractor.extract(request);
        if (jwtTokenProvider.validateTokenNotUsable(refreshToken)) {
            throw new InvalidTokenException();
        }
        Long userId = jwtTokenProvider.getPayload(refreshToken);
        Token token = tokenRepository.findByUserId(userId)
            .orElseThrow(InvalidTokenException::new);
        if (token.isDifferentRefreshToken(refreshToken)) {
            throw new InvalidTokenException();
        }

        return true;
    }
}
