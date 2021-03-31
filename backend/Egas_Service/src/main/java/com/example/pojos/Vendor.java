package com.example.pojos;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.OneToOne;


@Entity
@Table(name = "vendor")
public class Vendor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="vendorId")
	private Integer vendorId;
	
	//relation
		@ManyToOne
		private Consumer consumer;
	
	@Column(name="vendorName")
	private String vendorName;

	public Integer getVendorId() {
		return vendorId;
	}

	public void setVendorId(Integer vendorId) {
		this.vendorId = vendorId;
	}

	public String getVendorName() {
		return vendorName;
	}

	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
	}
	
	

	public Consumer getComsumer() {
		return consumer;
	}

	public void setComsumer(Consumer comsumer) {
		this.consumer = consumer;
	}

	public Vendor() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
		
}
