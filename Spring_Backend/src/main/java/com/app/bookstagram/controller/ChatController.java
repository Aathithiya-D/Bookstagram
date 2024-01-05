package com.app.bookstagram.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.bookstagram.constant.Api;
import com.app.bookstagram.model.Chat;
import com.app.bookstagram.service.impl.ChatServiceImpl;

@RestController
@CrossOrigin
@RequestMapping(Api.CHAT)
public class ChatController {

    @Autowired
    private ChatServiceImpl chatServiceImpl;

    @GetMapping("/messages")
    public Iterable<Chat> getAll() {
        return chatServiceImpl.getAll();
    }

    @PostMapping("/addMessage")
    public String addMessage(@RequestBody Chat chat) {
        Chat posted = chatServiceImpl.post(chat);

        if (posted != null) return "Message posted!";
        else return "Oops...Something went wrong!";
    }
    
}
