package com.example.backend.file.service;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.example.backend.campaign.domain.Campaign;
import com.example.backend.campaign.domain.CampaignImage;
import com.example.backend.campaign.domain.CampaignImageType;
import com.example.backend.file.domain.File;
import com.example.backend.file.repository.FileRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Transactional
@Service
public class FileService {

    @Value("${file.dir}")
    private String fileDir;

    private final FileRepository fileRepository;

    public void saveCampaignImages(Campaign campaign, MultipartFile coverImage, List<MultipartFile> detailImages) {
        File savedCoverImage = save(coverImage);
        CampaignImage savedCampaignCoverImage = CampaignImage.createImage(
            campaign, savedCoverImage, CampaignImageType.COVER);
        campaign.addImage(savedCampaignCoverImage);

        for (MultipartFile multipartFile : detailImages) {
            if (multipartFile.isEmpty()) {
                throw new RuntimeException();
            }
            File savedDetailImage = save(multipartFile);
            CampaignImage savedCampaignDetailImage = CampaignImage.createImage(
                campaign, savedDetailImage, CampaignImageType.DETAIL);
            campaign.addImage(savedCampaignDetailImage);
        }
    }

    private File save(MultipartFile multipartFile) {
        String originalName = multipartFile.getOriginalFilename();
        String extension = FilenameUtils.getExtension(originalName);
        String savedName = UUID.randomUUID() + "." + extension;
        String path = fileDir + savedName;

        try {
            multipartFile.transferTo(new java.io.File(path));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        File file = File.builder()
            .originalName(originalName)
            .extension(extension)
            .savedName(savedName)
            .path(path)
            .build();

        return fileRepository.save(file);
    }
}
