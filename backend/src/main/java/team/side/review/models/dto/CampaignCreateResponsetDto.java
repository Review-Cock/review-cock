package team.side.review.models.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@Getter
@EqualsAndHashCode
@ToString
@ApiModel(value = "체험단 등록 응답 정보", description = "체험단 등록 응답 정보")
public class CampaignCreateResponsetDto {
    @ApiModelProperty(value = "체험단ID")
    private final Long campaignId;

    public CampaignCreateResponsetDto(Long campaignId) {
        this.campaignId = campaignId;
    }
}
