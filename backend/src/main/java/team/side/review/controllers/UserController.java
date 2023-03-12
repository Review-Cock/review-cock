package team.side.review.controllers;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import team.side.review.models.dto.*;

import javax.servlet.http.HttpSession;

@Slf4j
@RestController
@RequestMapping("/users")
@Api(value = "유저페이지 API")
public class UserController {

    @PostMapping("/login")
    @ApiOperation(value = "로그인 API")
    public String login(@RequestBody LoginRequestDto loginRequestDto, HttpSession httpSession){
        // TODO : LoginService 구현

        LoginResponseDto loginResponseDto = new LoginResponseDto("example@gmail.com", "success");


        return "redirect:../main";
    }

    @PostMapping("/join")
    @ApiOperation(value = "회원가입 API")
    public ResponseEntity<ResponseDto<JoinResponseDto>> join(@RequestBody JoinRequestDto joinRequestDto){
        // TODO : JoinService 구현

        JoinResponseDto joinResponseDto = new JoinResponseDto("example@gmail.com", "success");;

        return ResponseEntity.ok(ResponseDto.success(joinResponseDto));
    }

    @GetMapping("/profile")
    @ApiOperation(value = "유저프로필 API")
    public ResponseEntity<ResponseDto<ProfileResponseDto>> profile(){
        // TODO : ProfileService 구현

        ProfileResponseDto profileResponseDto = new ProfileResponseDto("example", null);

        return ResponseEntity.ok(ResponseDto.success(profileResponseDto));
    }

    @PostMapping("profile/update")
    @ApiOperation(value = "회원정보 수정 API")
    public ResponseEntity<ResponseDto<ProfileUpdateResponseDto>> profileUpdate(@RequestBody ProfileUpdateRequestDto profileUpdateRequestDto){

        ProfileUpdateResponseDto profileUpdateResponseDto = new ProfileUpdateResponseDto("example");

        return ResponseEntity.ok(ResponseDto.success(profileUpdateResponseDto));
    }


    @GetMapping("/campaign")
    @ApiOperation(value = "체험단 관리 API")
    public ResponseEntity<ResponseDto<CampaignAdminResponseDto>> campaignAdmin(){
        // TODO : CampaignAdminService 구현

        CampaignAdminResponseDto campaignAdminResponseDto = new CampaignAdminResponseDto("example", null, null);

        return ResponseEntity.ok(ResponseDto.success(campaignAdminResponseDto));

    }

}
