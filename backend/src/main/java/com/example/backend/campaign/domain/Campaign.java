package com.example.backend.campaign.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
@Entity
public class Campaign {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String no;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CampaignCategory category;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String content;

    private int recruitNumber;

    private int applyNumber;

    @Column(nullable = false)
    private String address;

    @Enumerated(EnumType.STRING)
    private CampaignType type;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CampaignChannelType channelType;

    @Column(nullable = false)
    private String siteUrl;

    @Column(nullable = false)
    private LocalDate registrationStartDate;

    @Column(nullable = false)
    private LocalDate registrationEndDate;

    @Column(nullable = false)
    private LocalDate presentationDate;

    @Column(nullable = false)
    private LocalDate experienceStartDate;

    @Column(nullable = false)
    private LocalDate experienceEndDate;

    @OneToMany(mappedBy = "campaign", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<CampaignImage> images = new HashSet<>();

    @OneToMany(mappedBy = "campaign", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<CampaignKeyword> keywords = new HashSet<>();

    @CreatedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdDate;

    @LastModifiedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime lastModifiedDate;

    @Builder
    private Campaign(
        CampaignCategory category, String title, String description, String content,
        int recruitNumber, int applyNumber, String address,
        CampaignType type, CampaignChannelType channelType,
        String siteUrl, LocalDate registrationStartDate, LocalDate registrationEndDate,
        LocalDate presentationDate, LocalDate experienceStartDate, LocalDate experienceEndDate) {
        this.no = UUID.randomUUID().toString();
        this.category = category;
        this.title = title;
        this.description = description;
        this.content = content;
        this.recruitNumber = recruitNumber;
        this.applyNumber = applyNumber;
        this.address = address;
        this.type = type;
        this.channelType = channelType;
        this.siteUrl = siteUrl;
        this.registrationStartDate = registrationStartDate;
        this.registrationEndDate = registrationEndDate;
        this.presentationDate = presentationDate;
        this.experienceStartDate = experienceStartDate;
        this.experienceEndDate = experienceEndDate;
    }

    public void addImage(CampaignImage image) {
        this.images.add(image);
    }

    public void addKeyword(CampaignKeyword keyword) {
        this.keywords.add(keyword);
    }
}
