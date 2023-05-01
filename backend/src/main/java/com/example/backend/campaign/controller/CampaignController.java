package com.example.backend.campaign.controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.backend.campaign.dto.RegisterCampaign;
import com.example.backend.campaign.service.CampaignService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RequestMapping("/campaigns")
@RestController
public class CampaignController {

    private final CampaignService campaignService;

    @Operation(summary = "캠페인 등록")
    @ApiResponse(responseCode = "200")
    @PostMapping(value = "/register",
        consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<RegisterCampaign.Response> register(
        @RequestPart @Validated RegisterCampaign.Request request,
        @RequestPart MultipartFile coverImage,
        @RequestPart List<MultipartFile> detailImages) {
        RegisterCampaign.Response response = campaignService.register(request);

        return ResponseEntity.ok(response);
    }
}
