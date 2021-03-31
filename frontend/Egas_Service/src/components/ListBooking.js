import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";

function ListBooking() {
  const [data, setData] = useState([]);
  const columns = [
    { title: "Consumer Number", field: "consumerNo" },
    { title: "Booking No", field: "bookingno" },
    { title: "Booking Date", field: "bookingdate" },
    { title: "Delivery Status", field: "status" },
  ];
  useEffect(() => {
    fetch("http://localhost:7070/listofbookings")
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp);
      });
  }, []);

  return (
    <div className="App">
     
      <MaterialTable title="Booking Details" data={data} columns={columns} />
    </div>
  );
}

export default ListBooking
