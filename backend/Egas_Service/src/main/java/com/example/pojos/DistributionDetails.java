package com.example.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "distributionDetails")
public class DistributionDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="order_id")
	private Integer orderId;
	@Column(name="customer_id",length = 20,unique=true)
	private int customer_id;
	@Column(name="Booking_id",length = 20,unique=true)
	private int Booking_id;
	@Column(name="DateOfBooking",length = 20)
	private LocalDate DateOfBooking;
	@Column(name="CylinderCount",length = 20)
	private int CylinderCount;
	@Enumerated(EnumType.STRING)
	@Column(name="type",length = 20)
	private DeliveryStatus status;

	
}
