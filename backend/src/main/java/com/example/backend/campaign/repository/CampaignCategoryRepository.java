package com.example.backend.campaign.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.campaign.domain.CampaignCategory;

public interface CampaignCategoryRepository extends JpaRepository<CampaignCategory, Long> {
}
