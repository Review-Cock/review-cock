package team.side.review.controllers;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import team.side.review.models.dto.*;
import team.side.review.services.UserService;

import javax.servlet.http.HttpSession;

@Slf4j
@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@Api(value = "유저페이지 API")
public class UserController {

    private final UserService userService;

    @PostMapping("/login")
    @ApiOperation(value = "로그인 API")
    public ResponseEntity<ResponseDto<LoginResponseDto>> login(@RequestBody LoginRequestDto loginRequestDto){
        // TODO : LoginService 구현

        LoginResponseDto loginResponseDto = userService.login(loginRequestDto);

        return ResponseEntity.ok(ResponseDto.success(loginResponseDto));
    }

    @PostMapping("/join")
    @ApiOperation(value = "회원가입 API")
    public ResponseEntity<ResponseDto<JoinResponseDto>> join(@RequestBody JoinRequestDto joinRequestDto){

        JoinResponseDto joinResponseDto = userService.join(joinRequestDto);

        return ResponseEntity.ok(ResponseDto.success(joinResponseDto));
    }

    @GetMapping("/profile/{userId}")
    @ApiOperation(value = "유저프로필 API")
    public ResponseEntity<ResponseDto<ProfileResponseDto>> profile(@PathVariable Long userId){
        // TODO : ProfileService 구현

        ProfileResponseDto profileResponseDto = userService.profile(userId);

        return ResponseEntity.ok(ResponseDto.success(profileResponseDto));
    }

    @PostMapping("profile/update")
    @ApiOperation(value = "회원정보 수정 API")
    public ResponseEntity<ResponseDto<ProfileUpdateResponseDto>> profileUpdate(@RequestBody ProfileUpdateRequestDto profileUpdateRequestDto){

        ProfileUpdateResponseDto profileUpdateResponseDto = userService.profileUpdate(profileUpdateRequestDto);

        return ResponseEntity.ok(ResponseDto.success(profileUpdateResponseDto));
    }


    @GetMapping("/campaign/{userId}")
    @ApiOperation(value = "체험단 관리 API")
    public ResponseEntity<ResponseDto<CampaignAdminResponseDto>> campaignAdmin(@PathVariable Long userId){
        // TODO : CampaignAdminService 구현

        CampaignAdminResponseDto campaignAdminResponseDto = userService.campaignAdmin(userId);

        return ResponseEntity.ok(ResponseDto.success(campaignAdminResponseDto));

    }

}
