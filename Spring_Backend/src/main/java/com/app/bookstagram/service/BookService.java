package com.app.bookstagram.service;


import com.app.bookstagram.dto.request.BookRequest;
import com.app.bookstagram.dto.request.Request;
import com.app.bookstagram.dto.response.BookResponse;
// import com.app.bookstagram.dto.response.CountResponse;

public interface BookService {
    
    public boolean createBook(Request request);

    BookResponse getBookDetails(int bid);

    BookResponse updateBookDetails(BookRequest request, int bid);

    String deleteBook(int bid);

    // CountResponse getBookCountDetails();

}
