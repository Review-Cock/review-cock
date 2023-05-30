package com.example.backend.common.exception.campaign;

public class CampaignNotFoundException extends RuntimeException {

    private static final String MESSAGE = "캠페인을 찾을 수 없습니다.";

    public CampaignNotFoundException() {
        super(MESSAGE);
    }
}
