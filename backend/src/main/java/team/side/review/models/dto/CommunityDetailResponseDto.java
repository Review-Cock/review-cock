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
@ApiModel(value = "커뮤니티 상세 페이지 응답")
public class CommunityDetailResponseDto {

    @ApiModelProperty(value = "글 제목")
    private String title;

    @ApiModelProperty(value = "글 내용")
    private String content;

    @ApiModelProperty(value = "글 작성자")
    private String author;

    @ApiModelProperty(value = "댓글 리스트")
    private List<CommentDto> commentList;

    @Builder
    public CommunityDetailResponseDto(String title, String content, String author, List<CommentDto> commentList) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.commentList = commentList;
    }
}
