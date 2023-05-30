package com.example.backend.auth.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.auth.dto.response.AccessTokenResponse;
import com.example.backend.auth.dto.request.LoginRequest;
import com.example.backend.auth.dto.response.LoginResponse;
import com.example.backend.auth.service.AuthService;
import com.example.backend.auth.support.Authenticated;
import com.example.backend.auth.support.AuthenticationPrincipal;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RequestMapping("/auth")
@RestController
public class AuthController {

    private final AuthService authService;

    @Operation(summary = "로그인")
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody @Validated LoginRequest request) {
        LoginResponse response = authService.login(request);
        ResponseCookie cookie = ResponseCookie.from("refreshToken", response.getRefreshToken())
            .secure(true)
            .sameSite("None")
            .httpOnly(true)
            .build();

        return ResponseEntity.ok()
            .header(HttpHeaders.SET_COOKIE, cookie.toString())
            .body(response);
    }

    @Operation(summary = "로그아웃")
    @Authenticated
    @PostMapping("/logout")
    public ResponseEntity<Void> logout(@Parameter(hidden = true) @AuthenticationPrincipal Long userId) {
        authService.logout(userId);

        return ResponseEntity.ok().build();
    }

    @Operation(summary = "토큰 재발급")
    @PostMapping("/token/refresh")
    public ResponseEntity<AccessTokenResponse> reissueAccessToken(@Parameter(hidden = true) @CookieValue String refreshToken) {
        AccessTokenResponse response = authService.reissueAccessToken(refreshToken);

        return ResponseEntity.ok(response);
    }
}
