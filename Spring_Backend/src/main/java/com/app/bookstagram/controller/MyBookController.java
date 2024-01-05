package com.app.bookstagram.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.app.bookstagram.constant.Api;
import com.app.bookstagram.dto.request.MyBookRequest;
import com.app.bookstagram.model.Book;
import com.app.bookstagram.service.MyBookService;


@RestController
@CrossOrigin
@RequestMapping(Api.MYBOOK)
public class MyBookController {

    @Autowired
    private MyBookService myBookService;

    @PostMapping("/addMyBook")
    public String createMyBook(@RequestBody MyBookRequest mybookRequest)
    {
        return myBookService.createMyBook(mybookRequest);
    }

    @PutMapping("/updateBookAction/{bid}/{uid}/{action}")
    public void updateBookAction(@PathVariable("bid") long bid,@PathVariable("uid") long uid, @PathVariable("action") String action)
    {
         myBookService.updateBookAction(bid, uid, action);
    }

    @PutMapping("/updateRating/{bid}/{uid}/{rating}")
    public void updateRating(@PathVariable("bid") long bid,@PathVariable("uid") long uid, @PathVariable("rating") long rating)
    {
         myBookService.updateRating(bid, uid, rating);
    }

    @GetMapping("/getMyBook/{bid}")
    public Book getMyBook(@PathVariable("bid") long bid)
    {
        return myBookService.getMyBook(bid);
    }

    @GetMapping("getAllMyBooks/{uid}")
    public List<String> getAllMyBooks(@PathVariable("uid") long uid)
    {
        return myBookService.getAllMyBooks(uid);
    }
    
}
