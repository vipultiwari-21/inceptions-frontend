import React, { useState, useEffect } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Formik } from "formik";
import Header from "../Sidebar/Header";
import { ImageList, ImageListItem } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import * as yup from "yup";

function PaymentInfo() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const initialValues = {
    transactionID: "",
    image: "",
  };

  const checkoutSchema = yup.object().shape({
    transactionID: yup.string().required("required"),
  });

  const handleFormSubmit = async (values, { resetForm }) => {
    console.log(values);
  };

  return (
    <Box m="20px" className="w-full ">
      <Header
        title="Transaction Details"
        subtitle="Please upload screenshot of payment recieved by RVCE with transaction ID"
      />

      <Box
        m="20px"
        sx={{
          height: isNonMobile ? "80vh" : "100%",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
        }}
        className="w-full "
      >
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
            setFieldValue,
            handleChange,
            handleSubmit,
          }) => (
            <form
              onSubmit={handleSubmit}
              style={{
                width: "100%",
                // boxShadow: "7px 7px 9px 0px rgba(0,0,0,0.47)",
                boxShadow: isNonMobile
                  ? "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"
                  : null,
                maxWidth: "60rem",
                color: "#e0e0e0",
                margin: "0 auto",
                padding: isNonMobile ? "2rem" : null,
                borderRadius: "6px",
                background: isNonMobile ? "#1F2A40" : null,
                // display: "grid",
                // placeItems: "center",
                // height: "100%",
              }}
            >
              <Typography
                variant={isNonMobile ? "h4" : "h6"}
                color="#e0e0e0"
                fontWeight="bold"
                mb="2rem"
              >
                PARTICIPANT
              </Typography>
              {error && (
                <Box
                  mb="1rem"
                  sx={{
                    color: "#e87c03",
                    display: "flex",
                    // justifyContent: "center",
                    gap: "0.5rem",
                    alignItems: "center",
                    borderRadius: "5px",
                  }}
                  p=".5rem"
                >
                  <ErrorIcon />
                  {error}
                </Box>
              )}
              <Box
                display="grid"
                // placeItems="center"
                color="#e0e0e0"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
                className="w-full "
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Transaction ID"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.transactionID}
                  name="transactionID"
                  error={!!touched.transactionID && !!errors.transactionID}
                  helperText={touched.transactionID && errors.transactionID}
                  sx={{ gridColumn: "span 8" }}
                  InputLabelProps={{ className: "textfield__label" }}
                  InputProps={{ className: "textfield__label" }}
                  className="textfield"
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="file"
                  onBlur={handleBlur}
                  onChange={(e) => {
                    console.log(e);
                    setFieldValue("image", e.currentTarget.files[0]);
                    setSelectedImage(e.currentTarget.files[0]);
                  }}
                  name="image"
                  error={!!touched.image && !!errors.image}
                  helperText={touched.image && errors.image}
                  sx={{ gridColumn: "span 8" }}
                  InputLabelProps={{ className: "textfield__label" }}
                  InputProps={{ className: "textfield__label" }}
                  className="textfield"
                />
              </Box>

                {/*
            
              {selectedImage ? <Box className="w-full my-8 flex items-center justify-center  ">
               
                    <Box
                    component="img"
                    sx={{
                      height: 300,
                      width: 500,
                      maxHeight: { xs: 200, md: 167,lg:450 },
                      maxWidth: { xs: 200, md: 250 ,lg:450 },
                      margin:0,
                      padding:0
                    
                    }}
                    alt="The house from the offer."
                    src={URL.createObjectURL(selectedImage)}

                  />
               
              </Box>
               : null}
            */}
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt="20px"
              >
                {loading ? (
                  <CircularProgress />
                ) : (
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={{
                      padding: "10px 20px",
                      width: "100%",
                      fontSize: "16px",
                      letterSpacing: "0.15rem",
                      fontWeight: "bold",
                    }}
                  >
                    Save
                  </Button>
                )}
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default PaymentInfo;
