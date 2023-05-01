package com.example.backend.campaign.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.backend.campaign.domain.Campaign;
import com.example.backend.campaign.dto.RegisterCampaign;
import com.example.backend.campaign.repository.CampaignRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Transactional
@Service
public class CampaignService {

    private final CampaignRepository campaignRepository;

    public RegisterCampaign.Response register(RegisterCampaign.Request request) {
        Campaign campaign = request.toEntity();
        campaignRepository.save(campaign);

        return RegisterCampaign.Response.of(campaign);
    }
}
