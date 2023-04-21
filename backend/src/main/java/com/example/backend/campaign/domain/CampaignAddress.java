package com.example.backend.campaign.domain;

import jakarta.persistence.Column;

public class CampaignAddress {

    @Column(nullable = false)
    private String zipcode;

    @Column(nullable = false)
    private String address;

    private String detailAddress;
}
