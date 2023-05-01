package com.example.backend.campaign.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.example.backend.campaign.domain.Campaign;
import com.example.backend.campaign.dto.RegisterCampaign;
import com.example.backend.campaign.repository.CampaignRepository;
import com.example.backend.file.service.FileService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Transactional
@Service
public class CampaignService {

    private final CampaignRepository campaignRepository;
    private final FileService fileService;

    public RegisterCampaign.Response register(
        RegisterCampaign.Request request, MultipartFile coverImage, List<MultipartFile> detailImages) {
        Campaign campaign = request.toEntity();
        campaignRepository.save(campaign);
        fileService.saveCampaignImages(campaign, coverImage, detailImages);

        return RegisterCampaign.Response.of(campaign);
    }
}
