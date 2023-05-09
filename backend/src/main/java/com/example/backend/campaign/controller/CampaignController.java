package com.example.backend.campaign.controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.backend.campaign.dto.DeadlineCampaign;
import com.example.backend.campaign.dto.DetailCampaign;
import com.example.backend.campaign.dto.PopularCampaign;
import com.example.backend.campaign.dto.RegisterCampaign;
import com.example.backend.campaign.service.CampaignService;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RequestMapping("/campaigns")
@RestController
public class CampaignController {

    private final CampaignService campaignService;

    @Operation(summary = "캠페인 등록")
    @PostMapping(value = "/register",
        consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Void> register(
        @RequestPart @Validated RegisterCampaign.Request request,
        @RequestPart List<MultipartFile> images) {
        campaignService.register(request, images);

        return ResponseEntity.ok().build();
    }

    @Operation(summary = "핫 캠페인 목록 조회")
    @GetMapping("/popular")
    public ResponseEntity<List<PopularCampaign.Response>> popular() {
        List<PopularCampaign.Response> response = campaignService.popular();

        return ResponseEntity.ok(response);
    }

    @Operation(summary = "마감 임박 캠페인 목록 조회")
    @GetMapping("/deadline")
    public ResponseEntity<List<DeadlineCampaign.Response>> deadline() {
        List<DeadlineCampaign.Response> response = campaignService.deadline();

        return ResponseEntity.ok(response);
    }


    @Operation(summary = "캠페인 상세 조회")
    @GetMapping("/detail")
    public ResponseEntity<DetailCampaign.Response> detail(@RequestParam("no") String uuid) {
        DetailCampaign.Response response = campaignService.detail(uuid);

        return ResponseEntity.ok(response);
    }
}
