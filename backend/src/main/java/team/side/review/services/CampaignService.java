package team.side.review.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import team.side.review.models.entity.Campaign;
import team.side.review.repositories.CampaignRepository;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
public class CampaignService {

    private final CampaignRepository campaignRepository;

    @Transactional
    public Long saveCampaign(Campaign campaign) {
        return campaignRepository.save(campaign).getId();
    }
}
