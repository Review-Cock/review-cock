package com.example.backend.auth.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.backend.auth.domain.Token;
import com.example.backend.auth.repository.TokenRepository;
import com.example.backend.user.domain.User;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Transactional
@Service
public class TokenService {

    private final TokenRepository tokenRepository;

    public void synchronizeRefreshToken(User user, String refreshToken) {
        tokenRepository.findByUserId(user.getId())
            .ifPresentOrElse(
                token -> token.updateRefreshToken(refreshToken),
                () -> tokenRepository.save(Token.builder()
                    .user(user)
                    .refreshToken(refreshToken)
                    .build())
            );
    }

    public void deleteByUserId(Long userId) {
        tokenRepository.deleteByUserId(userId);
    }
}
