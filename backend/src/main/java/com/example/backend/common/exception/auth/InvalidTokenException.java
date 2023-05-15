package com.example.backend.common.exception.auth;

import com.example.backend.common.exception.ExpectedException;

public class InvalidTokenException extends ExpectedException {

    private static final String MESSAGE = "토큰이 유효하지 않습니다.";

    public InvalidTokenException() {
        super(MESSAGE);
    }
}
