package team.side.review.models.entity;


import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import team.side.review.models.dto.ProfileUpdateRequestDto;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Slf4j
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
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

    @Builder
    public User(Long id, String email, String nickname, String password,
                String phoneNumber, String businessRegNumber, List<Community> communityList,
                List<Opinion> opinionList, List<Detail> detailList) {
        this.id = id;
        this.email = email;
        this.nickname = nickname;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.businessRegNumber = businessRegNumber;
        this.communityList = communityList;
        this.opinionList = opinionList;
        this.detailList = detailList;
    }

    public void update(ProfileUpdateRequestDto profileUpdateRequestDto){
        this.nickname = profileUpdateRequestDto.getNickname();
        this.phoneNumber = profileUpdateRequestDto.getPhoneNumber();
    }
}
