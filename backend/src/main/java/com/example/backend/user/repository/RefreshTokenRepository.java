package com.example.backend.user.repository;

import com.example.backend.user.domain.TokenInfo;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RefreshTokenRepository extends JpaRepository<TokenInfo, Long> {

	Optional<TokenInfo> findByRefreshToken(String refreshToken);
	Optional<TokenInfo> findByEmail(String email);
}
