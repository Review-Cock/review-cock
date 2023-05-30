package com.example.backend.auth.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.auth.dto.response.LoginResponse;
import com.example.backend.auth.support.oauth.OAuthLoginService;
import com.example.backend.auth.support.oauth.kakao.KakaoLoginParams;
import com.example.backend.auth.support.oauth.naver.NaverLoginParams;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RequestMapping("/auth")
@RestController
public class OAuthController {

    private final OAuthLoginService oAuthLoginService;

    @Operation(summary = "카카오 로그인")
    @PostMapping("/login/kakao")
    public ResponseEntity<LoginResponse> loginKakao(@RequestBody KakaoLoginParams params) {
        return ResponseEntity.ok(oAuthLoginService.login(params));
    }

    @Operation(summary = "네이버 로그인")
    @PostMapping("/login/naver")
    public ResponseEntity<LoginResponse> loginNaver(@RequestBody NaverLoginParams params) {
        return ResponseEntity.ok(oAuthLoginService.login(params));
    }
}
