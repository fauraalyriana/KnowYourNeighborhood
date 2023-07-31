package com.kyn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kyn.entity.Store;
import com.kyn.service.StoreService;

@RestController
@RequestMapping("/api/store")
public class StoreController {

	@Autowired
	private StoreService ss;
	
	@PostMapping("/addStore")
	public ResponseEntity<String> addStore(@RequestBody Store store){
		ss.addStore(store);
		
		return ResponseEntity.ok("store successfully added");
	}
	
	@GetMapping("/allStore")
	public List<Store> allStore(){
		List<Store> stores = ss.allStore();
		return stores;
	}
	
	@GetMapping(value = "", params = "id")
	public List<Store> getStoreByUserId(@RequestParam("id") long id){
		List<Store> storesResult = ss.getStoreByIdUser(id);
		return storesResult;
	}
	
}
