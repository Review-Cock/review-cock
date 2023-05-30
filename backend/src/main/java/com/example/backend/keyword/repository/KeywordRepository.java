package com.example.backend.keyword.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.keyword.domain.Keyword;

public interface KeywordRepository extends JpaRepository<Keyword, Long> {

    Optional<Keyword> findByTitle(String title);
}
