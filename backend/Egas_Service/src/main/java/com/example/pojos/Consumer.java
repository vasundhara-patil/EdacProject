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
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "newconnection")
public class Consumer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="consumerNo")
	private Integer consumerNo;
	
	//relation
	//relation
			@OneToOne(fetch = FetchType.EAGER,cascade = CascadeType.REMOVE)
		private BookingInfo bookinginfo;
	
			//relation
			@OneToOne(fetch = FetchType.EAGER,cascade = CascadeType.REMOVE)
		private RepairRequest request;
	/*@OneToOne
	@JoinColumn(name="userId", referencedColumnName = "userId")
	private User userId;
	*/

	@OneToOne 
	@JoinColumn(name="vendorId",referencedColumnName = "vendorId")
	private Vendor vendorId;
	

	

	@Column(name="consumerFullName",length = 50)
	private String consumerFullName;
	

	
	@Column(name="gender",length = 20)
	private String gender;
	
	@DateTimeFormat(pattern = "yyyy.MM.dd")
	@Column(name="dob",length = 20)
	private LocalDate dob;
	
	@Column(name="contactNo",length = 10)
	private long contactNo;
	
	@Column(name="email",unique =true)
	private String email;
	
	@Column(name="password",length = 20,unique =true, nullable = false)
	private String password;
	
	

	// admin
	@Column(name="isadmin")
	private boolean isadmin=false;
	
	public boolean isIsadmin() {
		return isadmin;
	}


	public void setIsadmin(boolean isadmin) {
		this.isadmin = isadmin;
	}


	public BookingInfo getBookinginfo() {
		return bookinginfo;
	}


	public void setBookinginfo(BookingInfo bookinginfo) {
		this.bookinginfo = bookinginfo;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	@Column(name="pancardNo",length = 20, unique=true)
	private String pancardNo;
	
	@Column(name="aadharNo",length = 20, unique=true)
	private long aadharNo;
	
	@Column(name="address",length = 50)
	private String address;
	
	@Column(name="city",length = 50)
	private String city;
	
	@Column(name="state",length = 50)
	private String state;
	
	@Column(name="neardealerlocation",length = 20)
	private String neardealerlocation;
	
	@Lob
	@Column(name="ConsumerImage")
	private byte[] ConsumerImage;

	
	
	
	//COnstrustor
	public Consumer() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Integer getConsumerNo() {
		return consumerNo;
	}


	public void setConsumerNo(Integer consumerNo) {
		this.consumerNo = consumerNo;
	}

/*	public User getUserId() {
		return userId;
	}


	public void setUserId(User userId) {
		this.userId = userId;
	}

*/
	
	public Vendor getVendorId() {
		return vendorId;
	}


	public void setVendorId(Vendor vendorId) {
		this.vendorId = vendorId;
	}


	public String getConsumerFullName() {
		return consumerFullName;
	}


	public void setConsumerFullName(String consumerFullName) {
		this.consumerFullName = consumerFullName;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public LocalDate getDob() {
		return dob;
	}


	public void setDob(LocalDate dob) {
		this.dob = dob;
	}


	public long getContactNo() {
		return contactNo;
	}


	public void setContactNo(long contactNo) {
		this.contactNo = contactNo;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPancardNo() {
		return pancardNo;
	}


	public void setPancardNo(String pancardNo) {
		this.pancardNo = pancardNo;
	}


	public long getAadharNo() {
		return aadharNo;
	}


	public void setAadharNo(long aadharNo) {
		this.aadharNo = aadharNo;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getState() {
		return state;
	}


	public void setState(String state) {
		this.state = state;
	}


	

	public String getNeardealerlocation() {
		return neardealerlocation;
	}


	public void setNeardealerlocation(String neardealerlocation) {
		this.neardealerlocation = neardealerlocation;
	}


	public byte[] getConsumerImage() {
		return ConsumerImage;
	}


	public void setConsumerImage(byte[] consumerImage) {
		ConsumerImage = consumerImage;
	}
	
	//getter setter
	

//
}
