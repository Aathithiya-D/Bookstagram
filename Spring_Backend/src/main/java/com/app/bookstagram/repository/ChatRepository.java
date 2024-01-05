package com.app.bookstagram.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.bookstagram.model.Chat;

public interface ChatRepository extends JpaRepository<Chat, Integer> {

}
