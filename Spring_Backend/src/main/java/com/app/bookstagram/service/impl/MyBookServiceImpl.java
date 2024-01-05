package com.app.bookstagram.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.bookstagram.dto.request.MyBookRequest;
import com.app.bookstagram.model.Book;
import com.app.bookstagram.model.MyBooks;
import com.app.bookstagram.repository.BookRepository;
import com.app.bookstagram.repository.MyBookRepository;
import com.app.bookstagram.service.MyBookService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class MyBookServiceImpl implements MyBookService {

    @Autowired
    private MyBookRepository myBookRepository;

    @Autowired
    private BookRepository bookRepository;

    public String createMyBook(MyBookRequest myBookRequest)
    {
        long bookId =  myBookRequest.getBid();
        long userId =  myBookRequest.getUid();

        int validation = myBookRepository.exist(bookId, userId);
        if(validation == 0)
        {
        var myBook = MyBooks.builder()
                        .bid(myBookRequest.getBid())
                        .uid(myBookRequest.getUid())
                        .action("wantToRead")
                        .rating(0)
                        .build();

        myBookRepository.save(myBook);

        return "Book Added to My Books Successfully";
        }
        else
        {
            return "Already In List";
        }

    }

    public Book getMyBook(long bid)
    {
        Book myBook = bookRepository.findByBid(bid);

        return myBook;
    }

    public List<String> getAllMyBooks(long uid)
    {
        return myBookRepository.getAllMyBooks(uid);
    }

    public void updateBookAction(long bid, long uid, String action)
    {
        myBookRepository.updateBookAction(action, bid, uid);
    }

    public void updateRating(long bid, long uid, long rating)
    {
        myBookRepository.updateRating(rating, bid, uid);
    }
    
}
