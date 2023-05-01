package com.example.backend.campaign.domain;

import jakarta.persistence.Column;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CampaignAddress {

    @Column(nullable = false)
    private String zipcode;

    @Column(nullable = false)
    private String address;

    private String detailAddress;
}
