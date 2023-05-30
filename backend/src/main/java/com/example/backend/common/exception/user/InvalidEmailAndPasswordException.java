package com.example.backend.common.exception.user;

public class InvalidEmailAndPasswordException extends RuntimeException {

    private static final String MESSAGE = "아이디나 비밀번호가 다릅니다.";

    public InvalidEmailAndPasswordException() {
        super(MESSAGE);
    }
}
