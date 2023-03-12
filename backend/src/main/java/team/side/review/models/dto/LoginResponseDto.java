package team.side.review.models.dto;


import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class LoginResponseDto {

    private String email;

    @Builder
    public LoginResponseDto(String email, String message) {
        this.email = email;
    }

}
