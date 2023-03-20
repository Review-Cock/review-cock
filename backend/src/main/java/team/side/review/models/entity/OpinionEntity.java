package team.side.review.models.entity;


import lombok.extern.slf4j.Slf4j;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;

@Slf4j
@Entity
public class OpinionEntity {

    @Id
    private Long id;

    private String comment;

    private int likeNumber;

    private LocalDateTime createdDate;

    private LocalDateTime modifiedDate;

    @ManyToOne
    @JoinColumn(name = "community_id")
    private CommunityEntity community;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

}
