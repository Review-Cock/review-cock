package team.side.review.models.dto;


import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ApiModel(value = "회원정보 수정 응답")
public class ProfileUpdateResponseDto {

    @ApiModelProperty(value = "성공한 이메일")
    private String email;

    public ProfileUpdateResponseDto(String email) {
        this.email = email;
    }
}
