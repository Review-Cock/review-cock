package com.example.backend.campaign.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.campaign.domain.Campaign;

public interface CampaignRepository extends JpaRepository<Campaign, Long> {
}
