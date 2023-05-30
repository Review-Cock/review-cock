package com.example.backend.user.controller;

import com.example.backend.user.dto.request.RegisterUserRequest;
import com.example.backend.user.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RequestMapping("/users")
@RestController
public class UserController {

    private final UserService usersService;

    @Operation(summary = "회원가입")
    @PostMapping("/join")
    public ResponseEntity<Void> join(@RequestBody @Validated RegisterUserRequest request) {
        usersService.register(request);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
