package team.side.review.services;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import team.side.review.models.dto.LoginResponseDto;
import team.side.review.models.entity.User;
import team.side.review.repositories.UserRepository;

import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public LoginResponseDto login(){
        //TODO : login 구현
        User user = userRepository.findById(1L);
        
    }



}
