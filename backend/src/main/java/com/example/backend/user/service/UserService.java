package com.example.backend.user.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.backend.auth.support.PasswordEncoder;
import com.example.backend.common.exception.user.UserNotFoundException;
import com.example.backend.user.domain.User;
import com.example.backend.user.dto.request.RegisterUserRequest;
import com.example.backend.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Transactional
@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public Long register(RegisterUserRequest request) {
        User user = userRepository.save(User.builder()
            .email(request.getEmail())
            .nickname(request.getNickname())
            .password(passwordEncoder.encrypt(request.getPassword()))
            .phoneNumber(request.getPhoneNumber())
            .build());

        return user.getId();
    }

    public User findById(Long id) {
        return userRepository.findById(id)
            .orElseThrow(UserNotFoundException::new);
    }
}
