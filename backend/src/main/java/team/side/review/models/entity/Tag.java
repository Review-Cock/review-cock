package team.side.review.models.entity;


import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;

@Slf4j
@Entity
public class Tag {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tagName;

    @ManyToOne
    @JoinColumn(name = "detail_id")
    private Detail detail;

}
