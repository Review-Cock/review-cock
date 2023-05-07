package com.example.backend.campaign.dto;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import com.example.backend.campaign.domain.Campaign;
import com.example.backend.campaign.domain.CampaignCategory;
import com.example.backend.campaign.domain.CampaignChannelType;
import com.example.backend.campaign.domain.CampaignImage;
import com.example.backend.campaign.domain.CampaignKeyword;
import com.example.backend.campaign.domain.CampaignType;
import com.example.backend.keyword.domain.Keyword;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

public class DeadlineCampaign {

    @Getter
    @Builder
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    public static class Response {

        private String no;
        private CampaignCategory category;
        private String title;
        private String content;
        private int recruitNumber;
        private int applyNumber;
        private CampaignType type;
        private CampaignChannelType channelType;
        private Set<String> imagePaths;

        public static Response of(Campaign campaign) {
            Set<String> imagePaths = campaign.getImages().stream()
                .map(CampaignImage::getFile)
                .map(file -> file.getSavedName())
                .collect(Collectors.toSet());

            return Response.builder()
                .no(campaign.getNo())
                .category(campaign.getCategory())
                .title(campaign.getTitle())
                .content(campaign.getContent())
                .recruitNumber(campaign.getRecruitNumber())
                .applyNumber(campaign.getApplyNumber())
                .type(campaign.getType())
                .channelType(campaign.getChannelType())
                .imagePaths(imagePaths)
                .build();
        }

        public static List<Response> listOf(List<Campaign> campaigns) {
            return campaigns.stream()
                .map(Response::of)
                .collect(Collectors.toList());
        }
    }
}
