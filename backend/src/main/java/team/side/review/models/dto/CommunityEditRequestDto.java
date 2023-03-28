package team.side.review.models.dto;


import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ApiModel(value = "커뮤니티 작성 페이지")
public class CommunityEditRequestDto {

    @ApiModelProperty(value = "글 제목")
    private String title;

    @ApiModelProperty(value = "글 내용")
    private String content;

    @Builder
    public CommunityEditRequestDto(String title, String content) {
        this.title = title;
        this.content = content;
    }
}
