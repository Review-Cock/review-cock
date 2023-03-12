package team.side.review.controllers;


import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team.side.review.models.dto.*;

@Slf4j
@RestController
@RequestMapping("/users")
public class UserController {

    public ResponseEntity<ResponseDto<LoginResponseDto>> login(@RequestBody LoginRequestDto loginRequestDto){
        // TODO : LoginService 구현

        LoginResponseDto loginResponseDto = new LoginResponseDto("example@gmail.com", "success");

        return ResponseEntity.ok(ResponseDto.success(loginResponseDto));
    }


    public ResponseEntity<ResponseDto<JoinResponseDto>> join(@RequestBody JoinRequestDto joinRequestDto){
        // TODO : JoinService 구현

        JoinResponseDto joinResponseDto = new JoinResponseDto("example@gmail.com", "success");;

        return ResponseEntity.ok(ResponseDto.success(joinResponseDto));
    }



}
