package team.side.review.models.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import team.side.review.models.enums.CampaignType;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@EqualsAndHashCode
@ToString
@AllArgsConstructor
@ApiModel(value = "체험단 상세 조회 응답", description = "체험단 상세 조회 응답 정보")
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

    //TODO :: API 응답 테스트 샘플
    public static CampaignDetailResponseDto createSample() {
        Long campaignId = 0L;
        CampaignType campaignType = CampaignType.VISIT;
        String category = "카테고리_ID";
        String name = "캠페인 제목";
        LocalDateTime regStartDateTime = LocalDateTime.now();
        LocalDateTime regEndDateTime = LocalDateTime.now().plusDays(10);
        LocalDateTime noticeDateTime = LocalDateTime.now().plusDays(20);
        LocalDateTime expStartDateTime = LocalDateTime.now().plusDays(30);
        LocalDateTime expEndDateTime = LocalDateTime.now().plusDays(40);
        String content = "캠페인 내용";
        int recruitNumber = 100;
        List<String> searchTags = List.of("태그1", "태그2");
        String location = "서울시 강남구";
        String siteUrl = "https://example.com/test";
        List<String> imageUrls = List.of("https://example.com/image1.jpg", "https://example.com/image2.jpg");

        return new CampaignDetailResponseDto(campaignId, campaignType, category, name, regStartDateTime,
                regEndDateTime, noticeDateTime, expStartDateTime, expEndDateTime, content, recruitNumber,
                searchTags, location, siteUrl, imageUrls);
    }
}
