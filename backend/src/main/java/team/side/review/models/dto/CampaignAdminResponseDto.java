package team.side.review.models.dto;


import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CampaignAdminResponseDto {

    private String nickname;

    private List<RecruitDto> campaignList;

    private List<RegDto> regList;

    @Builder
    public CampaignAdminResponseDto(String nickname, List<RecruitDto> campaignList, List<RegDto> regList) {
        this.nickname = nickname;
        this.campaignList = campaignList;
        this.regList = regList;
    }
}
