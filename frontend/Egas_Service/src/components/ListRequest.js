import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";

function ListRequest() {
  const [data, setData] = useState([]);
  const columns = [
    { title: "Service Number", field: "serviceno" },
    { title: "Consumer Number", field: "consumerNo: { consumerNo}"},
    { title: "Request", field: "request" },
    { title: "Request Date", field: "requestdate" },
    { title: "Request Status", field: "requeststatus" },
  ];
  useEffect(() => {
    fetch("http://localhost:7070/repair/listofrequest")
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp);
      });
  }, []);

  return (
    <div className="App">
      <MaterialTable title="Request Details" data={data} columns={columns} />
    </div>
  );
}

export default ListRequest;
