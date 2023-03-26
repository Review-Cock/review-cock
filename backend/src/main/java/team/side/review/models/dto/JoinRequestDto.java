package team.side.review.models.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team.side.review.models.entity.User;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ApiModel(value = "회원가입 요청")
public class JoinRequestDto {

    @ApiModelProperty(value = "이메일")
    private String email;

    @ApiModelProperty(value = "닉네임")
    private String nickname;

    @ApiModelProperty(value = "비밀번호")
    private String password;

    @ApiModelProperty(value = "비밀번호 확인")
    private String passwordCheck;

    @ApiModelProperty(value = "휴대폰번호")
    private String phoneNumber;

    @ApiModelProperty(value = "사업자번호", required = false)
    private String businessRegNumber;

    @Builder
    public JoinRequestDto(String email, String nickname, String password, String passwordCheck, String phoneNumber, String businessRegNumber) {
        this.email = email;
        this.nickname = nickname;
        this.password = password;
        this.passwordCheck = passwordCheck;
        this.phoneNumber = phoneNumber;
        this.businessRegNumber = businessRegNumber;
    }

    public User toEntity(){
        return User.builder()
                .email(email)
                .nickname(nickname)
                .password(password)
                .phoneNumber(phoneNumber)
                .businessRegNumber(businessRegNumber)
                .build();
    }

}
