package team.side.review.models.dto;


import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ApiModel(value = "캠페인 신청 리스트")
public class UserCampaignDto {

    @ApiModelProperty(value = "캠페인이름")
    private String name;

    @ApiModelProperty(value = "대표 이미지 URL")
    private String imageUrl;

    @ApiModelProperty(value = "발표일")
    private LocalDateTime noticeDateTime;

    public UserCampaignDto(String name, String imageUrl, LocalDateTime noticeDateTime) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.noticeDateTime = noticeDateTime;
    }
}
