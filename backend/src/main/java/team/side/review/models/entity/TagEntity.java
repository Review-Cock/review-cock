package team.side.review.models.entity;


import lombok.extern.slf4j.Slf4j;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Slf4j
@Entity
public class TagEntity {

    @Id
    private Long id;

    private String tagName;

    @ManyToOne
    @JoinColumn(name = "detail_id")
    private DetailEntity detail;

}
