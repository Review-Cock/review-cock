package team.side.review.models.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import team.side.review.models.entity.Campaign;
import team.side.review.models.entity.CampaignImage;
import team.side.review.models.entity.CampaignTag;
import team.side.review.models.enums.CampaignType;
import team.side.review.models.enums.ChannelType;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@EqualsAndHashCode
@ToString
@AllArgsConstructor
@ApiModel(value = "체험단 상세 조회 응답", description = "체험단 상세 조회 응답 정보")
@Builder
public class CampaignDetailResponseDto {

    @ApiModelProperty(value = "체험단ID", required = true)
    private Long campaignId;

    @ApiModelProperty(value = "체험유형", required = true)
    private CampaignType campaignType;

    @ApiModelProperty(value = "카테고리 ID", required = true)
    private String category;

    @ApiModelProperty(value = "제목", required = true)
    private String name;

    @ApiModelProperty(value = "신청시작일시", required = true)
    private LocalDateTime regStartDateTime;

    @ApiModelProperty(value = "신청종료일시", required = true)
    private LocalDateTime regEndDateTime;

    @ApiModelProperty(value = "발표일시", required = true)
    private LocalDateTime noticeDateTime;

    @ApiModelProperty(value = "체험시작일시", required = true)
    private LocalDateTime expStartDateTime;

    @ApiModelProperty(value = "체험종료일시", required = true)
    private LocalDateTime expEndDateTime;

    @ApiModelProperty(value = "내용", required = true)
    private String content;

    @ApiModelProperty(value = "모집인원", required = true)
    private int recruitNumber;

    @ApiModelProperty(value = "태그 리스트", required = true)
    private List<String> searchTags;

    @ApiModelProperty(value = "주소", notes = "방문형에만 주소가 있음")
    private String location;

    @ApiModelProperty(value = "URL", required = true)
    private String siteUrl;

    @ApiModelProperty(value = "이미지 리스트", required = true, notes = "이미지 리스트는 1~4개")
    private List<String> imageUrls;

    @ApiModelProperty(value = "SNS 채널 유형", required = true)
    private ChannelType channelType;

    @ApiModelProperty(value = "제공 상품 내용", required = true)
    private String campaignDescription;


    public static CampaignDetailResponseDto of(Campaign campaign) {
        return CampaignDetailResponseDto.builder()
                .campaignId(campaign.getId())
                .campaignType(campaign.getCampaignType())
                .category(campaign.getCategory())
                .name(campaign.getName())
                .regStartDateTime(campaign.getRegStartDateTime())
                .regEndDateTime(campaign.getRegEndDateTime())
                .noticeDateTime(campaign.getNoticeDateTime())
                .expStartDateTime(campaign.getExpStartDateTime())
                .expEndDateTime(campaign.getExpEndDateTime())
                .content(campaign.getContent())
                .recruitNumber(campaign.getRecruitNumber())
                .searchTags(campaign.getSearchTags().stream().map(CampaignTag::getTag).collect(Collectors.toList()))
                .location(campaign.getLocation())
                .siteUrl(campaign.getSiteUrl())
                .imageUrls(campaign.getImageUrls().stream().map(CampaignImage::getImageUrl).collect(Collectors.toList()))
                .channelType(campaign.getChannelType())
                .campaignDescription(campaign.getCampaignDescription())
                .build();
    }
}
