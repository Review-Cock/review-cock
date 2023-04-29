package com.example.backend.config.security.jwt.util;

import java.util.Map;

public interface JwtTokenUtil {
    Map<String, String> decode(String token);
}
