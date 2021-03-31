package com.example.controller;



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
import com.example.pojos.RepairRequest;
import com.example.repository.RepairRequestRepository;

@CrossOrigin
@RestController
@RequestMapping("/repair")
public class RepairRequestController {
	
	@Autowired
	private RepairRequestRepository repairRepo;
	
	
	// Code for Consumer request of repair
		@PostMapping("/repairservice")
		RepairRequest addNewConsumer(@RequestBody RepairRequest requestDetails) {
			System.out.println("in add new user " + requestDetails);//

			try {
				return repairRepo.save(requestDetails);
			} catch (Exception e) {

				return null;
			}
			// return userRepo.save(userDetails);
		}

		//list of request
		@GetMapping("/listofrequest")
		public List<RepairRequest> getAllrequests() {
			return repairRepo.findAll();
		}
		
		//Upate request
		@RequestMapping(value = "/requeststatus", method = RequestMethod.GET)
		public RepairRequest repairStatus(@RequestParam int serviceno) {
			String retVal = "Success";
			//status="DISPATCHED";
			RepairRequest requestDetails=repairRepo.findByserviceno(serviceno);
			requestDetails.setRequeststatus("Resolved");
			 repairRepo.save(requestDetails);
			 return requestDetails;
			 
		}
}
