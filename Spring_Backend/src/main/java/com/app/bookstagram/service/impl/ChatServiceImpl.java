package com.app.bookstagram.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.bookstagram.model.Chat;
import com.app.bookstagram.repository.ChatRepository;
import com.app.bookstagram.service.ChatService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class ChatServiceImpl implements ChatService {
    
    @Autowired
    private ChatRepository chatRepository;

    public Iterable<Chat> getAll() {
        return chatRepository.findAll();
    }

    public Chat post(Chat chat) {
        return chatRepository.save(chat);        
    }

}
