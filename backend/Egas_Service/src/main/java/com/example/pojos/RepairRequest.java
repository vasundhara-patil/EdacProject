package com.example.pojos;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "RepairRequest")
public class RepairRequest {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="serviceno")
	private Integer serviceno;
	
	
	@OneToOne(fetch = FetchType.EAGER,cascade = CascadeType.REMOVE)
	@JoinColumn(name="consumerNo", referencedColumnName = "consumerNo")
	private Consumer consumerNo;
	
	@DateTimeFormat(pattern = "yyyy.MM.dd")
	@Column(name="requestdate")
	private LocalDate requestdate;
	
	@Column(name="request")
	private String request;
	
	
	@Column(name="requeststatus",length = 20)
	private String requeststatus;


	public Integer getServiceno() {
		return serviceno;
	}


	public String getRequest() {
		return request;
	}


	public void setRequest(String request) {
		this.request = request;
	}


	public void setServiceno(Integer serviceno) {
		this.serviceno = serviceno;
	}


	public Consumer getConsumerNo() {
		return consumerNo;
	}


	public void setConsumerNo(Consumer consumerNo) {
		this.consumerNo = consumerNo;
	}


	public LocalDate getRequestdate() {
		return requestdate;
	}


	public void setRequestdate(LocalDate requestdate) {
		this.requestdate = requestdate;
	}


	public String getRequeststatus() {
		return requeststatus;
	}


	public void setRequeststatus(String requeststatus) {
		this.requeststatus = requeststatus;
	}


	public RepairRequest() {
		super();
		// TODO Auto-generated constructor stub
	}


}
