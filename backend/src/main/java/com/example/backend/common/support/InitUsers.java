package com.example.backend.common.support;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.example.backend.auth.support.PasswordEncoder;
import com.example.backend.user.domain.User;
import com.example.backend.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Transactional
@RequiredArgsConstructor
@Component
public class InitUsers implements ApplicationRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        if (userRepository.findAll().size() == 0) {
            List<User> users = new ArrayList<>();
            IntStream.rangeClosed(1, 9).forEach(idx -> {
                users.add(User.builder()
                    .email("user" + idx + "@gmail.com")
                    .nickname("user" + idx)
                    .password(passwordEncoder.encrypt("12qw!@QW"))
                    .phoneNumber("0101234567" + idx)
                    .build());
            });
            userRepository.saveAll(users);
        }
    }
}
