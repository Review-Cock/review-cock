package com.example.backend.campaign.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.example.backend.user.domain.User;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
    private User host;

    @OneToMany(mappedBy = "campaign", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Participant> participants = new HashSet<>();

    private String no;

    @Enumerated(EnumType.STRING)
    private CampaignCategory category;

    private String title;

    private String description;

    private String content;

    private int recruitNumber;

    private String address;

    @Enumerated(EnumType.STRING)
    private CampaignType type;

    @Enumerated(EnumType.STRING)
    private CampaignChannelType channelType;

    private String siteUrl;

    private LocalDate registrationStartDate;

    private LocalDate registrationEndDate;

    private LocalDate presentationDate;

    private LocalDate experienceStartDate;

    private LocalDate experienceEndDate;

    @OneToMany(mappedBy = "campaign", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<CampaignImage> images = new HashSet<>();

    @OneToMany(mappedBy = "campaign", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<CampaignKeyword> keywords = new HashSet<>();

    @CreatedDate
    private LocalDateTime createdDate;

    @LastModifiedDate
    private LocalDateTime lastModifiedDate;

    @Builder
    private Campaign(
        User host, CampaignCategory category, String title,
        String description, String content, int recruitNumber, String address, CampaignType type,
        CampaignChannelType channelType, String siteUrl, LocalDate registrationStartDate, LocalDate registrationEndDate,
        LocalDate presentationDate, LocalDate experienceStartDate, LocalDate experienceEndDate) {
        this.host = host;
        this.no = UUID.randomUUID().toString();
        this.category = category;
        this.title = title;
        this.description = description;
        this.content = content;
        this.recruitNumber = recruitNumber;
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

    public void addParticipant(Participant participant) {
        this.participants.add(participant);
    }

    public int getParticipantsSize() {
        return this.participants.size();
    }

    public void addImage(CampaignImage image) {
        this.images.add(image);
    }

    public void addKeyword(CampaignKeyword keyword) {
        this.keywords.add(keyword);
    }
}
