package com.example.backend.keyword.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.backend.campaign.domain.Campaign;
import com.example.backend.campaign.domain.CampaignKeyword;
import com.example.backend.keyword.domain.Keyword;
import com.example.backend.keyword.repository.KeywordRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Transactional
@Service
public class KeywordService {

    private final KeywordRepository keywordRepository;

    public Keyword findOrCreate(String title) {
        return keywordRepository.findByTitle(title).orElseGet(() ->
            keywordRepository.save(Keyword.builder()
                .title(title)
                .build()));
    }

    public void saveCampaignKeywords(Campaign campaign, Keyword keyword) {
        CampaignKeyword campaignKeyword = CampaignKeyword.createKeyword(campaign, keyword);
        campaign.addKeyword(campaignKeyword);
    }
}
