package com.example.backend.campaign.dto.request;

import java.time.LocalDate;
import java.util.Set;

import com.example.backend.campaign.domain.CampaignCategory;
import com.example.backend.campaign.domain.CampaignChannelType;
import com.example.backend.campaign.domain.CampaignType;
import com.example.backend.common.support.ValidEnum;

import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class RegisterCampaignRequest {

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
    @NotBlank(message = "주소 입력은 필수입니다.")
    private String address;
    @ValidEnum(message = "올바른 타입을 입력해주세요.", enumClass = CampaignType.class)
    private CampaignType type;
    @ValidEnum(message = "올바른 채널 타입을 입력해주세요.", enumClass = CampaignChannelType.class)
    private CampaignChannelType channelType;
    @NotBlank(message = "사이트 입력은 필수입니다.")
    private String siteUrl;
    private Set<String> keywords;
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
}
