package team.side.review.models.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import org.springframework.http.HttpStatus;

@Getter
@ToString
@EqualsAndHashCode
@ApiModel(value = "응답 정보", description = "API 응답에 대한 정보")
public class ResponseDto<T> {

    @ApiModelProperty(value = "상태코드", required = true)
    private final Integer statusCode;

    @ApiModelProperty(value = "메시지", required = true)
    private final String message;

    @ApiModelProperty(value = "응답 data")
    private final T data;

    public static <T> ResponseDto<T> success(T data) {
        return new ResponseDto<>(HttpStatus.OK.value(), "success", data);
    }

    public ResponseDto(Integer statusCode, String message, T data) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;

    }
}
