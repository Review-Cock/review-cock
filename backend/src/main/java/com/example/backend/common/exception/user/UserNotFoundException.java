package com.example.backend.common.exception.user;

public class UserNotFoundException extends RuntimeException {

    private static final String MESSAGE = "유저를 찾을 수 없습니다.";

    public UserNotFoundException() {
        super(MESSAGE);
    }
}
