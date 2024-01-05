package com.app.bookstagram.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.bookstagram.dto.request.UserRequest;
import com.app.bookstagram.dto.response.UserResponse;
import com.app.bookstagram.model.User;
import com.app.bookstagram.model.enumerate.Role;
import com.app.bookstagram.repository.UserRepository;
import com.app.bookstagram.service.UserService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;


    @Override
    public List<UserResponse> getAllUsers() {
        List<User> userList = userRepository.findAll();
        return userList.stream()
                .filter(user -> !user.getRole().equals(Role.ADMIN))
                .map(this::mapUserToUserResponse)
                .collect(Collectors.toList());
    }

    @Override
    public UserResponse getUser(Long uid) {
        User user = userRepository.findByUid(uid);
        return mapUserToUserResponse(user);
    }

    @Override
    public UserResponse updateUser(UserRequest request, Long uid) {
       
        User user = userRepository.findByUid(uid);
        if(user != null)
        {
            if(request.getName() == null)
            user.setName(user.getName());
            else
            user.setName(request.getName());

            if(request.getPassword() == null)
            user.setPassword(user.getPassword());
            else
            user.setPassword(passwordEncoder.encode(request.getPassword()));

            userRepository.save(user);
        }
        return mapUserToUserResponse(user);
    }


    private UserResponse mapUserToUserResponse(User user) {
        return UserResponse.builder()
                .uid(user.getUid())
                .name(user.getName())
                .email(user.getEmail())
                .role(user.getRole())
                .isEnabled(user.getIsEnabled())
                .build();
    }

    @Override
    public String deleteUser(Long uid)
    {
        userRepository.deleteByUid(uid);
        return "Deleted Successfully";
    }

    @Override
    public Long getUserCount()
    {
        return userRepository.userCount();
    }

    

}
