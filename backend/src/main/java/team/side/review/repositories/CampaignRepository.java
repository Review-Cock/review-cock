package team.side.review.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import team.side.review.models.entity.Campaign;

public interface CampaignRepository extends JpaRepository<Campaign, Long> {
}