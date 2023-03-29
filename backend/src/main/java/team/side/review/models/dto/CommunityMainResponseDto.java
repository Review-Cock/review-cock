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
@ApiModel(value = "커뮤니티 메인 페이지")
public class CommunityMainResponseDto {

    @ApiModelProperty(value = "글 제목")
    private String title;

    @ApiModelProperty(value = "글쓴이")
    private String author;

    @ApiModelProperty(value = "좋아요 개수")
    private int likeCnt;

    @ApiModelProperty(value = "작성일자")
    private LocalDateTime createdDate;

    @ApiModelProperty(value = "수정일자")
    private LocalDateTime modifiedDate;

    @Builder
    public CommunityMainResponseDto(String title, String author, int likeCnt, LocalDateTime createdDate, LocalDateTime modifiedDate) {
        this.title = title;
        this.author = author;
        this.likeCnt = likeCnt;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
    }

}
