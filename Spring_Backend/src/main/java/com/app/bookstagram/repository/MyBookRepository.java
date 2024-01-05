package com.app.bookstagram.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.app.bookstagram.model.MyBooks;

import jakarta.transaction.Transactional;

@Repository
public interface MyBookRepository extends JpaRepository<MyBooks, Long> {

    @Transactional
    @Query(value = "select json_object('bid', b.bid, 'authorname', b.authorname, 'book_image_url', b.book_img_url, 'bookname', b.bookname, 'action' , mb.action, 'rating' , mb.rating) from book b inner join mybooks mb on b.bid = mb.bid and mb.uid = ?1", nativeQuery = true )
    public List<String> getAllMyBooks(long uid);

    @Transactional
    @Modifying
    @Query(value = "UPDATE mybooks SET action = ?1 WHERE bid = ?2 AND uid = ?3", nativeQuery = true)
    public void updateBookAction(String action, long bid, long uid);
    
    @Transactional
    @Modifying
    @Query(value = "UPDATE mybooks SET rating = ?1 WHERE bid = ?2 AND uid = ?3", nativeQuery = true)
    public void updateRating(long rating, long bid, long uid);

    @Transactional
    @Query(value = "select count(*) from mybooks where bid = ?1 and uid = ?2", nativeQuery = true)
    public int exist(long bid, long uid);

}
