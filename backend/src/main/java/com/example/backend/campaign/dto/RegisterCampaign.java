package com.example.backend.campaign.dto;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import com.example.backend.campaign.domain.Campaign;
import com.example.backend.campaign.domain.CampaignAddress;
import com.example.backend.campaign.domain.CampaignCategory;
import com.example.backend.campaign.domain.CampaignChannelType;
import com.example.backend.campaign.domain.CampaignDate;
import com.example.backend.campaign.domain.CampaignType;
import com.example.backend.config.common.ValidEnum;

import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class RegisterCampaign {

    @Getter
    @NoArgsConstructor(access = AccessLevel.PRIVATE)
    public static class Request {

        @ValidEnum(message = "올바른 카테고리를 입력해주세요.", enumClass = CampaignCategory.class)
        private CampaignCategory category;
        @NotBlank(message = "제목 입력은 필수입니다.")
        private String title;
        @NotBlank(message = "설명 입력은 필수입니다.")
        private String description;
        @NotBlank(message = "내용 입력은 필수입니다.")
        private String content;
        @Positive(message = "모집 인원은 양수여야 합니다.")
        private int recruitNumber;
        @NotBlank(message = "우편번호 입력은 필수입니다.")
        private String zipcode;
        @NotBlank(message = "주소 입력은 필수입니다.")
        private String address;
        private String detailAddress;
        @ValidEnum(message = "올바른 타입을 입력해주세요.", enumClass = CampaignType.class)
        private CampaignType type;
        @ValidEnum(message = "올바른 채널 타입을 입력해주세요.", enumClass = CampaignChannelType.class)
        private CampaignChannelType channelType;
        @NotBlank(message = "사이트 입력은 필수입니다.")
        private String siteUrl;
        @FutureOrPresent(message = "등록일은 현재 시간 이후여야 합니다.")
        private LocalDate registrationStartDate;
        @FutureOrPresent(message = "등록일은 현재 시간 이후여야 합니다.")
        private LocalDate registrationEndDate;
        @FutureOrPresent(message = "발표일은 현재 시간 이후여야 합니다.")
        private LocalDate presentationDate;
        @FutureOrPresent(message = "체험 시작일은 현재 시간 이후여야 합니다.")
        private LocalDate experienceStartDate;
        @FutureOrPresent(message = "체험 종료일은 현재 시간 이후여야 합니다.")
        private LocalDate experienceEndDate;

        public Campaign toEntity() {
            CampaignAddress campaignAddress = CampaignAddress.builder()
                .zipcode(zipcode)
                .address(address)
                .detailAddress(detailAddress)
                .build();
            CampaignDate registrationDate = CampaignDate.builder()
                .startDate(registrationStartDate)
                .endDate(registrationEndDate)
                .build();
            CampaignDate experienceDate = CampaignDate.builder()
                .startDate(experienceStartDate)
                .endDate(experienceEndDate)
                .build();

            return Campaign.builder()
                .category(category)
                .title(title)
                .description(description)
                .content(content)
                .recruitNumber(recruitNumber)
                .address(campaignAddress)
                .type(type)
                .channelType(channelType)
                .siteUrl(siteUrl)
                .registrationDate(registrationDate)
                .presentationDate(presentationDate)
                .experienceDate(experienceDate)
                .build();
        }
    }

    @Getter
    @Builder
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    public static class Response {

        private CampaignCategory category;
        private String title;
        private String description;
        private String content;
        private int recruitNumber;
        private CampaignAddress address;
        private CampaignType type;
        private CampaignChannelType channelType;
        private String siteUrl;
        private CampaignDate registrationDate;
        private LocalDate presentationDate;
        private CampaignDate experienceDate;

        public static Response of(Campaign campaign) {
            return Response.builder()
                .category(campaign.getCategory())
                .title(campaign.getTitle())
                .description(campaign.getDescription())
                .content(campaign.getContent())
                .recruitNumber(campaign.getRecruitNumber())
                .address(campaign.getAddress())
                .type(campaign.getType())
                .channelType(campaign.getChannelType())
                .siteUrl(campaign.getSiteUrl())
                .registrationDate(campaign.getRegistrationDate())
                .presentationDate(campaign.getPresentationDate())
                .experienceDate(campaign.getExperienceDate())
                .build();
        }

        public static List<Response> listOf(List<Campaign> campaigns) {
            return campaigns.stream()
                .map(Response::of)
                .collect(Collectors.toList());
        }
    }
}
