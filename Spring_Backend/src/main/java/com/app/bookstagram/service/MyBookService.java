package com.app.bookstagram.service;

import java.util.List;

import com.app.bookstagram.dto.request.MyBookRequest;
import com.app.bookstagram.model.Book;

public interface MyBookService {

    String createMyBook(MyBookRequest mybookRequest);

    Book getMyBook(long bid);

    void updateBookAction(long bid, long uid, String action);
    
    void updateRating(long bid, long uid, long rating);

    List<String> getAllMyBooks(long uid);
    
} 
