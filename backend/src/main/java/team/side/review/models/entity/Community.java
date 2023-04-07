package team.side.review.models.entity;


import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Community {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Lob
    private String Content;

    private int likeNumber;

    private LocalDateTime createdDate;

    private LocalDateTime modifiedDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User author;

    @OneToMany(mappedBy = "community")
    private List<Opinion> opinionList;

    @Builder
    public Community(Long id, String title, String content, int likeNumber, LocalDateTime createdDate, LocalDateTime modifiedDate, User author, List<Opinion> opinionList) {
        this.id = id;
        this.title = title;
        Content = content;
        this.likeNumber = likeNumber;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
        this.author = author;
        this.opinionList = opinionList;
    }
}
