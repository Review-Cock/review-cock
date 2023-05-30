package com.example.backend.common.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.example.backend.common.exception.auth.InvalidTokenException;
import com.example.backend.common.exception.auth.RequiredLoginException;
import com.example.backend.common.exception.campaign.CampaignNotFoundException;
import com.example.backend.common.exception.campaign.CampaignNotParticipateException;
import com.example.backend.common.exception.user.InvalidEmailAndPasswordException;
import com.example.backend.common.exception.user.UserNotFoundException;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestControllerAdvice
public class ExceptionAdvice {

    private static final String UNEXPECTED_EXCEPTION_MESSAGE = "처리할 수 없는 요청입니다.";

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ErrorResponse> handleUnexpectedException(RuntimeException e) {
        log.error(e.getMessage());

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(new ErrorResponse(UNEXPECTED_EXCEPTION_MESSAGE));
    }

    @ExceptionHandler(ExpectedException.class)
    public ResponseEntity<ErrorResponse> handleExpectedException(ExpectedException e) {
        log.error(e.getMessage());

        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
            .body(new ErrorResponse(e.getMessage()));
    }

    @ExceptionHandler(InvalidTokenException.class)
    public ResponseEntity<ErrorResponse> handlerInvalidTokenException(InvalidTokenException e) {
        log.error(e.getMessage());

        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
            .body(new ErrorResponse(e.getMessage()));
    }

    @ExceptionHandler(RequiredLoginException.class)
    public ResponseEntity<ErrorResponse> handlerRequiredLoginException(RequiredLoginException e) {
        log.error(e.getMessage());

        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
            .body(new ErrorResponse(e.getMessage()));
    }

    @ExceptionHandler(InvalidEmailAndPasswordException.class)
    public ResponseEntity<ErrorResponse> handlerInvalidEmailAndPasswordException(InvalidEmailAndPasswordException e) {
        log.error(e.getMessage());

        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
            .body(new ErrorResponse(e.getMessage()));
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> handlerUserNotFoundException(UserNotFoundException e) {
        log.error(e.getMessage());

        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
            .body(new ErrorResponse(e.getMessage()));
    }

    @ExceptionHandler(CampaignNotFoundException.class)
    public ResponseEntity<ErrorResponse> handlerCampaignNotFoundException(CampaignNotFoundException e) {
        log.error(e.getMessage());

        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
            .body(new ErrorResponse(e.getMessage()));
    }

    @ExceptionHandler(CampaignNotParticipateException.class)
    public ResponseEntity<ErrorResponse> handlerCampaignNotParticipateException(CampaignNotParticipateException e) {
        log.error(e.getMessage());

        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
            .body(new ErrorResponse(e.getMessage()));
    }
}
