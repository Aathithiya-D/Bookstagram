package com.app.ms.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.app.ms.repository.BookRepository;
import com.app.ms.service.BookService;

public class BookServiceImpl implements BookService{

    @Autowired
    private BookRepository bookRepository;

    
    
}
