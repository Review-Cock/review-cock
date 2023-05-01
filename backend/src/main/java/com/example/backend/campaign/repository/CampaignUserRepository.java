package com.example.backend.campaign.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.campaign.domain.CampaignUser;

public interface CampaignUserRepository extends JpaRepository<CampaignUser, Long> {
}
