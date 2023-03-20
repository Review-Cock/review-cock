package team.side.review.models.entity;


import lombok.extern.slf4j.Slf4j;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;


@Slf4j
@Entity
public class UserEntity {

    @Id
    private Long id;

    private String email;

    private String nickname;

    private String password;

    private String phoneNumber;

    private String businessRegNumber;

    @OneToMany(mappedBy = "author")
    private List<CommunityEntity> communityList = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<OpinionEntity> opinionList = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<DetailEntity> detailList = new ArrayList<>();

}
