package com.codewithshivraj.fullstackbackend.repository;

import com.codewithshivraj.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
