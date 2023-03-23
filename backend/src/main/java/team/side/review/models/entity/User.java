package team.side.review.models.entity;


import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Slf4j
@Entity
public class User {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;

    private String nickname;

    private String password;

    private String phoneNumber;

    private String businessRegNumber;

    @OneToMany(mappedBy = "author")
    private List<Community> communityList = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Opinion> opinionList = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Detail> detailList = new ArrayList<>();

}
