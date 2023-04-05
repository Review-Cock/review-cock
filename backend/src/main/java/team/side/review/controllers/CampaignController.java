package team.side.review.controllers;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import team.side.review.models.dto.CampaignCreateRequestDto;
import team.side.review.models.dto.CampaignCreateResponsetDto;
import team.side.review.models.dto.CampaignDetailResponseDto;
import team.side.review.models.dto.ErrorResponseDto;
import team.side.review.models.dto.ResponseDto;
import team.side.review.models.enums.CampaignType;
import team.side.review.services.CampaignService;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/campaign")
@RequiredArgsConstructor
@Slf4j
@Api(value = "체험단 API", description = "체험단 조회, 등록, 삭제")
public class CampaignController {

    private final CampaignService campaignService;

    @PostMapping
    @ApiOperation(value = "등록 API", notes = "체험단 등록")
    @ApiResponses(value = {
            @ApiResponse(code = 400, message = "클라이언트 잘못된 요청", response = ErrorResponseDto.class),
    })
    public ResponseEntity<ResponseDto<CampaignCreateResponsetDto>> createCampaign(
            @RequestBody @Valid CampaignCreateRequestDto requestDTO) {

        Long campaignId = campaignService.saveCampaign(requestDTO.toEntity());
        return ResponseEntity.ok(ResponseDto.success(new CampaignCreateResponsetDto(campaignId)));
    }
    @DeleteMapping("/{campaignId}")
    @ApiOperation(value = "삭제 API", notes = "체험단 삭제")
    public ResponseEntity<ResponseDto<Long>> deleteCampaign(@PathVariable Long campaignId) {

        // TODO: campaignId에 해당하는 캠페인 삭제 로직 구현

        return ResponseEntity.ok(ResponseDto.success(campaignId));
    }

    @GetMapping("/{campaignId}")
    @ApiOperation(value = "상세 조회 API", notes = "체험단 상세 조회")
    @ApiResponses(value = {
            @ApiResponse(code = 400, message = "존재하지 않는 체험단 입니다.", response = ErrorResponseDto.class),
    })
    public ResponseEntity<ResponseDto<CampaignDetailResponseDto>> getCampaign(@PathVariable Long campaignId) {
        return ResponseEntity.ok(ResponseDto.success(campaignService.getCampaign(campaignId)));
    }

    @GetMapping
    @ApiOperation(value = "리스트 조회 API", notes = "체험단 리스트 조회")
    public ResponseEntity<ResponseDto<Page<CampaignDetailResponseDto>>> getCampaignList(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) CampaignType campaignType) {

        Page<CampaignDetailResponseDto> responseList = campaignService.getCampaignList(page, size, campaignType);
        return ResponseEntity.ok(ResponseDto.success(responseList));
    }
}
