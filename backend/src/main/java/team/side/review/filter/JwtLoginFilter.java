package team.side.review.filter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;

import team.side.review.models.entity.User;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtLoginFilter{}// extends UsernamePasswordAuthenticationFilter {
//
//    public JwtLoginFilter(AuthenticationManager authenticationManager) {
//        super(authenticationManager);
//    }
//
//    @Override
//    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) {
//        try {
//            User user = (User) authResult.getPrincipal();
//            String username = user.getUsername(); // 아이디
//
//            // JWT 생성
//            Algorithm algorithm = Algorithm.HMAC256("secret");
//            String accessToken = JWT.create()
//                    .withIssuer("issuer")
//                    .withSubject(username)
//                    .sign(algorithm);
//
//            response.getWriter().write(accessToken);
//        } catch (JWTCreationException | IOException exception) {
//            exception.printStackTrace();
//        }
//    }
//}
