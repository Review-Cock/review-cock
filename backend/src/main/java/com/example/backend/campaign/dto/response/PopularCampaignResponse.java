package com.example.backend.campaign.dto.response;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import com.example.backend.campaign.domain.Campaign;
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
public class PopularCampaignResponse {

    private String no;
    private String title;
    private String content;
    private int recruitNumber;
    private int applyNumber;
    private CampaignType type;
    private CampaignChannelType channelType;
    private Set<String> imagePaths;

    public static PopularCampaignResponse of(Campaign campaign) {
        Set<String> imagePaths = campaign.getImages().stream()
            .map(CampaignImage::getFile)
            .map(file -> file.getSavedName())
            .collect(Collectors.toSet());

        return PopularCampaignResponse.builder()
            .no(campaign.getNo())
            .title(campaign.getTitle())
            .content(campaign.getContent())
            .recruitNumber(campaign.getRecruitNumber())
            .applyNumber(campaign.getParticipantsSize())
            .type(campaign.getType())
            .channelType(campaign.getChannelType())
            .imagePaths(imagePaths)
            .build();
    }

    public static List<PopularCampaignResponse> listOf(List<Campaign> campaigns) {
        return campaigns.stream()
            .map(PopularCampaignResponse::of)
            .collect(Collectors.toList());
    }
}
