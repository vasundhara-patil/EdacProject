package com.example.service;

import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;

import com.example.pojos.BookingInfo;
import com.example.pojos.Consumer;

public class BookingInfoService {

	
	public void BookingMethod(Consumer consumer) throws MailException {

		/*
		 * This JavaMailSender Interface is used to send Mail in Spring Boot. This
		 * JavaMailSender extends the MailSender Interface which contains send()
		 * function. SimpleMailMessage Object is required because send() function uses
		 * object of SimpleMailMessage as a Parameter
		 */
		BookingInfo book = new BookingInfo();
		
		book.getStatus();
		/*mail.setTo(consumer.getEmail());
		mail.setSubject("Testing Mail API");
		mail.setText("Your gas is booked...");

		/*
		 * This send() contains an Object of SimpleMailMessage as an Parameter
		 
		javaMailSender.send(mail);*/
	}
}
