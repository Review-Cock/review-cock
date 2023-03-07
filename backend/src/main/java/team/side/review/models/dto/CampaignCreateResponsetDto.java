package team.side.review.models.dto;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@Getter
@EqualsAndHashCode
@ToString
public class CampaignCreateResponsetDto {
    private final Long campaignId;

    public CampaignCreateResponsetDto(Long campaignId) {
        this.campaignId = campaignId;
    }
}
