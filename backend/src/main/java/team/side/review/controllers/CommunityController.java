package team.side.review.controllers;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import team.side.review.models.dto.*;
import team.side.review.services.CommunityService;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/community")
@RequiredArgsConstructor
@Api(value = "커뮤니티 API")
public class CommunityController {

    private final CommunityService communityService;

    @GetMapping("/")
    @ApiOperation(value = "메인페이지 조회")
    public List<CommunityMainResponseDto> mainPage(){
        List<CommunityMainResponseDto> list = communityService.mainPage();
        return list;
    }

    @PostMapping("/edit")
    @ApiOperation("커뮤니티 글 작성")
    public ResponseEntity<ResponseDto<CommunityEditResponseDto>> edit(@RequestBody CommunityEditRequestDto
                                                                                  communityEditRequestDto){

        CommunityEditResponseDto communityEditResponseDto = communityService.edit(communityEditRequestDto);

        return ResponseEntity.ok(ResponseDto.success(communityEditResponseDto));
    }

    @GetMapping("/{communityId}")
    @ApiOperation(value = "커뮤니티 상세 페이지")
    public ResponseEntity<ResponseDto<CommunityDetailResponseDto>> detail(@PathVariable Long communityId){
        CommunityDetailResponseDto communityDetailResponseDto = communityService.detail(communityId);
        return ResponseEntity.ok(ResponseDto.success(communityDetailResponseDto));
    }

}
