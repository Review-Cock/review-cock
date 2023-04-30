package com.example.backend.file.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.file.domain.File;

public interface FileRepository extends JpaRepository<File, Long> {
}
