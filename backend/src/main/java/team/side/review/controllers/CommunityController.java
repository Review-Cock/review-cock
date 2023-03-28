package team.side.review.controllers;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import team.side.review.models.dto.*;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/community")
@Api(value = "커뮤니티 API")
public class CommunityController {

    @GetMapping("/")
    @ApiOperation(value = "메인페이지 조회")
    public List<CommunityMainResponseDto> mainPage(){
        // TODO : CommunityService 구현
        List<CommunityMainResponseDto> list = new ArrayList<>();
        return list;
    }

    @PostMapping("/edit")
    @ApiOperation("커뮤니티 글 작성")
    public ResponseEntity<ResponseDto<CommunityEditResponseDto>> edit(@RequestBody CommunityEditRequestDto
                                                                                  communityEditRequestDto){
        // TODO : CommunityService 구현
        CommunityEditResponseDto communityEditResponseDto = new CommunityEditResponseDto("success");

        return ResponseEntity.ok(ResponseDto.success(communityEditResponseDto));
    }

    @GetMapping("/{communityId}")
    @ApiOperation(value = "커뮤니티 상세 페이지")
    public ResponseEntity<ResponseDto<CommunityDetailResponseDto>> detail(@PathVariable Long communityId){
        //TODO : CommunityService 구현
        CommunityDetailResponseDto communityDetailResponseDto =
                new CommunityDetailResponseDto("example", "wow", "me", null);
        return ResponseEntity.ok(ResponseDto.success(communityDetailResponseDto));
    }

}
