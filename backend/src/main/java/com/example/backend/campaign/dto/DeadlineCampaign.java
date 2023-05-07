package com.example.backend.campaign.dto;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import com.example.backend.campaign.domain.Campaign;
import com.example.backend.campaign.domain.CampaignCategory;
import com.example.backend.campaign.domain.CampaignImage;
import com.example.backend.campaign.domain.CampaignKeyword;
import com.example.backend.campaign.domain.CampaignType;
import com.example.backend.file.domain.File;
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
        private int recruitNumber;
        private int applyNumber;
        private CampaignType type;
        private LocalDate registrationStartDate;
        private LocalDate registrationEndDate;
        private LocalDate presentationDate;
        private LocalDate experienceStartDate;
        private LocalDate experienceEndDate;
        private Set<String> imagePaths;
        private Set<String> keywords;

        public static Response of(Campaign campaign) {
            Set<String> imagePaths = campaign.getImages().stream()
                .map(CampaignImage::getFile)
                .map(file -> file.getOriginalName())
                .collect(Collectors.toSet());
            Set<String> keywords = campaign.getKeywords().stream()
                .map(CampaignKeyword::getKeyword)
                .map(Keyword::getTitle)
                .collect(Collectors.toSet());

            return Response.builder()
                .no(campaign.getNo())
                .category(campaign.getCategory())
                .title(campaign.getTitle())
                .recruitNumber(campaign.getRecruitNumber())
                .applyNumber(campaign.getApplyNumber())
                .type(campaign.getType())
                .registrationStartDate(campaign.getRegistrationStartDate())
                .registrationEndDate(campaign.getRegistrationEndDate())
                .presentationDate(campaign.getPresentationDate())
                .experienceStartDate(campaign.getExperienceStartDate())
                .experienceEndDate(campaign.getExperienceEndDate())
                .imagePaths(imagePaths)
                .keywords(keywords)
                .build();
        }

        public static List<Response> listOf(List<Campaign> campaigns) {
            return campaigns.stream()
                .map(Response::of)
                .collect(Collectors.toList());
        }
    }
}
