package com.example.backend.user.repository;

import java.util.Optional;

import com.example.backend.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByEmail(String email);

	Optional<User> findByEmailAndPassword(String email, String password);
}
