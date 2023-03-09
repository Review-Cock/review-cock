package team.side.review.controllers;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team.side.review.models.dto.CampaignCreateRequestDto;
import team.side.review.models.dto.CampaignCreateResponsetDto;
import team.side.review.models.dto.ErrorResponseDto;
import team.side.review.models.dto.ResponseDto;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/campaign")
@Slf4j
@Api(value = "체험단 API", description = "체험단 조회, 등록, 삭제")
public class CampaignController {

    @PostMapping
    @ApiOperation(value = "등록 API", notes = "체험단 등록")
    @ApiResponses(value = {
            @ApiResponse(code = 400, message = "클라이언트 잘못된 요청", response = ErrorResponseDto.class),
    })
    public ResponseEntity<ResponseDto<CampaignCreateResponsetDto>> createCampaign(
            @RequestBody @Valid CampaignCreateRequestDto requestDTO) {

        // TODO: 캠페인 생성 로직 구현

        CampaignCreateResponsetDto responsetDto = new CampaignCreateResponsetDto(1L);
        return ResponseEntity.ok(ResponseDto.success(responsetDto));
    }
    @DeleteMapping("/{campaignId}")
    @ApiOperation(value = "삭제 API", notes = "체험단 삭제")
    public ResponseEntity<ResponseDto<Long>> deleteCampaign(@PathVariable Long campaignId) {

        // TODO: campaignId에 해당하는 캠페인 삭제 로직 구현

        return ResponseEntity.ok(ResponseDto.success(campaignId));
    }
}
