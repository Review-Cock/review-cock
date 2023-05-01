package com.example.backend.campaign.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.campaign.dto.RegisterCampaign;
import com.example.backend.campaign.service.CampaignService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RequestMapping("/campaigns")
@RestController
public class CampaignController {

    private final CampaignService campaignService;

    @PostMapping("/register")
    public ResponseEntity<RegisterCampaign.Response> register(@RequestBody @Validated RegisterCampaign.Request request) {
        RegisterCampaign.Response response = campaignService.register(request);

        return ResponseEntity.ok(response);
    }
}
