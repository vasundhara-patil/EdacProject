//package com.example.service;
//
//import javax.annotation.PostConstruct;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.example.pojos.Consumer;
//import com.example.repository.ConsumerRepository;
//
//@Service
//public class AdminService {
//
//	
//	@Autowired
//	private ConsumerRepository ConsumerRepo;
//	
//	@PostConstruct
//    private void postConstruct() {
//		
//		try {
//		
//		Consumer admin = new Consumer();
//		//Consumer normalUser = new Consumer("user", "user password");
//		
//		admin.setConsumerNo(null);
//		admin.setEmail("admin@gmail.com");
//		admin.setPassword("admin123");
//		admin.setIsadmin(true);
//		//ConsumerRepo.deleteByEmail("admin@gmail.com");
//		
//		ConsumerRepo.save(admin);
//		}
//		catch(Exception e) {
//			
//		}
//		
//    }
//}
