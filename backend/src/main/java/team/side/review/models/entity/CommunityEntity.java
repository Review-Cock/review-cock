package team.side.review.models.entity;


import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@Entity
public class CommunityEntity {

    @Id
    private Long id;

    private String title;

    private String Content;

    private int likeNumber;

    private LocalDateTime createdDate;

    private LocalDateTime modifiedDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity author;

    @OneToMany(mappedBy = "community")
    private List<OpinionEntity> opinionList;

}
