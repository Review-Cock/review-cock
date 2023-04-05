package team.side.review.config;

import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import team.side.review.models.dto.ErrorResponseDto;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.stream.Collectors;

@RestControllerAdvice
public class RestExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponseDto> handleValidationException(MethodArgumentNotValidException exception) {
        BindingResult bindingResult = exception.getBindingResult();
        List<FieldError> fieldErrors = bindingResult.getFieldErrors();
        List<String> errorMessages = fieldErrors.stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                .collect(Collectors.toList());

        ErrorResponseDto responseDto =
                new ErrorResponseDto(String.valueOf(HttpStatus.BAD_REQUEST.value())
                        , HttpStatus.BAD_REQUEST.getReasonPhrase()
                        , errorMessages);
        return ResponseEntity.badRequest().body(responseDto);
    }

    @ExceptionHandler(EntityNotFoundException.class)
    @ResponseBody
    public ResponseEntity<ErrorResponseDto> handleEntityNotFoundException(EntityNotFoundException e) {
        ErrorResponseDto responseDto =
                new ErrorResponseDto(String.valueOf(HttpStatus.BAD_REQUEST.value())
                        , HttpStatus.BAD_REQUEST.getReasonPhrase()
                        , List.of(e.getMessage()));
        return ResponseEntity.badRequest().body(responseDto);
    }
}
