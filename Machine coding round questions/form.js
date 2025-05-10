import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Test = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      age: "",
      gender: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Please enter First Name"),
      lastName: Yup.string().required("Please enter Last Name"),
      email: Yup.string().email("Invalid email").required("Please enter Email"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Please enter Password"),
      age: Yup.number().required("Please enter Age").positive().integer(),
      gender: Yup.string().required("Please select Gender"),
    }),
    onSubmit: (values) => {
      alert("Form submitted successfully ✅");
      console.log("Form Data:", values);
    },
  });

  return (
    <div>
      <h2>Application Form</h2>
      <div style={{ margin: "60px" }}>
        <form onSubmit={formik.handleSubmit}>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            style={{ marginLeft: "20px" }}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div style={{ color: "red" }}>{formik.errors.firstName}</div>
          )}
          <br />
          <br />

          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            style={{ marginLeft: "20px" }}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div style={{ color: "red" }}>{formik.errors.lastName}</div>
          )}
          <br />
          <br />

          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            style={{ marginLeft: "20px" }}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          )}
          <br />
          <br />

          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            style={{ marginLeft: "20px" }}
          />
          {formik.touched.password && formik.errors.password && (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          )}
          <br />
          <br />

          <label>Age</label>
          <input
            type="number"
            name="age"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
            style={{ marginLeft: "20px" }}
          />
          {formik.touched.age && formik.errors.age && (
            <div style={{ color: "red" }}>{formik.errors.age}</div>
          )}
          <br />
          <br />

          <label>Gender</label>
          <select
            name="gender"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gender}
            style={{ marginLeft: "20px" }}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {formik.touched.gender && formik.errors.gender && (
            <div style={{ color: "red" }}>{formik.errors.gender}</div>
          )}
          <br />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Test;
