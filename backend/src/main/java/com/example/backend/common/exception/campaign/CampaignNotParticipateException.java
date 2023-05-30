package com.example.backend.common.exception.campaign;

public class CampaignNotParticipateException extends RuntimeException {

    private static final String MESSAGE = "캠페인에 참여할 수 없습니다.";

    public CampaignNotParticipateException() {
        super(MESSAGE);
    }
}
