package com.kyn.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kyn.entity.User;


public interface UserRepository extends JpaRepository<User, Long>{

	public User findByUsername(String username);

	public Optional<User> findByEmail(String email);

	public User findByName(String name);

}
