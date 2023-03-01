import React from "react";
import { Box } from "@mui/system";
import { Formik } from "formik";
import { TextField } from "@mui/material";

function AllowedEmail() {
  const initialValues = {
    email: "",
  };

  const handleFormSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Box sx={{ height: "100vh" }} className="flex justify-center items-center">
      <Formik onSubmit={handleFormSubmit} initialValues={initialValues}>
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
                InputLabelProps={{ className: "textfield__label" }}
                InputProps={{ className: "textfield__label" }}
                className="textfield  w-72 lg:w-96"
                value={values.email}
                onChange={handleChange}
              ></TextField>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default AllowedEmail;
