package com.example.backend.campaign;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Campaign {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private CampaignType type;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private LocalDateTime regStartDate;

    @Column(nullable = false)
    private LocalDateTime regEndDate;

    @Column(nullable = false)
    private LocalDateTime expStartDate;

    @Column(nullable = false)
    private LocalDateTime expEndDate;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private int recruitNumber;

    @Column(nullable = false)
    private int applyNumber;

    @Column(nullable = false)
    private String location;

    @Column(nullable = false)
    private String url;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdDate;

    private LocalDateTime lastModifiedDate;
}
