package com.example.backend.auth.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.backend.auth.domain.Token;

public interface TokenRepository extends JpaRepository<Token, Long> {

    Token save(Token token);

    Optional<Token> findByUserId(Long userId);

    Optional<Token> findByRefreshToken(String refreshToken);

    @Modifying
    @Query("delete from Token t where t.user.id = :userId")
    void deleteByUserId(Long userId);
}
