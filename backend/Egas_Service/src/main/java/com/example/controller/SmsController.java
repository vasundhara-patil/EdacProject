package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pojos.Consumer;
import com.example.service.MailService;

//@RestController
public class SmsController {
/*
	@Autowired
	private MailService notificationService;
	
	@Autowired
	private Consumer consumer;
	
	@RequestMapping("/send-mail")
	public String send() {
		
		try {
			notificationService.sendEmail(consumer);
		} catch (MailException mailException) {
			System.out.println(mailException);
		}
		return "Congratulations! Your mail has been send to the user.";
	}
	*/
}
