package com.example.backend.config.security.jwt.filter;

import com.example.backend.config.security.exception.LoginException;
import com.example.backend.config.security.jwt.type.TokenType;
import com.example.backend.config.security.jwt.util.JwtTokenUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
@RequiredArgsConstructor
public class JwtAuthenticateFilter extends OncePerRequestFilter {

	public static final String TOKEN_HEADER = "Authorization";
	public static final String TOKEN_PREFIX = "Bearer ";

	private final UserDetailsService userDetailsService;
	private final JwtTokenUtil jwtTokenUtil;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
		FilterChain filterChain) throws ServletException, IOException {
		String header = request.getHeader(TOKEN_HEADER);
		boolean isValidate = validateHeader(header);
		if (!isValidate) {
			filterChain.doFilter(request, response);
			return;
		}
		String token = getToken(header);
		String userId = getUserId(token);
		if (SecurityContextHolder.getContext().getAuthentication() == null) {
			saveToContext(userDetailsService.loadUserByUsername(userId), request);
		}

		filterChain.doFilter(request, response);
	}

	private void saveToContext(UserDetails userDetails, HttpServletRequest request) {
		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
			userDetails, null, userDetails.getAuthorities());
		authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
		SecurityContextHolder.getContext()
			.setAuthentication(authenticationToken);
	}

	private boolean validateHeader(String header) {
		return header != null && header.startsWith(TOKEN_PREFIX);
	}

	private String getUserId(String token) {
		Map<String, String> payload = jwtTokenUtil.decode(token);
		validatePayload(payload);
		return payload.get("userId");
	}

	private String getToken(String header) {
		return header.substring(TOKEN_PREFIX.length());
	}

	private void validatePayload(Map<String, String> payload) {
		if (isFormatWrong(payload)) {
			throw new LoginException("토큰이 담고있는 정보가 바르지 않습니다.");
		}
		if (isNotAccessToken(payload)) {
			throw new LoginException("해당 토큰은 액세스토큰이 아닙니다.");
		}
		if (isExpired(payload)) {
			throw new LoginException("이미 만료된 액세스토큰입니다.");
		}
	}

	private boolean isFormatWrong(Map<String, String> payload) {
		return Stream.of("type", "expiration", "id").noneMatch(payload::containsKey);
	}

	private boolean isNotAccessToken(Map<String, String> payload) {
		return !payload.get("type").equals(TokenType.LOGIN_ACCESS.getKey());
	}

	private boolean isExpired(Map<String, String> payload) {
		String expiration = payload.get("expiration");
		if (expiration == null) {
			return true;
		}
		long expirationTime = Long.parseLong(expiration);
		return expirationTime < System.currentTimeMillis();
	}
}
