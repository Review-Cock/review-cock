package com.example.backend.campaign.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.example.backend.campaign.domain.Campaign;
import com.example.backend.campaign.domain.Participant;
import com.example.backend.campaign.dto.request.RegisterCampaignRequest;
import com.example.backend.campaign.dto.response.CampaignResponse;
import com.example.backend.campaign.dto.response.DeadlineCampaignResponse;
import com.example.backend.campaign.dto.response.PopularCampaignResponse;
import com.example.backend.campaign.repository.CampaignRepository;
import com.example.backend.common.exception.campaign.CampaignNotFoundException;
import com.example.backend.common.exception.campaign.CampaignNotParticipateException;
import com.example.backend.file.service.FileService;
import com.example.backend.keyword.service.KeywordService;
import com.example.backend.user.domain.User;
import com.example.backend.user.service.UserService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class CampaignService {

    private final CampaignRepository campaignRepository;
    private final UserService userService;
    private final KeywordService keywordService;
    private final FileService fileService;

    @Transactional
    public void register(Long hostId, RegisterCampaignRequest request, List<MultipartFile> images) {
        User host = userService.findById(hostId);
        Campaign campaign = Campaign.builder()
            .host(host)
            .category(request.getCategory())
            .title(request.getTitle())
            .description(request.getDescription())
            .content(request.getContent())
            .recruitNumber(request.getRecruitNumber())
            .address(request.getAddress())
            .type(request.getType())
            .channelType(request.getChannelType())
            .siteUrl(request.getSiteUrl())
            .registrationStartDate(request.getRegistrationStartDate())
            .registrationEndDate(request.getRegistrationEndDate())
            .presentationDate(request.getPresentationDate())
            .experienceStartDate(request.getExperienceStartDate())
            .experienceEndDate(request.getExperienceEndDate())
            .build();
        campaignRepository.save(campaign);
        fileService.saveCampaignImages(campaign, images);
        request.getKeywords().stream()
            .map(keywordTitle -> keywordService.findOrCreate(keywordTitle))
            .forEach(keyword -> keywordService.saveCampaignKeywords(campaign, keyword));
    }

    public List<PopularCampaignResponse> popular() {
        List<Campaign> campaigns = campaignRepository.findPopular(PageRequest.of(0, 20));

        return PopularCampaignResponse.listOf(campaigns);
    }

    public List<DeadlineCampaignResponse> deadline() {
        List<Campaign> campaigns = new ArrayList<>();
        campaigns.addAll(campaignRepository.findDeadlineAccommodation(PageRequest.of(0, 4)));
        campaigns.addAll(campaignRepository.findDeadlineLife(PageRequest.of(0, 4)));
        campaigns.addAll(campaignRepository.findDeadlineService(PageRequest.of(0, 4)));
        campaigns.addAll(campaignRepository.findDeadlineFamousRestaurant(PageRequest.of(0, 4)));

        return DeadlineCampaignResponse.listOf(campaigns);
    }

    public CampaignResponse detail(String uuid) {
        Campaign campaign = campaignRepository.findByNo(uuid)
            .orElseThrow(CampaignNotFoundException::new);

        return CampaignResponse.of(campaign);
    }

    @Transactional
    public void participate(String no, Long userId, String snsLink) {
        Campaign campaign = campaignRepository.findByNo(no)
            .orElseThrow(CampaignNotFoundException::new);
        User user = userService.findById(userId);
        if (campaign.getParticipants().contains(user) ||
            campaign.getHost().equals(user)) {
            // TODO: 참가 기간 validation
            throw new CampaignNotParticipateException();
        }
        campaign.addParticipant(Participant.builder()
            .user(user)
            .campaign(campaign)
            .snsLink(snsLink)
            .build());
    }
}
