package com.example.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;


import com.example.pojos.RepairRequest;

public interface RepairRequestRepository  extends CrudRepository<RepairRequest, Integer>   {

	List<RepairRequest> findAll();
	
	RepairRequest findByserviceno(int serviceno);
}
