package com.example.backend.campaign.service;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.example.backend.campaign.domain.Campaign;
import com.example.backend.campaign.domain.CampaignKeyword;
import com.example.backend.campaign.dto.DeadlineCampaign;
import com.example.backend.campaign.dto.DetailCampaign;
import com.example.backend.campaign.dto.PopularCampaign;
import com.example.backend.campaign.dto.RegisterCampaign;
import com.example.backend.campaign.repository.CampaignRepository;
import com.example.backend.file.service.FileService;
import com.example.backend.keyword.service.KeywordService;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Transactional
@Service
public class CampaignService {

    private final CampaignRepository campaignRepository;
    private final KeywordService keywordService;
    private final FileService fileService;

    public void register(RegisterCampaign.Request request, MultipartFile coverImage, List<MultipartFile> detailImages) {
        Campaign campaign = request.toEntity();
        campaignRepository.save(campaign);
        fileService.saveCampaignImages(campaign, coverImage, detailImages);
        request.getKeywords().stream()
            .map(keywordTitle -> keywordService.findOrCreate(keywordTitle))
            .forEach(keyword -> keywordService.saveCampaignKeywords(campaign, keyword));
    }

    public List<PopularCampaign.Response> popular() {
        List<Campaign> campaigns = campaignRepository.findPopular(PageRequest.of(0, 5));

        return PopularCampaign.Response.listOf(campaigns);
    }

    public List<DeadlineCampaign.Response> deadline() {
        List<Campaign> campaigns = campaignRepository.findDeadline(PageRequest.of(0, 5));

        return DeadlineCampaign.Response.listOf(campaigns);
    }

    public DetailCampaign.Response detail(String uuid) {
        Campaign campaign = campaignRepository.findByNo(uuid)
            .orElseThrow(EntityNotFoundException::new); // TODO: Adds Custom Exception

        return DetailCampaign.Response.of(campaign);
    }
}
