package com.example.backend.campaign.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Objects;
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
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "campaign_category_id", nullable = false)
    private CampaignCategory category;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String content;

    private int recruitNumber;

    private int applyNumber;

    @Embedded
    private CampaignAddress address;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CampaignType type;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CampaignChannelType channelType;

    @Column(nullable = false)
    private String siteUrl;

    @Embedded
    @AttributeOverrides({
        @AttributeOverride(name = "startDate", column = @Column(name = "REGISTRATION_START_DATE", nullable = false)),
        @AttributeOverride(name = "endDate", column = @Column(name = "REGISTRATION_END_DATE", nullable = false))
    })
    private CampaignDate registrationDate;

    @Column(nullable = false)
    private LocalDate presentationDate;

    @Embedded
    @AttributeOverrides({
        @AttributeOverride(name = "startDate", column = @Column(name = "EXPERIENCE_START_DATE", nullable = false)),
        @AttributeOverride(name = "endDate", column = @Column(name = "EXPERIENCE_END_DATE", nullable = false))
    })
    @Column(nullable = false)
    private CampaignDate experience;

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
    public Campaign(
        CampaignCategory category, String title, String content,
        int recruitNumber, int applyNumber, CampaignAddress address,
        CampaignType type, CampaignChannelType channelType,
        String siteUrl, CampaignDate registrationDate,
        LocalDate presentationDate, CampaignDate experience) {
        setCategory(category);
        this.title = title;
        this.content = content;
        this.recruitNumber = recruitNumber;
        this.applyNumber = applyNumber;
        this.address = address;
        this.type = type;
        this.channelType = channelType;
        this.siteUrl = siteUrl;
        this.registrationDate = registrationDate;
        this.presentationDate = presentationDate;
        this.experience = experience;
    }

    private void setCategory(CampaignCategory category) {
        if (Objects.nonNull(this.category)) {
            this.category = category;
            this.category.addCampaign(this);
        }
    }

    public void addImage(CampaignImage image) {
        this.images.add(image);
    }

    public void addKeyword(CampaignKeyword keyword) {
        this.keywords.add(keyword);
    }
}
