package team.side.review.models.entity;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import team.side.review.models.enums.CampaignType;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class Campaign {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private CampaignType campaignType;

    private String category;

    private String name;

    private LocalDateTime regStartDateTime;

    private LocalDateTime regEndDateTime;

    private LocalDateTime noticeDateTime;

    private LocalDateTime expStartDateTime;

    private LocalDateTime expEndDateTime;

    private String content;

    private int recruitNumber;

    private Long saveUserId;

    @OneToMany(mappedBy = "campaign", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CampaignTag> searchTags = new ArrayList<>();

    private String location;

    private String siteUrl;

    @OneToMany(mappedBy = "campaign", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CampaignImage> imageUrls = new ArrayList<>();

    public void addCampaignTag(String tag) {
        CampaignTag campaignTag = CampaignTag.builder()
                .tag(tag)
                .campaign(this)
                .build();

        if (this.searchTags == null) {
            this.searchTags = new ArrayList<>();
        }
        this.searchTags.add(campaignTag);
    }

    public void addCampaignImage(String imageUrl) {
        CampaignImage campaignImage = CampaignImage.builder()
                .imageUrl(imageUrl)
                .campaign(this)
                .build();

        if (this.imageUrls == null) {
            this.imageUrls = new ArrayList<>();
        }
        this.imageUrls.add(campaignImage);
    }
}
