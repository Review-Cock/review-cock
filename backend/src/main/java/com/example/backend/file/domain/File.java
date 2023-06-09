package com.example.backend.file.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class File {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String originalName;

    private String extension;

    private String savedName;

    private String path;

    @Builder
    public File(String originalName, String extension, String savedName, String path) {
        this.originalName = originalName;
        this.extension = extension;
        this.savedName = savedName;
        this.path = path;
    }
}
