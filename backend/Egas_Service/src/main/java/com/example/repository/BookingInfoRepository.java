package com.example.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.pojos.BookingInfo;
import com.example.pojos.Consumer;

@Repository
public interface BookingInfoRepository extends CrudRepository<BookingInfo, Integer> {

	
	//BookingInfo findByBookingno(int booking_no);
	BookingInfo findBybookingno(int serviceno);
	
	List<BookingInfo> findAll();
}
