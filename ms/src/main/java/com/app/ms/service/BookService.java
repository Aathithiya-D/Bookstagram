package com.app.ms.service;

import com.app.ms.dto.request.BookRequest;
import com.app.ms.dto.response.BookResponse;
import com.app.ms.dto.response.CountResponse;

public interface BookService {
    
    public boolean createBook(BookRequest request);

    BookResponse getBookDetails(int bid);

    BookResponse updateBookDetails(BookRequest request, int bid);

    String deleteBook(int bid);

    CountResponse getBookCountDetails();
}
