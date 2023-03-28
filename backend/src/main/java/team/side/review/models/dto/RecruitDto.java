package team.side.review.models.dto;


import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ApiModel(value = "모집 리스트")
public class RecruitDto {

    @ApiModelProperty(value = "캠페인 이름")
    private String name;

    @ApiModelProperty(value = "대표이미지 URL")
    private String imageUrl;

    @ApiModelProperty(value = "발표일")
    private LocalDateTime noticeDateTime;

    @Builder
    public RecruitDto(String name, String imageUrl, LocalDateTime noticeDateTime) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.noticeDateTime = noticeDateTime;
    }

}
