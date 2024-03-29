package com.app.bookstagram.dto.response;

import com.app.bookstagram.model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {
    private Long uid;
    private String name;
    private String email;
    private String password;
    private Boolean isEnabled;
    private Role role;
}
