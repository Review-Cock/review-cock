package team.side.review.filter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import team.side.review.models.entity.User;
import team.side.review.services.UserService;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

//@Component
public class JwtDecodeFilter{} //extends OncePerRequestFilter {}
//    private final UserService userDetailsService;
//
//    public JwtDecodeFilter(UserService userDetailsService) {
//        this.userDetailsService = userDetailsService;
//    }
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
//        String header = request.getHeader("Authorization"); // Authorization: Bearer aaa.bbb.ccc
//        if (header != null && header.startsWith("Bearer ")) {
//            try {
//                String accessToken = header.substring(7);
//
//                // JWT 해석
//                Algorithm algorithm = Algorithm.HMAC256("secret");
//                JWTVerifier verifier = JWT.require(algorithm).withIssuer("issuer").build();
//                DecodedJWT jwt = verifier.verify(accessToken);
//                String username = jwt.getSubject(); // 아이디(학번)
//
//                User user = (User) userDetailsService.loadUserByUsername(username);
//                Authentication authenticationToken = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
//                SecurityContextHolder.getContext().setAuthentication(authenticationToken);
//            } catch (JWTVerificationException exception) {
//                exception.printStackTrace();
//            }
//        }
//        filterChain.doFilter(request, response);
//    }
//}