package team.side.review.models.dto;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

import java.util.List;

@Getter
@ToString
@EqualsAndHashCode
public class ErrorResponseDto {
    private final String code;
    private final String message;
    private final List<String> errors;

    public ErrorResponseDto(String code, String message, List<String> errors) {
        this.code = code;
        this.message = message;
        this.errors = errors;
    }
}
