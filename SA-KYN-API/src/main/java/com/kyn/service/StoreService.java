package com.kyn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kyn.entity.Store;
import com.kyn.repository.StoreRepository;


@Service
public class StoreService {

	@Autowired
	private StoreRepository sr;
	
	public void addStore(Store store) {
		sr.save(store);
	}
	
	public List<Store> allStore(){
		List<Store> stores = sr.findAll();
		return stores;
	}
	
	public List<Store> getStoreByIdUser(long id){
		List<Store> stores = sr.findStoreByUserId(id);
		return stores;
	}
}
