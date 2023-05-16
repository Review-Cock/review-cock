package com.example.backend.campaign.controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.backend.auth.support.Authenticated;
import com.example.backend.auth.support.AuthenticationPrincipal;
import com.example.backend.campaign.dto.request.RegisterCampaignRequest;
import com.example.backend.campaign.dto.response.CampaignResponse;
import com.example.backend.campaign.dto.response.DeadlineCampaignResponse;
import com.example.backend.campaign.dto.response.PopularCampaignResponse;
import com.example.backend.campaign.service.CampaignService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RequestMapping("/campaigns")
@RestController
public class CampaignController {

    private final CampaignService campaignService;

    @Operation(summary = "캠페인 등록")
    @Authenticated
    @PostMapping(value = "/register",
        consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<Void> register(
        @Parameter(hidden = true) @AuthenticationPrincipal Long hostId,
        @RequestPart @Validated RegisterCampaignRequest request,
        @RequestPart List<MultipartFile> images) {
        campaignService.register(hostId, request, images);

        return ResponseEntity.ok().build();
    }

    @Operation(summary = "핫 캠페인 목록 조회")
    @GetMapping("/popular")
    public ResponseEntity<List<PopularCampaignResponse>> popular() {
        List<PopularCampaignResponse> response = campaignService.popular();

        return ResponseEntity.ok(response);
    }

    @Operation(summary = "마감 임박 캠페인 목록 조회")
    @GetMapping("/deadline")
    public ResponseEntity<List<DeadlineCampaignResponse>> deadline() {
        List<DeadlineCampaignResponse> response = campaignService.deadline();

        return ResponseEntity.ok(response);
    }

    @Operation(summary = "캠페인 상세 조회")
    @Authenticated
    @GetMapping("/detail/{no}")
    public ResponseEntity<CampaignResponse> detail(@PathVariable String no) {
        CampaignResponse response = campaignService.detail(no);

        return ResponseEntity.ok(response);
    }

    @Operation(summary = "캠페인 참가")
    @Authenticated
    @PostMapping("/participates/{no}")
    public ResponseEntity<Void> participate(
        @Parameter(hidden = true) @AuthenticationPrincipal Long userId, @PathVariable String no) {
        campaignService.participate(no, userId);

        return ResponseEntity.ok().build();
    }
}
