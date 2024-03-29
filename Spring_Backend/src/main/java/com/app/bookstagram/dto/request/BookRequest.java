package com.app.bookstagram.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookRequest {
    private String bookname;
    private String authorname;
    private String dop;
    private String genre;
    private String bookdesc;
    private String bookUrl1;
    private String bookImgUrl;
}
