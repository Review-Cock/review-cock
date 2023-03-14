package team.side.review.models.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ApiModel(value = "회원가입 응답")
public class JoinResponseDto {

    @ApiModelProperty(value = "성공한 이메일")
    private String email;

    @Builder
    public JoinResponseDto(String email, String message) {
        this.email = email;
    }


}
