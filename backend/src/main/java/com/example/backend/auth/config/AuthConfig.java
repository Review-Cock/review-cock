package com.example.backend.auth.config;

import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.example.backend.auth.repository.TokenRepository;
import com.example.backend.auth.support.AuthInterceptor;
import com.example.backend.auth.support.JwtTokenProvider;
import com.example.backend.auth.support.TokenResolver;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Configuration
public class AuthConfig implements WebMvcConfigurer {

    private final JwtTokenProvider jwtTokenProvider;
    private final TokenRepository tokenRepository;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new AuthInterceptor(jwtTokenProvider))
            .addPathPatterns("/**");
        // registry.addInterceptor(new RefreshTokenAuthInterceptor(jwtTokenProvider, tokenRepository))
        //     .addPathPatterns("/auth/token/refresh");
    }

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(new TokenResolver(jwtTokenProvider));
    }
}
