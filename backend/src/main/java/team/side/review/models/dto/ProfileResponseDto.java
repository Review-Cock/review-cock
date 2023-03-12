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
@ApiModel(value = "프로필 응답")
public class ProfileResponseDto {

    @ApiModelProperty(value = "닉네임")
    private String nickname;

    @ApiModelProperty(value = "캠페인 신청리스트", notes = "캠페인 이름, 대표이미지, 발표일")
    private List<UserCampaignDto> campaignList;

    @Builder
    public ProfileResponseDto(String nickname, List<UserCampaignDto> campaignList) {
        this.nickname = nickname;
        this.campaignList = campaignList;
    }

}
