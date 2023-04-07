package team.side.review.services;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Service;
import team.side.review.models.dto.*;
import team.side.review.models.entity.Detail;
import team.side.review.models.entity.User;
import team.side.review.repositories.UserRepository;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserService { //implements UserDetailsService {

    private final UserRepository userRepository;


    @Transactional
    public LoginResponseDto login(LoginRequestDto loginRequestDto){
        
        return new LoginResponseDto(loginRequestDto.getEmail(), "success");
    }

    @Transactional
    public JoinResponseDto join(JoinRequestDto joinRequestDto){

        User savedUser = userRepository.save(joinRequestDto.toEntity());

        JoinResponseDto joinResponseDto = new JoinResponseDto(savedUser.getEmail(), "success");

        return joinResponseDto;

    }

    @Transactional
    public ProfileResponseDto profile(Long id) {
        User findUser = userRepository.findById(id).orElseThrow(IllegalStateException::new);

        List<UserCampaignDto> campaignDtoList = new ArrayList<>();

        for(Detail detail : findUser.getDetailList()){
            campaignDtoList.add(new UserCampaignDto(detail.getName(), detail.getUrl(), detail.getNoticeDate()));
        }

        return ProfileResponseDto.builder()
                .nickname(findUser.getNickname())
                .campaignList(campaignDtoList)
                .build();
    }

    @Transactional
    public ProfileUpdateResponseDto profileUpdate(ProfileUpdateRequestDto profileUpdateRequestDto){
        User findUser = userRepository.findByEmail(profileUpdateRequestDto.getEmail());

        findUser.update(profileUpdateRequestDto);

        return new ProfileUpdateResponseDto(findUser.getEmail());

    }

    @Transactional
    public CampaignAdminResponseDto campaignAdmin(Long id){
        User findUser = userRepository.findById(id).orElseThrow(IllegalStateException::new);

        CampaignAdminResponseDto campaignAdminResponseDto = CampaignAdminResponseDto.builder()
                .nickname(findUser.getNickname())
                .campaignList(null)
                .regList(null)
                .build();

        return campaignAdminResponseDto;

    }


//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        return userRepository.findByNickname(username);
//    }
}
