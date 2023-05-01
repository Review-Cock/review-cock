package com.example.backend.campaign.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.campaign.domain.CampaignImage;

public interface CampaignImageRepository extends JpaRepository<CampaignImage, Long> {
}
