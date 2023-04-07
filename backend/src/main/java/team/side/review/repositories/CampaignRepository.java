package team.side.review.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import team.side.review.models.entity.Campaign;

public interface CampaignRepository extends JpaRepository<Campaign, Long> {
    Page<Campaign> findAll(Specification<Campaign> spec, Pageable pageable);
}