package com.example.pojos;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "BookingInfo")
public class BookingInfo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="bookingno")
	private Integer bookingno;
	
	
	@OneToOne(fetch = FetchType.EAGER,cascade = CascadeType.REMOVE)
	@JoinColumn(name="consumerNo", referencedColumnName = "consumerNo")
	private Consumer consumerNo;
	
	@Column(name="bookingdate")
	private LocalDate bookingdate;
	
	@Column(name="isBooked",length = 20)
	private Boolean isBooked;
	
	@Column(name="status",length = 20)
	private String status;

	
	

	public BookingInfo() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	//SetterGetter

	


	public Integer getBookingno() {
		return bookingno;
	}



	public void setBookingno(Integer bookingno) {
		this.bookingno = bookingno;
	}



	public Consumer getConsumerNo() {
		return consumerNo;
	}


	public void setConsumerNo(Consumer consumerNo) {
		this.consumerNo = consumerNo;
	}


	public LocalDate getbookingdate() {
		return bookingdate;
	}


	public void setDateOfBooking(LocalDate dateOfBooking) {
		bookingdate = dateOfBooking;
	}


	public Boolean getIsBooked() {
		return isBooked;
	}


	public void setIsBooked(Boolean isBooked) {
		this.isBooked = isBooked;
	}



	public String getStatus() {
		return status;
	}



	public void setStatus(String status) {
		this.status = status;
	}


	
	

}
