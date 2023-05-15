package com.example.backend.common.exception.auth;

public class RequiredLoginException extends RuntimeException {

    private static final String MESSAGE = "로그인이 필요합니다.";

    public RequiredLoginException() {
        super(MESSAGE);
    }
}
