import React from "react";
import { productsData } from "./productsData";
import "./ProductsTable.css";

function ProductsTable() {
  return (
    <>
      <table className="w3-table">
        <thead>
          <tr>
            <th className="products">ID</th>
            <th className="products">Name</th>
            <th className="products">Price</th>
            <th className="products">Stock</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map((item) => {
            return (
              <tr>
                <td>{item.id}:</td>
                <td>{item.name}</td>
                <td>{item.unitPrice}</td>
                <td>{item.unitsInStock}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ProductsTable;
