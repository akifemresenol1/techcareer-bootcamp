import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const addProductValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name boş bırakılmaz"),
  unitPrice: Yup.number()
    .min(2, "Too Short!")
    .required("Unit Price boş bırakılmaz"),
  unitsInStock: Yup.number().required("Stock boş bırakılmaz"),
  quantityPerUnit: Yup.string().required("Quantity Per Unit boş bırakılmaz"),
});

function AddCategory() {
  const formik = useFormik({
    initialValues: {
      name: "",
      unitPrice: "",
      unitsInStock: "",
      quantityPerUnit: "",
    },
    validationSchema: addProductValidationSchema,
    onSubmit: (values) => {
      axios
        .post("https://northwind.vercel.app/api/products", values)
        .then((res) => {
          console.log("Success!");
        });
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <p style={{ color: "red" }}>{formik.errors.name}</p>
          ) : (
            <></>
          )}
        </div>
        <div>
          <label htmlFor="">Unit Price:</label>
          <input
            type="text"
            name="unitPrice"
            onChange={formik.handleChange}
            value={formik.values.unitPrice}
          />
          {formik.errors.unitPrice ? (
            <p style={{ color: "red" }}>{formik.errors.unitPrice}</p>
          ) : (
            <></>
          )}
        </div>
        <div>
          <label htmlFor="">Stock:</label>
          <input
            type="text"
            name="unitsInStock"
            onChange={formik.handleChange}
            value={formik.values.unitsInStock}
          />
          {formik.errors.unitsInStock ? (
            <p style={{ color: "red" }}>{formik.errors.unitsInStock}</p>
          ) : (
            <></>
          )}
        </div>
        <div>
          <label htmlFor="">Quantity Per Unit:</label>
          <input
            type="text"
            name="quantityPerUnit"
            onChange={formik.handleChange}
            value={formik.values.quantityPerUnit}
          />
          {formik.errors.quantityPerUnit ? (
            <p style={{ color: "red" }}>{formik.errors.quantityPerUnit}</p>
          ) : (
            <></>
          )}
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
}

export default AddCategory;
