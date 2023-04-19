package com.example.backend.campaign.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.AttributeOverride;
import jakarta.persistence.AttributeOverrides;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@EntityListeners(AuditingEntityListener.class)
@Entity
public class Campaign {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String content;

    private int recruitNumber;

    private int applyNumber;

    @Embedded
    private CampaignAddress address;

    @Enumerated(EnumType.STRING)
    private CampaignType type;

    @Enumerated(EnumType.STRING)
    private CampaignChannelType channelType;

    private String siteUrl;

    @Embedded
    @AttributeOverrides({
        @AttributeOverride(name = "startDate", column = @Column(name = "REGISTRATION_START_DATE")),
        @AttributeOverride(name = "endDate", column = @Column(name = "REGISTRATION_END_DATE"))
    })
    private CampaignDate registrationDate;

    private LocalDate presentationDate;

    @Embedded
    @AttributeOverrides({
        @AttributeOverride(name = "startDate", column = @Column(name = "EXPERIENCE_START_DATE")),
        @AttributeOverride(name = "endDate", column = @Column(name = "EXPERIENCE_END_DATE"))
    })
    private CampaignDate experience;

    @OneToMany(mappedBy = "campaign", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<CampaignImage> images;

    @OneToMany(mappedBy = "campaign", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<CampaignCategory> category;

    @OneToMany(mappedBy = "campaign", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<CampaignKeyword> keywords = new HashSet<>();

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdDate;

    @LastModifiedDate
    private LocalDateTime lastModifiedDate;
}
