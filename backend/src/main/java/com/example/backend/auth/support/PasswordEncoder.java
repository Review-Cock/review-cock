package com.example.backend.auth.support;

public interface PasswordEncoder {

    String encrypt(String password);
}
