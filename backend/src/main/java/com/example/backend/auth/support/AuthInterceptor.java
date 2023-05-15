package com.example.backend.auth.support;

import java.lang.annotation.Annotation;
import java.util.Optional;

import org.springframework.web.cors.CorsUtils;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import com.example.backend.common.exception.auth.InvalidTokenException;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class AuthInterceptor implements HandlerInterceptor {

    private static final String SWAGGER_URI = "/swagger-ui";

    private final JwtTokenProvider jwtTokenProvider;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        if (CorsUtils.isPreFlightRequest(request)) {
            return true;
        }
        if (request.getRequestURI().startsWith(SWAGGER_URI)) {
            return true;
        }
        Optional<Authenticated> authenticated = parseAnnotation((HandlerMethod) handler, Authenticated.class);
        if (authenticated.isPresent()) {
            validateToken(request);
        }

        return true;
    }

    private <T extends Annotation> Optional<T> parseAnnotation(HandlerMethod handler, Class<T> clazz) {
        return Optional.ofNullable(handler.getMethodAnnotation(clazz));
    }

    private void validateToken(HttpServletRequest request) {
        String token = AuthorizationExtractor.extract(request);
        if (jwtTokenProvider.validateTokenNotUsable(token)) {
            throw new InvalidTokenException();
        }
    }
}
