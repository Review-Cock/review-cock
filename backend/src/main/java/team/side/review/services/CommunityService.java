package team.side.review.services;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import team.side.review.models.dto.*;
import team.side.review.models.entity.Community;
import team.side.review.repositories.CommunityRepository;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;


@Slf4j
@Service
@RequiredArgsConstructor
public class CommunityService {

    private final CommunityRepository communityRepository;

    @Transactional
    public List<CommunityMainResponseDto> mainPage(){
        List<Community> communities = communityRepository.findAll();
        List<CommunityMainResponseDto> list = new ArrayList<>();
        for(Community community : communities){
            CommunityMainResponseDto communityMainResponseDto =
                    CommunityMainResponseDto.builder()
                    .title(community.getTitle())
                    .author(community.getAuthor().getNickname())
                    .likeCnt(community.getLikeNumber())
                    .modifiedDate(community.getModifiedDate())
                    .createdDate(community.getCreatedDate())
                    .build();
            list.add(communityMainResponseDto);
        }

        return list;
    }

    @Transactional
    public CommunityEditResponseDto edit(CommunityEditRequestDto communityEditRequestDto){
        Community community = communityEditRequestDto.toEntity(communityEditRequestDto);
        communityRepository.save(community);
        CommunityEditResponseDto communityEditResponseDto = new CommunityEditResponseDto("success");

        return communityEditResponseDto;
    }

    @Transactional
    public CommunityDetailResponseDto detail(Long communityId){
        Community community = communityRepository.findById(communityId).orElseThrow(IllegalStateException::new);

        CommunityDetailResponseDto communityDetailResponseDto = CommunityDetailResponseDto.builder()
                .title(community.getTitle())
                .content(community.getContent())
                .author(community.getAuthor().getNickname())
                .commentList(null)
                .build();

        return communityDetailResponseDto;
    }

}
