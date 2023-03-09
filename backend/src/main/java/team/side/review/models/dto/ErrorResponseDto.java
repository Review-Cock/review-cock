package team.side.review.models.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

import java.util.List;

@Getter
@ToString
@EqualsAndHashCode
@ApiModel(value = "에러 응답", description = "에러 응답에 대한 정보")
public class ErrorResponseDto {

    @ApiModelProperty(value = "에러 코드", required = true)
    private final String code;

    @ApiModelProperty(value = "에러 메시지", required = true)
    private final String message;

    @ApiModelProperty(value = "에러 내용 리스트", required = true)
    private final List<String> errors;

    public ErrorResponseDto(String code, String message, List<String> errors) {
        this.code = code;
        this.message = message;
        this.errors = errors;
    }
}
