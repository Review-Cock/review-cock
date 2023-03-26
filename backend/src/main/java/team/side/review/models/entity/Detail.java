package team.side.review.models.entity;


import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import team.side.review.models.enums.CampaignType;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Slf4j
@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Detail {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private CampaignType type;

    private String category;

    private String name;

    private LocalDateTime regStartDate;

    private LocalDateTime regEndDate;

    private LocalDateTime noticeDate;

    private LocalDateTime expStartDate;

    private LocalDateTime expEndDate;

    @Lob
    private String content;

    private int recruitNumber;

    private int applyNumber;

    private String location;

    private String url;

    private LocalDateTime createdDate;

    private LocalDateTime modifiedDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "detail", orphanRemoval = true, cascade = CascadeType.ALL)
    private List<Image> imageList = new ArrayList<>();

    @OneToMany(mappedBy = "detail", orphanRemoval = true, cascade = CascadeType.ALL)
    private List<Tag> tagList = new ArrayList<>();

}
