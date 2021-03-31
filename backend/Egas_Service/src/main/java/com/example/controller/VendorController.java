package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pojos.Consumer;
import com.example.pojos.Vendor;
import com.example.repository.ConsumerRepository;
import com.example.repository.VendorRepository;

@RestController
@RequestMapping("/vendor")
public class VendorController {
	
	@Autowired
	private VendorRepository VendorRepo;
	
	@PostMapping("/vendorDetails")
	Vendor addNewvnedor(@RequestBody Vendor vendorDetails) {
		System.out.println("in add new vendor " + vendorDetails);// 
		return VendorRepo.save(vendorDetails);
	}

}
