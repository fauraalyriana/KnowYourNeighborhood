package com.kyn.controller;

import java.io.IOException;
import java.util.Optional;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kyn.dto.UserDto;
import com.kyn.entity.User;
import com.kyn.repository.UserRepository;
import com.kyn.security.JwtTokenProvider;
import com.kyn.service.UserServiceImpl;

@RestController
@RequestMapping("/api/user")
public class UserController {

	JwtTokenProvider jwtTokenProvider = new JwtTokenProvider();
	
	
	@Autowired
	UserServiceImpl us;
	
	@Autowired
	UserRepository ur;
	
	@PostMapping("/register")
	public ResponseEntity<String> addUser(@RequestBody User user) {

		String newUser = us.save(user);
		return ResponseEntity.ok(newUser);
	}
	
}
