package com.app.bookstagram.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.app.bookstagram.model.Book;


public interface BookRepository extends JpaRepository<Book, Integer> {


    Book findByBid(int bid);
    
    
}