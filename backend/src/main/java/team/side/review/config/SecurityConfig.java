package team.side.review.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import team.side.review.filter.JwtDecodeFilter;
import team.side.review.filter.JwtLoginFilter;
import team.side.review.services.UserService;

//@Configuration
//@EnableWebSecurity
//@RequiredArgsConstructor
public class SecurityConfig {}
//    private final JwtDecodeFilter jwtDecodeFilter;
//    private final UserService userDetailsService;
//
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        AuthenticationManagerBuilder authenticationManagerBuilder = http.getSharedObject(AuthenticationManagerBuilder.class);
//        authenticationManagerBuilder.userDetailsService(userDetailsService);
//        AuthenticationManager authenticationManager = authenticationManagerBuilder.build();
//
//        JwtLoginFilter jwtLoginFilter = new JwtLoginFilter(authenticationManager);
//        jwtLoginFilter.setUsernameParameter("id");
//        jwtLoginFilter.setPasswordParameter("password");
//
//        return http
//                .csrf().disable()
//                .formLogin().disable()
//                .httpBasic().disable()
//                .authorizeRequests()
//                .antMatchers("/login").permitAll()
//                .anyRequest().authenticated()
//                .and()
//                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
//                .authenticationManager(authenticationManager)
//                .addFilterBefore(jwtDecodeFilter, UsernamePasswordAuthenticationFilter.class)
//                .addFilterAt(jwtLoginFilter, UsernamePasswordAuthenticationFilter.class)
//                .build();
//    }
//
//    @Bean
//    public PasswordEncoder passwordEncoder() { // 비밀번호 암호화
//        return new BCryptPasswordEncoder();
//    }
//}