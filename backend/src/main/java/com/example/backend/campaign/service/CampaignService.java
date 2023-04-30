package com.example.backend.campaign.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.backend.campaign.repository.CampaignRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Transactional
@Service
public class CampaignService {

    private final CampaignRepository campaignRepository;


}
