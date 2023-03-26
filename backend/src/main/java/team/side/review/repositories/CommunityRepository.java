package team.side.review.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import team.side.review.models.entity.Community;

public interface CommunityRepository extends JpaRepository<Community, Long> {
}
