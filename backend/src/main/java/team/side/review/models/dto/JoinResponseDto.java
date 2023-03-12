package team.side.review.models.dto;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class JoinResponseDto {

    private String email;

    @Builder
    public JoinResponseDto(String email, String message) {
        this.email = email;
    }


}
