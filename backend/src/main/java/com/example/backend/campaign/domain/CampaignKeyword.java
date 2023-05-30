package com.example.backend.campaign.domain;

import com.example.backend.keyword.domain.Keyword;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class CampaignKeyword {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Campaign campaign;

    @ManyToOne(fetch = FetchType.LAZY)
    private Keyword keyword;

    public static CampaignKeyword createKeyword(Campaign campaign, Keyword keyword) {
        return CampaignKeyword.builder()
            .campaign(campaign)
            .keyword(keyword)
            .build();
    }
}
