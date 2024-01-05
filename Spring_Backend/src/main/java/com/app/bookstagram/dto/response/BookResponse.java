package com.app.bookstagram.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookResponse {

    private Long bid;
    private String bookname;
    private String authorname;
    private String dop;
    private String book_img_url;
    private String genre;
    private String bookdesc;
    private String bookUrl1;
    private String bookImgUrl;

    
}
