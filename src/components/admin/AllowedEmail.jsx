import React from "react";
import { Box } from "@mui/system";
import { Formik, ErrorMessage } from "formik";
import { TextField } from "@mui/material";
import Header from "../Sidebar/Header";
import * as yup from "yup";

function AllowedEmail() {
  const checkoutSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    role: yup.string().required("required"),
  });

  const initialValues = {
    email: "",
    role: "",
  };

  const saveEmail = async () => {
    try {
      const { data } = await axios.post("/allowedEmails/admins/add", {
        email: values.email,
      });
      Swal.fire({
        title: "Success!",
        text: "Email saved succesfully",
        icon: "success",
        confirmButtonText: "Okay",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleFormSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Box
      sx={{ height: "100vh" }}
      className="flex justify-center items-center flex-col  "
    >
      <Header title="Allowed emails" subtitle="Enter allowed emails" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          setFieldValue,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              // placeItems="center"
              color="#e0e0e0"
              gap="30px"
              sx={{
                "& > div": { gridColumn: "span 4" },
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <TextField
                label="Enter email ID"
                variant="filled"
                color="primary"
                name="email"
                InputLabelProps={{ className: "textfield__label" }}
                InputProps={{ className: "textfield__label" }}
                className="textfield  w-72 lg:w-96"
                value={values.email}
                onChange={handleChange}
                onblur={handleBlur}
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              ></TextField>

              <TextField
                select
                label="Select Role"
                variant="filled"
                color="primary"
                name="role"
                InputLabelProps={{ className: "textfield__label" }}
                InputProps={{ className: "textfield__label" }}
                className="textfield  w-72 lg:w-96"
                value={values.role}
                onChange={handleChange}
                onblur={handleBlur}
                error={!!touched.role && !!errors.role}
                helperText={touched.role && errors.role}
              ></TextField>

              <button className="btn btn-warning btn-outline" type="submit">
                Save
              </button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default AllowedEmail;
