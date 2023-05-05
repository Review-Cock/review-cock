package com.example.backend.common.security.jwt.util;

import java.util.Map;
import org.springframework.stereotype.Component;

@Component
public class DummyJwtTokenUtil implements JwtTokenUtil {
    @Override
    public Map<String, String> decode(String token) {
        return Map.ofEntries(
                Map.entry("type", "Bearer"),
                Map.entry("userId", "oauth:user:test"),
                Map.entry("roles", "USER")
        );
    }
}
