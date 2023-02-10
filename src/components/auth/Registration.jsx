import { Container } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ErrorMessage, Formik } from "formik";
import { MenuItem, TextField } from "@mui/material";
import Logo from "../../assets/exceptions/png/E.png";
import Background from "../custom_styling/Background";
import Exceptions from "../../assets/svg/male.svg";
import axios from "axios";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { State } from "country-state-city";

function Registration() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const states = State.getStatesOfCountry("IN");
  const [loading, setLoading] = useState(false);
  const url = "";

  const checkoutSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup
      .string()
      .required("required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "weak password"
      ),
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    contactNumber: yup.string().required("required").matches(
      /^[6-9]\d{9}$/,"Enter valid phone number"
    ),
    collegeName: yup.string().required("required"),
    usn: yup.string().required("required"),
    state: yup.string().required("required"),
    city: yup.string().required("required"),
    zip: yup.string().required("required"),
  });
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    contactNumber: "",
    password: "",
    collegeName: "",
    usn: "",
    state: "",
    city: "",
    zip: "",
  };

  const loginAuth = async (values) => {};

  const handleFormSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setLoading(true);
      // console.log(import.meta.env.VITE_API_ENDPOINT);

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}auth/register-participant`,
        {
          email: values.email,
          firstName: values.firstName,
          lastName: values.lastName,
          contactNumber: values.contactNumber,
          password: values.password,
          collegeName: values.collegeName,
          usn: values.usn,
          state: values.state,
          city: values.city,
          zip: values.zip,
        }
      );

      console.log(data);

      try {
        await axios.post(
          `${import.meta.env.VITE_API_ENDPOINT}auth/send-confirmation-email`,
          {
            userId: data.userId,
          }
        );
        alert(
          "We have sent you a confirmation email, please verify your email before logging in"
        );
      } catch (err) {
        alert(err.response.data.error);
      }

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
      alert(err.response.data.error);
    }

    resetForm();
  };

  return (
    <Container maxWidth="xl">
      <Background />
      <section className="h-full gradient-form  md:h-screen login-container text-center">
        <div className="container py-3 px-6 h-full w-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800 w-full">
            <div className="xl:w-10/12">
              <div
                className="block text-neutral-content login-container-part1
        h-full w-full  rounded-md bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0
         shadow-lg rounded-lg
         border-2 border-sky-500
         "
              >
                <div className="lg:flex lg:flex-wrap g-0 w-full">
                  <div className="lg:w-6/12 px-4 md:px-0 w-full">
                    <div className="md:p-12 md:mx-6 w-full">
                      <div className="text-center">
                        <img className="mx-auto w-36" src={Logo} alt="logo" />
                        <h4
                          className="text-xl font-semibold  mb-3 pb-1 text-primary"
                          style={{ fontFamily: "Orbitron" }}
                        >
                          EXCEPTIONS - 2023
                        </h4>
                      </div>
                      <Formik
                        initialValues={initialValues}
                        validationSchema={checkoutSchema}
                        onSubmit={handleFormSubmit}
                      >
                        {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                          /* and other goodies */
                        }) => (
                          <form
                            onSubmit={handleSubmit}
                            className="w-full"
                            style={{
                              width: "100%",
                              // boxShadow: "7px 7px 9px 0px rgba(0,0,0,0.47)",
                              boxShadow: isNonMobile
                                ? "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"
                                : null,
                              maxWidth: "40rem",
                              color: "#e0e0e0",
                              margin: "0 auto",

                              borderRadius: "6px",

                              // display: "grid",
                              // placeItems: "center",
                              // height: "100%",
                            }}
                          >
                            <p className="mb-4 font-bold ">
                              Lets create an account
                            </p>
                            <div className="flex justify-around items-center  w-full flex-wrap">
                              <div className="mb-4 basis-full lg:basis-1/2 ">
                                <TextField
                                  fullWidth={!isNonMobile}
                                  variant="filled"
                                  type="text"
                                  label="First Name"
                                  onBlur={handleBlur}
                                  size="small"
                                  onChange={handleChange}
                                  value={values.firstName}
                                  name="firstName"
                                  sx={{
                                    gridColumn: "span 4",
                                    background: "#fff",
                                    color: "#000",
                                    borderRadius:'4px'
                                  }}
                                  error={
                                    !!touched.firstName && !!errors.firstName
                                  }
                                  helperText={
                                    touched.firstName && errors.firstName
                                  }
                                />
                              </div>

                              <div className="mb-4 basis-full lg:basis-1/2">
                                <TextField
                                  fullWidth={!isNonMobile}
                                  variant="filled"
                                  type="text"
                                  label="Last Name"
                                  size="small"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.lastName}
                                  name="lastName"
                                  error={
                                    !!touched.lastName && !!errors.lastName
                                  }
                                  helperText={
                                    touched.lastName && errors.lastName
                                  }
                                  sx={{
                                    gridColumn: "span 4",
                                    background: "#fff",
                                    color: "#000",
                                    borderRadius:'4px'
                                  }}
                                  className="textfield"
                                />
                              </div>

                              <div className="mb-4 basis-full lg:basis-1/2">
                                <TextField
                                  fullWidth={!isNonMobile}
                                  variant="filled"
                                  type="text"
                                  label="Contact Number"
                                  size="small"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.contactNumber}
                                  name="contactNumber"
                                  error={
                                    !!touched.contactNumber &&
                                    !!errors.contactNumber
                                  }
                                  helperText={
                                    touched.contactNumber &&
                                    errors.contactNumber
                                  }
                                  sx={{
                                    gridColumn: "span 4",
                                    background: "#fff",
                                    color: "#000",
                                    borderRadius:'4px'
                                  }}
                                />
                              </div>

                              <div className="mb-4 basis-full lg:basis-1/2">
                                <TextField
                                  fullWidth={!isNonMobile}
                                  variant="filled"
                                  type="email"
                                  label="Email"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.email}
                                  name="email"
                                  size="small"
                                  error={!!touched.email && !!errors.email}
                                  helperText={touched.email && errors.email}
                                  sx={{
                                    gridColumn: "span 4",
                                    background: "#fff",
                                    color: "#000",
                                    borderRadius:'4px'
                                  }}
                                />
                              </div>

                              <div className="mb-4 basis-full lg:basis-1/2">
                                <TextField
                                  fullWidth={!isNonMobile}
                                  variant="filled"
                                  type="text"
                                  label="College Name"
                                  onBlur={handleBlur}
                                  size="small"
                                  onChange={handleChange}
                                  value={values.collegeName}
                                  name="collegeName"
                                  error={
                                    !!touched.collegeName &&
                                    !!errors.collegeName
                                  }
                                  helperText={
                                    touched.collegeName && errors.collegeName
                                  }
                                  sx={{
                                    gridColumn: "span 4",
                                    background: "#fff",
                                    color: "#000",
                                    borderRadius:'4px'
                                  }}
                                />
                              </div>

                              <div className="mb-4 basis-full lg:basis-1/2">
                                <TextField
                                  fullWidth={!isNonMobile}
                                  variant="filled"
                                  type="text"
                                  label="USN"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.usn}
                                  name="usn"
                                  size="small"
                                  error={!!touched.usn && !!errors.usn}
                                  helperText={touched.usn && errors.usn}
                                  sx={{
                                    gridColumn: "span 4",
                                    background: "#fff",
                                    color: "#000",
                                    borderRadius:'4px'
                                  }}
                                />
                              </div>

                              <div className="mb-4 basis-full lg:basis-1/2">
                                <TextField
                                  fullWidth={!isNonMobile}
                                  variant="filled"
                                  type="text"
                                  label="City"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.city}
                                  name="city"
                                  size="small"
                                  error={!!touched.city && !!errors.city}
                                  helperText={touched.city && errors.city}
                                  sx={{
                                    gridColumn: "span 4",
                                    background: "#fff",
                                    color: "#000",
                                    borderRadius:'4px'
                                  }}
                                />
                              </div>

                              <div className="mb-4 basis-full lg:basis-1/2">
                                <TextField
                                  fullWidth={!isNonMobile}
                                  variant="filled"
                                  type="text"
                                  label="Pin code"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.zip}
                                  name="zip"
                                  size="small"
                                  error={!!touched.zip && !!errors.zip}
                                  helperText={touched.zip && errors.zip}
                                  sx={{
                                    gridColumn: "span 4",
                                    background: "#fff",
                                    color: "#000",
                                    borderRadius:'4px'
                                  }}
                                />
                              </div>

                              <div className="mb-4 basis-full lg:basis-1/2">
                                <TextField
                                  fullWidth={!isNonMobile}
                                  select
                                  label="Select state"
                                  sx={{
                                    gridColumn: "span 4",
                                    background: "#fff",
                                    color: "#000",
                                    textAlign: "left",
                                    width: isNonMobile ? "200px" : null,
                                    borderRadius:'4px'
                                  }}
                                  variant="filled"
                                  size="small"
                                  color="primary"
                                  className="textfield w-full"
                                  name="state"
                                  id="state"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={!!touched.state && !!errors.state}
                                  helperText={touched.state && errors.state}
                                >
                                  {states
                                    ? states.map((stateVal) => (
                                        <MenuItem
                                          value={stateVal.name}
                                          key={stateVal.name}
                                        >
                                          {stateVal.name}
                                        </MenuItem>
                                      ))
                                    : null}
                                </TextField>
                              </div>

                              <div className="mb-4 basis-full lg:basis-1/2">
                                <TextField
                                  fullWidth={!isNonMobile}
                                  variant="filled"
                                  type="text"
                                  label="Password"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.password}
                                  name="password"
                                  error={!!touched.password && !!errors.password}
                                  helperText={touched.password && errors.password}
                                  size="small"
                                  sx={{
                                    gridColumn: "span 4",
                                    background: "#fff",
                                    color: "#000",
                                    borderRadius:'4px'
                                  }}
                                  className="textfield"
                                />


                              </div>

                              <div className="text-center pt-1 mb-6 basis-full pb-1">
                                <button
                                  className={` py-2.5 text-neutral btn btn-outline btn-warning
                                text-neutral font-bold btn-register
                               text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg 
                               focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition
                                duration-150 ease-in-out w-full  ${
                                  loading ? "loading" : null
                                } `}
                                  type="submit"
                                  data-mdb-ripple="true"
                                  data-mdb-ripple-color="light"
                                >
                                  Register
                                </button>
                              </div>
                            </div>

                            <div className="">
                              <p className="mb-0 font-bold login-link ">
                                Already have an account?{" "}
                                <Link to="/login" className="text-warning">
                                  Click here
                                </Link>
                              </p>

                              <p className="text-primary font-bold  underline text-center mt-3">
                                {" "}
                                <Link to="/">Back Home</Link>
                              </p>
                            </div>
                          </form>
                        )}
                      </Formik>
                    </div>
                  </div>
                  <div
                    className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none
              justify-center align-center
              login-container-part2 
             
             "
                    style={{
                      background: "linear-gradient(to right, #8360c3, #2ebf91)",
                    }}
                  >
                    <img
                      src={Exceptions}
                      style={{ width: "500px", height: "500px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Registration;
