package com.app.bookstagram.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "mybooks")
public class MyBooks {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long mbid;

    private long bid;
    private long uid;
    private String action;
    private long rating;
    
}
