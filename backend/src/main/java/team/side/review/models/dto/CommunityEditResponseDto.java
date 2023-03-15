package team.side.review.models.dto;

import io.swagger.annotations.ApiModel;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ApiModel(value = "커뮤니티 글 작성 응답")
public class CommunityEditResponseDto {

    private String msg;

    @Builder
    public CommunityEditResponseDto(String msg) {
        this.msg = msg;
    }
}
