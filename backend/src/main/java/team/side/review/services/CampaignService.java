package team.side.review.services;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import team.side.review.models.dto.CampaignDetailResponseDto;
import team.side.review.models.entity.Campaign;
import team.side.review.models.enums.CampaignType;
import team.side.review.repositories.CampaignRepository;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

import static org.springframework.data.jpa.domain.Specification.where;

@Service
@RequiredArgsConstructor
public class CampaignService {

    private final CampaignRepository campaignRepository;

    @Transactional
    public Long saveCampaign(Campaign campaign) {
        return campaignRepository.save(campaign).getId();
    }

    public Page<CampaignDetailResponseDto> getCampaignList(int page, int size, CampaignType campaignType) {
        Specification<Campaign> spec = where(null);
        if (campaignType != null) {
            spec = spec.and((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("campaignType"), campaignType));
        }

        Page<Campaign> campaigns = campaignRepository.findAll(spec, PageRequest.of(page, size));
        return campaigns.map(CampaignDetailResponseDto::of);
    }

    public CampaignDetailResponseDto getCampaign(Long campaignId) {
        Campaign campaign = campaignRepository.findById(campaignId)
                .orElseThrow(() -> new EntityNotFoundException("존재하지 않는 체험단 입니다."));

        return CampaignDetailResponseDto.of(campaign);
    }
}
