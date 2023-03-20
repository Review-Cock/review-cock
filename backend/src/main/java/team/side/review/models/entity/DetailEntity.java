package team.side.review.models.entity;


import lombok.extern.slf4j.Slf4j;
import team.side.review.models.enums.CampaignType;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Slf4j
@Entity
public class DetailEntity {

    @Id
    private Long id;

    private CampaignType type;

    private String category;

    private String name;

    private LocalDateTime regStartDate;

    private LocalDateTime regEndDate;

    private LocalDateTime noticeDate;

    private LocalDateTime expStartDate;

    private LocalDateTime expEndDate;

    private String content;

    private int recruitNumber;

    private int applyNumber;

    private String location;

    private String url;

    private LocalDateTime createdDate;

    private LocalDateTime modifiedDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

    @OneToMany(mappedBy = "detail", orphanRemoval = true, cascade = CascadeType.ALL)
    private List<ImageEntity> imageList = new ArrayList<>();

    @OneToMany(mappedBy = "detail", orphanRemoval = true, cascade = CascadeType.ALL)
    private List<TagEntity> tagList = new ArrayList<>();

}
