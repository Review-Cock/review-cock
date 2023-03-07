package team.side.review.controllers;

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
import team.side.review.models.dto.ResponseDto;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/campaign")
@Slf4j
public class CampaignController {

    @PostMapping
    public ResponseEntity<ResponseDto<CampaignCreateResponsetDto>> createCampaign(
            @RequestBody @Valid CampaignCreateRequestDto requestDTO) {
        // TODO: 캠페인 생성 로직 구현
        CampaignCreateResponsetDto responsetDto = new CampaignCreateResponsetDto(1L);
        return ResponseEntity.ok(ResponseDto.success(responsetDto));
    }
    @DeleteMapping("/{campaignId}")
    public ResponseEntity<ResponseDto<Long>> deleteCampaign(@PathVariable Long campaignId) {
        // TODO: campaignId에 해당하는 캠페인 삭제 로직 구현
        return ResponseEntity.ok(ResponseDto.success(campaignId));
    }
}
