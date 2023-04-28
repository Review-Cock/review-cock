package com.example.backend.config.security.exception;

public class LoginException extends RuntimeException {
    public LoginException(String message) {
        super(message);
    }
}
