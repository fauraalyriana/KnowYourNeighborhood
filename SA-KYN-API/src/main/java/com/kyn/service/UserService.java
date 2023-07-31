package com.kyn.service;

import java.util.List;

import com.kyn.entity.User;

public interface UserService {
	
	List<User> listUser() throws Exception;
	
	User getUserById (int id) throws Exception;

}
