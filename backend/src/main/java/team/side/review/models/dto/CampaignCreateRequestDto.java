package team.side.review.models.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.apache.commons.lang3.StringUtils;
import team.side.review.models.entity.Campaign;
import team.side.review.models.enums.CampaignType;
import team.side.review.models.enums.ChannelType;

import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.Future;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@Getter
@ToString
@EqualsAndHashCode
@ApiModel(value = "체험단 등록 요청 정보", description = "체험단 등록 요청 정보")
public class CampaignCreateRequestDto {

    @NotNull(message = "체험유형은 필수 입력입니다.")
    @ApiModelProperty(value = "체험유형", required = true)
    private CampaignType campaignType;

    @NotBlank(message = "카테고리는 필수 입력입니다.")
    @ApiModelProperty(value = "카테고리 ID", required = true)
    private String category;

    @NotNull(message = "SNS유형은 필수 입니다.")
    @ApiModelProperty(value = "SNS 채널 유형", required = true)
    private ChannelType channelType;

    @NotBlank(message = "제목은 필수 입력입니다.")
    @ApiModelProperty(value = "제목", required = true)
    private String name;

    @NotNull(message = "신청시작일시는 필수 입력입니다.")
    @ApiModelProperty(value = "신청시작일시", required = true)
    private LocalDateTime regStartDateTime; //신청시작일시는 오늘 등록가능할까?

    @NotNull
    @Future(message = "신청종료일시는 현재일시 이후로 등록 가능합니다.")
    @ApiModelProperty(value = "신청종료일시", required = true)
    private LocalDateTime regEndDateTime;

    @NotNull
    @Future(message = "발표기간은 현재일시 이후로 등록 가능합니다.")
    @ApiModelProperty(value = "발표일시", required = true)
    private LocalDateTime noticeDateTime;

    @NotNull
    @Future(message = "체험기간은 현재일시 이후로 등록 가능합니다.")
    @ApiModelProperty(value = "체험시작일시", required = true)
    private LocalDateTime expStartDateTime;

    @NotNull
    @Future(message = "체험기간은 현재일시 이후로 등록 가능합니다.")
    @ApiModelProperty(value = "체험종료일시", required = true)
    private LocalDateTime expEndDateTime;

    @NotBlank(message = "제공상품 내용은 필수 입력입니다.")
    @ApiModelProperty(value = "제공 상품 내용", required = true)
    private String campaignDescription;

    @NotBlank(message = "내용은 필수 입력입니다.")
    @ApiModelProperty(value = "내용", required = true)
    private String content;

    @Min(value = 1, message = "모집인원은 1명이상 등록 가능합니다.")
    @ApiModelProperty(value = "모집인원", required = true, dataType = "int")
    private int recruitNumber;

    @Size(min = 1, max = 5, message = "태그는 1~5개 등록 가능합니다.")
    @NotNull(message = "태그는 필수입니다.")
    @ApiModelProperty(value = "태그 리스트", required = true, notes = "태그는 1~5개")
    private List<String> searchTags;

    @ApiModelProperty(value = "주소", notes = "방문형에는 주소가 필수입니다.")
    private String location;

    @NotBlank(message = "URL 입력은 필수 입니다.")
    @ApiModelProperty(value = "URL", required = true)
    private String siteUrl;

    @Size(min = 1, max = 4, message = "이미지는 1~4개 등록 가능합니다.")
    @NotNull(message = "이미지 1개는 필수입니다.")
    @ApiModelProperty(value = "이미지 리스트", required = true, notes = "이미지 리스트는 1~4개")
    private List<String> imageUrls;

    @AssertTrue(message = "방문형에는 주소가 필수입니다.")
    private boolean isValidLocation() {
        if (campaignType != CampaignType.VISIT) {
            return true;
        }
        return StringUtils.isNotBlank(location);
    }

    @AssertTrue(message = "신청종료일시는 신청시작일시 이후이어야 합니다.")
    private boolean isRegEndDateTimeAfterRegStartDateTime() {
        return regStartDateTime != null && regEndDateTime.isAfter(regStartDateTime);
    }

    @AssertTrue(message = "발표기간은 신청종료일시 이후여야 합니다.")
    private boolean isNoticeDateTimeAfterRegEndDateTime() {
        return noticeDateTime.isAfter(regEndDateTime);
    }

    @AssertTrue(message = "체험시작일시는 발표기간 이후이어야 합니다.")
    private boolean isExpStartDateTimeAfterNoticeDateTime() {
        return expStartDateTime.isAfter(noticeDateTime);
    }

    @AssertTrue(message = "체험종료일시는 체험시작일시 이후여야 합니다.")
    private boolean isExpEndDateTimeAfterExpStartDateTime() {
        return expEndDateTime.isAfter(expStartDateTime);
    }

    public Campaign toEntity() {
        Campaign campaign = Campaign.builder()
                .campaignType(this.campaignType)
                .channelType(this.channelType)
                .category(this.category)
                .name(this.name)
                .regStartDateTime(this.regStartDateTime)
                .regEndDateTime(this.regEndDateTime)
                .noticeDateTime(this.noticeDateTime)
                .expStartDateTime(this.expStartDateTime)
                .expEndDateTime(this.expEndDateTime)
                .content(this.content)
                .campaignDescription(this.campaignDescription)
                .recruitNumber(this.recruitNumber)
                .location(this.location)
                .siteUrl(this.siteUrl)
                .build();

        for (String tag : searchTags) {
            campaign.addCampaignTag(tag);
        }
        for(String imageUrl : imageUrls) {
            campaign.addCampaignImage(imageUrl);
        }

        return campaign;
    }
}