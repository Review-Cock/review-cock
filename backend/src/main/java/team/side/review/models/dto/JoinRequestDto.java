package team.side.review.models.dto;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class JoinRequestDto {

    private String email;
    private String nickname;
    private String password;
    private String passwordCheck;
    private String phoneNumber;
    private String bussinessRegNumber;

    @Builder
    public JoinRequestDto(String email, String nickname, String password, String passwordCheck, String phoneNumber, String bussinessRegNumber) {
        this.email = email;
        this.nickname = nickname;
        this.password = password;
        this.passwordCheck = passwordCheck;
        this.phoneNumber = phoneNumber;
        this.bussinessRegNumber = bussinessRegNumber;
    }

}
