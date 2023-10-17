import React, { useState } from "react";
import { SuppliersData } from "../data/SuppliersData";

function Suppliers() {
  const [suppliers, setSuppliers] = useState(SuppliersData);

  const deleteSuppliers = (id) => {
    var result = window.confirm("Want to delete?");
    if (result) {
      var filteredSuppliers = suppliers.filter((q) => q.id !== id);
      setSuppliers([...filteredSuppliers]);
    }
  };
  const sortSuppliers = () => {
    var sortedSuppliers = suppliers.sort((a, b) => {
      return a.companyName.localeCompare(b.companyName);
    });
    setSuppliers([...sortedSuppliers]);
  };

  return (
    <>
      <h1>Length: {suppliers.length}</h1>
      <table className="w3-table w3-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th onClick={() => sortSuppliers()}>Company Name</th>
            <th>Contact Name</th>
            <th>Country</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.companyName}</td>
                <td>{item.contactName}</td>
                <td>{item.address.country}</td>
                <td>
                  <button
                    onClick={() => deleteSuppliers(item.id)}
                    className="w3-button w3-red"
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Suppliers;
