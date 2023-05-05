package com.example.backend.common.security.exception;

public class LoginException extends RuntimeException {
    public LoginException(String message) {
        super(message);
    }
}
