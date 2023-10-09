package com.app.bookstagram.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
// import org.springframework.web.client.RestTemplate;

import com.app.bookstagram.dto.request.BookRequest;
import com.app.bookstagram.dto.request.Request;
import com.app.bookstagram.dto.response.BookResponse;
import com.app.bookstagram.model.Book;
import com.app.bookstagram.repository.BookRepository;
import com.app.bookstagram.service.BookService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public boolean createBook(Request request)
    {
        var book = Book.builder()
                    .authorname(request.getAuthorname())
                    .bookname(request.getBookname())
                    .dop(request.getDop())
                    .build();

        bookRepository.save(book);
        
        return true;
    }

    @Override
    public BookResponse getBookDetails(int bid)
    {
        Book b = bookRepository.findByBid(bid);
        return mapUserToBookResponse(b);
    }

    @Override
    public BookResponse updateBookDetails(BookRequest request, int bid)
    {
        Book book = bookRepository.findById(bid).get();
        if(book != null)
        {
           book.setBookname(request.getBookname());
           book.setAuthorname(request.getAuthorname());
           book.setDop(request.getDop());
           bookRepository.save(book);
        }

        return mapUserToBookResponse(book);
    }

    private BookResponse mapUserToBookResponse(Book book) {
        return BookResponse.builder()
                .bid(book.getBid())
                .bookname(book.getBookname())
                .authorname(book.getAuthorname())
                .dop(book.getDop())
                .build();
    }

    @Override
    public String deleteBook(int bid)
    {
        bookRepository.deleteById(bid);
        return "Deleted Successfully";
    }
    
}
