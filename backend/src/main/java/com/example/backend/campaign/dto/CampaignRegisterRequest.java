package com.example.backend.campaign.dto;

import java.time.LocalDate;

import com.example.backend.campaign.domain.CampaignChannelType;
import com.example.backend.campaign.domain.CampaignType;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class CampaignRegisterRequest {

    private String category;
    private String title;
    private String description;
    private String content;
    private int recruitNumber;
    private String zipcode;
    private String address;
    private String detailAddress;
    private CampaignType type;
    private CampaignChannelType channelType;
    private String siteUrl;
    private LocalDate registrationStartDate;
    private LocalDate registrationEndDate;
    private LocalDate presentationDate;
    private LocalDate experienceStartDate;
    private LocalDate experienceEndDate;
}
