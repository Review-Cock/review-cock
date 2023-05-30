package com.example.backend.campaign.domain;

import java.util.Arrays;

import lombok.Getter;

@Getter
public enum CampaignCategory {

    LIFE("생활"), SERVICE("서비스"), TODDLER("유아동"),
    DIGITAL("디지털"), BEAUTY("뷰티"), FASHION("패션"),
    BOOK("도서"), FOOD("식품"), PET("반려동물"),

    FAMOUS_RESTAURANT("맛집"), ACCOMMODATION("숙박"),
    CULTURE("문화"), DELIVERY("배달"), TAKEOUT("테이크아웃"), ETC("기타");

    private final String displayName;

    CampaignCategory(final String displayName) {
        this.displayName = displayName;
    }
}
