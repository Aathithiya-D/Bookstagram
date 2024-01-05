package com.app.bookstagram.dto.request;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Request {
    private String bookname;
    private String authorname;
    private String dop;
    private String genre;

    @Column(columnDefinition = "MEDIUMTEXT")
    private String bookdesc;
    
    private String bookUrl1;
    private String bookImgUrl; 
}
