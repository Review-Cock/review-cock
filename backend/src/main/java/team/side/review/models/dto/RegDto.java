package team.side.review.models.dto;


import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ApiModel(value = "신청 인원 리스트")
public class RegDto {

    @ApiModelProperty("신청 인원 닉네임")
    private String nickname;

    @Builder
    public RegDto(String nickname) {
        this.nickname = nickname;
    }
}
