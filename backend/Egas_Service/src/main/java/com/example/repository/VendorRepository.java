package com.example.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.pojos.Vendor;

public interface VendorRepository extends CrudRepository<Vendor, Integer> {

}
