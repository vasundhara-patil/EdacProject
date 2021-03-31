package com.example.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.pojos.BookingInfo;
import com.example.pojos.Consumer;
import com.example.pojos.DeliveryStatus;

import com.example.repository.BookingInfoRepository;
import com.example.repository.ConsumerRepository;

@CrossOrigin
@RestController
public class BookingInfoController {

	@Autowired
	private BookingInfoRepository bookingRepo;

	
	@Autowired
	private ConsumerRepository ConsumerRepo;
	
	
	
	
	@PostMapping("/Booking")
	BookingInfo gasBook(@RequestBody BookingInfo bookingDetails) {

		
		
		try {
		
			
			return bookingRepo.save(bookingDetails);
	
		 
		}
		catch(Exception e) {
			
			return null;
		}
	}

	/*@PostMapping("/viewbookingdetails")
	BookingInfo viewbookingdetails(@RequestParam int booking_no) {

		BookingInfo BookingDetails = bookingRepo.findByBookingno(booking_no);

		return BookingDetails;
	}*/
	
	//List of booking
	@GetMapping("/listofbookings")
	public List<BookingInfo> getAllbookingss() {
		return bookingRepo.findAll();
	}
	//Updtate Status

	@RequestMapping(value = "/bookingstatus", method = RequestMethod.GET)
	public BookingInfo bookingStatus(@RequestParam int bookingno) {
		String retVal = "Success";
		//status="DISPATCHED";
		BookingInfo bookingDetails=bookingRepo.findBybookingno(bookingno);
		bookingDetails.setStatus("DISPATCHED");
		 bookingRepo.save(bookingDetails);
		 return bookingDetails;
		 
	}
	

}
