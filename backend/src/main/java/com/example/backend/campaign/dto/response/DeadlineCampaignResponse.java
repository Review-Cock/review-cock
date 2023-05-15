package com.example.backend.campaign.dto.response;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import com.example.backend.campaign.domain.Campaign;
import com.example.backend.campaign.domain.CampaignCategory;
import com.example.backend.campaign.domain.CampaignChannelType;
import com.example.backend.campaign.domain.CampaignImage;
import com.example.backend.campaign.domain.CampaignType;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class DeadlineCampaignResponse {

    private String no;
    private CampaignCategory category;
    private String title;
    private String content;
    private int recruitNumber;
    private int applyNumber;
    private CampaignType type;
    private CampaignChannelType channelType;
    private Set<String> imagePaths;

    public static DeadlineCampaignResponse of(Campaign campaign) {
        Set<String> imagePaths = campaign.getImages().stream()
            .map(CampaignImage::getFile)
            .map(file -> file.getSavedName())
            .collect(Collectors.toSet());

        return DeadlineCampaignResponse.builder()
            .no(campaign.getNo())
            .category(campaign.getCategory())
            .title(campaign.getTitle())
            .content(campaign.getContent())
            .recruitNumber(campaign.getRecruitNumber())
            .applyNumber(campaign.getParticipantsSize())
            .type(campaign.getType())
            .channelType(campaign.getChannelType())
            .imagePaths(imagePaths)
            .build();
    }

    public static List<DeadlineCampaignResponse> listOf(List<Campaign> campaigns) {
        return campaigns.stream()
            .map(DeadlineCampaignResponse::of)
            .collect(Collectors.toList());
    }
}
