package team.side.review.models.dto;


import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserCampaignDto {

    private String name;

    private String imageUrl;

    private LocalDateTime noticeDateTime;


}
