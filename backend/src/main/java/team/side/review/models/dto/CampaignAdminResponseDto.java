package team.side.review.models.dto;


import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ApiModel(value = "체험단 관리 응답")
public class CampaignAdminResponseDto {

    @ApiModelProperty(value = "닉네임")
    private String nickname;

    @ApiModelProperty(value = "캠페인 리스트")
    private List<RecruitDto> campaignList;

    @ApiModelProperty(value = "신청 리스트")
    private List<RegDto> regList;

    @Builder
    public CampaignAdminResponseDto(String nickname, List<RecruitDto> campaignList, List<RegDto> regList) {
        this.nickname = nickname;
        this.campaignList = campaignList;
        this.regList = regList;
    }
}
