package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.pojos.Consumer;
import com.example.repository.ConsumerRepository;
//import com.example.service.AdminService;
import com.example.service.MailService;

@CrossOrigin
@RestController
@RequestMapping("/consumer")
public class ConsumerController {

	@Autowired
	private ConsumerRepository ConsumerRepo;
	
	@Autowired
	private MailService notificationService;

//	@Autowired
//	private AdminService adminservice;

	@GetMapping("/String")
	public String getString() {
		return "Hello world";
	}

	// Code for Consumer New Connection
	@PostMapping("/register")
	Consumer addNewConsumer(@RequestBody Consumer ConsumerDetails) {
		System.out.println("in add new user " + ConsumerDetails);//

		try {
			return ConsumerRepo.save(ConsumerDetails);
		} catch (Exception e) {

			return null;
		}
		// return userRepo.save(userDetails);
	}

	// Code For Login page
	@PostMapping("/login")
	public Consumer LoginUser(@RequestParam String email, @RequestParam String pass) {
		// String retVal = "Success";
		Consumer consumerInfo;
		List<Consumer> userfind = ConsumerRepo.findByEmailAndPassword(email, pass);
		if (userfind.isEmpty()) {
			return null;
		} else
			return userfind.get(0);
	}

	@RequestMapping(value = "/viewconsumerdetails", method = RequestMethod.GET)
	public Consumer findConsumer(@RequestParam int consumerno) {
		String retVal = "Success";

		Consumer consumerDetails = ConsumerRepo.findByConsumerNo(consumerno);

		return consumerDetails;
	}

	@RequestMapping(value = "/findByEmailconsumer", method = RequestMethod.GET)
	public Consumer findByEmailConsumer(@RequestParam String email) {
		String retVal = "Success";

		Consumer consumerDetails = ConsumerRepo.findByEmail(email);

		return consumerDetails;
	}

	@GetMapping("/listofconsumer")
	public List<Consumer> getAllconsumers() {
		return ConsumerRepo.findAll();
	}

	// Terminate
	@RequestMapping(value = "/terminateconnection", method = RequestMethod.DELETE)
	public void deleteConsumer(@RequestParam int consumerno) {

		try {
			Consumer c = ConsumerRepo.findByConsumerNo(consumerno);
			ConsumerRepo.delete(c);
			ConsumerRepo.flush();
			// ConsumerRepo.deleteByConsumerNo(consumerno);
			// ConsumerRepo.deleteById(consumerno);
		} catch (Exception e) {

		}

	}
	
	
	//Email
	Consumer consumer;
	@PostMapping("/send-mail")
	public String send(@RequestParam int consumerno) {
		Consumer c = ConsumerRepo.findByConsumerNo(consumerno);
		try {
			notificationService.sendEmail(c);
		} catch (MailException mailException) {
			System.out.println(mailException);
		}
		return "Congratulations! Your mail has been send to the user.";
	}
	
	//Address Update
		@RequestMapping(value = "/UpdateAddress", method = RequestMethod.GET)
		public Consumer updateAddress(@RequestParam int consumerno,@RequestParam String address) {
			String retVal = "Success";
			// status="DISPATCHED";
			Consumer ConsumerDetails = ConsumerRepo.findByConsumerNo(consumerno);
			ConsumerDetails.setAddress(address);
			ConsumerRepo.save(ConsumerDetails);
			return ConsumerDetails;

		}
		
		//Pnone no. Update
			@RequestMapping(value = "/UpdatecontactNo", method = RequestMethod.GET)
			public Consumer updatecontactNo(@RequestParam int consumerno,@RequestParam long contactNo) {
				String retVal = "Success";
				// status="DISPATCHED";
				Consumer ConsumerDetails = ConsumerRepo.findByConsumerNo(consumerno);
				ConsumerDetails.setContactNo(contactNo);
				ConsumerRepo.save(ConsumerDetails);
				return ConsumerDetails;

			}
	
	
}
