package com.example.backend.campaign.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.backend.campaign.domain.Campaign;

public interface CampaignRepository extends JpaRepository<Campaign, Long> {


    Optional<Campaign> findByNo(String no);

    // TODO: n+1

    @Query("select c from Campaign c"
        + " left join fetch c.images"
        + " left join fetch c.keywords"
        + " order by c.applyNumber desc")
    List<Campaign> findPopular(Pageable pageable);

    @Query("select c from Campaign c"
        + " left join fetch c.images"
        + " left join fetch c.keywords"
        + " order by c.experienceEndDate")
    List<Campaign> findDeadline(Pageable pageable);
}
