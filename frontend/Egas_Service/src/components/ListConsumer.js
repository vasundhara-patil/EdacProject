import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";

function ListConsumer() {
  const [data, setData] = useState([]);
  const columns = [
    { title: "Name", field: "consumerFullName" },
    { title: "Email", field: "email" },
    { title: "Address", field: "address" },
    { title: "Consumer Number", field: "consumerNo" },
    { title: "Contact no", field: "contactNo" },
  ];
  useEffect(() => {
    fetch("http://localhost:7070/consumer/listofconsumer")
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp);
      });
  }, []);

  return (
    <div className="App">
     
      <MaterialTable title="Consumer Details" data={data} columns={columns} />
    </div>
  );
}

export default ListConsumer
