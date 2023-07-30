package com.codewithshivraj.fullstackbackend.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id) {
        super("Could Not find User with "+id);
    }
}
