package com.example.backend.campaign.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.campaign.domain.CampaignKeyword;

public interface CampaignKeywordRepository extends JpaRepository<CampaignKeyword, Long> {
}
