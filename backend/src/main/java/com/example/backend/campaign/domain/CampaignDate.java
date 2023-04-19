package com.example.backend.campaign.domain;

import java.time.LocalDateTime;

import jakarta.persistence.Column;

public class CampaignTime {

    @Column(nullable = false)
    private LocalDateTime startTime;

    @Column(nullable = false)
    private LocalDateTime endDateTime;
}
