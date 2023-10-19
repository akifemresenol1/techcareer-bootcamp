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
        .post("https://northwind.vercel.app/api/categories", values)
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
        </div>
        <div>
          <label htmlFor="">Unit Price:</label>
          <input
            type="text"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.unitPrice}
          />
        </div>
        <div>
          <label htmlFor="">Stock:</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.unitsInStock}
          />
        </div>
        <div>
          <label htmlFor="">Quantity Per Unit:</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.quantityPerUnit}
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
}

export default AddCategory;
