package team.side.review.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import team.side.review.models.entity.Community;


@Repository
public interface CommunityRepository extends JpaRepository<Community, Long> {
}
