package com.example.backend.campaign.domain;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class CampaignCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    private List<Campaign> campaigns = new ArrayList<>();

    public void addCampaign(Campaign campaign) {
        this.campaigns.add(campaign);
    }
}
