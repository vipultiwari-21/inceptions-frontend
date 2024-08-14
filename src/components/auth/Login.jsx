import { Container } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import Logo from "../../assets/exceptions/png/E.png";
import Background from "../custom_styling/Background";
import { useNavigate } from "react-router-dom";
import Exceptions from "../../assets/svg/male.svg";
import { stateModifier } from "../../features/reducers/slice";
import { accessTokenModifier } from "../../features/reducers/accessToken";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { Button, Modal, InputAdornment, TextField, Icon } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import axios from "../../features/Interceptors/apiInterceptor";
import Loading from "../../Loading";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);

  const checkoutSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
  });
  const initialValues = {
    email: "",
    password: "",
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const handleFormSubmit = async (values, { setSubmitting, resetForm }) => {
    // const data = await loginAuth(values);

    try {
      setLoading(true);
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}auth/login`,
        {
          email: values.email,
          password: values.password,
        }
      );
      dispatch(stateModifier(true));
      dispatch(accessTokenModifier(data.accessToken));
      Cookies.set("token", data.accessToken);
      Cookies.set("auth", true);
      const res = await axios.get("/auth/my-role");
      if (res.data.role === "PARTICIPANT") {
        window.location.href = "/team-info";
      } else {
        window.location.href = "/";
      }
      setLoading(false);
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text:
          err.response.data.error +
          " do you want us to resend confirmation email",
        icon: "error",
        confirmButtonText: "Yes",
        showDenyButton: true,
        denyButtonText: "No",
      }).then(async (data) => {
        if (data.isConfirmed) {
          setPageLoading(true);
          try {
            await axios.post(
              `${
                import.meta.env.VITE_API_ENDPOINT
              }auth/send-confirmation-email`,
              {
                userId: err.response.data.user.userId,
              }
            );
            Swal.fire({
              title: "Success!",
              text: "We have sent you a confirmation email, please verify your email before logging in",
              icon: "success",
              confirmButtonText: "Okay",
            });
          } catch (err) {
            Swal.fire({
              title: "Error!",
              text: err.response.data.error,
              icon: "error",
              confirmButtonText: "Okay",
            });
          }
          setPageLoading(false);
        }
      });
      setLoading(false);
    }

    setLoading(false);
    resetForm();
  };

  return !pageLoading ? (
    <Container maxWidth="xl">
      <Background />
      <section className="h-full gradient-form  md:h-screen login-container text-center">
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div
                className="block text-neutral-content login-container-part1
        h-full w-full  rounded-md bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0
         shadow-lg rounded-lg
         border-2 border-sky-500
         "
              >
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center ">
                        <img className="mx-auto w-48" src={Logo} alt="logo" />
                        <h4
                          className="text-xl font-semibold  mb-3 pb-1 text-primary"
                          style={{ fontFamily: "Orbitron" }}
                        >
                          INCEPTIONS - 2023
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
                          <form onSubmit={handleSubmit}>
                            <p
                              className="mb-4 font-bold"
                              style={{ color: "#fff" }}
                            >
                              Please login to your account
                            </p>
                            <div className="mb-4">
                              <TextField
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                placeholder="Email ID"
                                className="form-control block w-full px-3 py-1.5 text-base font-normal
                                 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                                  focus:border-blue-600 focus:outline-none"
                              ></TextField>

                              <ErrorMessage
                                name="email"
                                component="div"
                                className="text-blue-500  mt-3 text-left capitalize"
                              />
                            </div>
                            <div className="mb-4">
                              <TextField
                                type={showPassword ? "text" : "password"}
                                onChange={handleChange}
                                name="password"
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlInput1"
                                placeholder="Password"
                                value={values.password}
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment
                                      position="end"
                                      onClick={() => handleClickShowPassword()}
                                    >
                                      {showPassword ? (
                                        <Visibility
                                          htmlColor="#000"
                                          className="cursor-pointer"
                                        />
                                      ) : (
                                        <VisibilityOff
                                          htmlColor="#000"
                                          className="cursor-pointer"
                                        />
                                      )}
                                    </InputAdornment>
                                  ),
                                }}
                              ></TextField>
                              <ErrorMessage
                                name="password"
                                component="div"
                                className="text-blue-500 
                               mt-3 text-left capitalize"
                              />
                            </div>
                            <div className="text-center pt-1 mb-6 pb-1">
                              <button
                                className={`px-6 py-2.5 text-neutral btn btn-outline btn-warning
                                text-neutral font-bold btn-register
                               text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg 
                               focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition
                                duration-150 ease-in-out w-72  ml-3 ${
                                  loading ? "loading" : null
                                } `}
                                type="submit"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                              >
                                Log in
                              </button>
                              <Button>
                                <span
                                  className="text-primary  font-bold"
                                  onClick={handleForgotPassword}
                                >
                                  Forgot password ?
                                </span>
                              </Button>
                            </div>

                            <div className="">
                              <p
                                className="mb-0 font-bold login-link"
                                style={{ color: "#fff" }}
                              >
                                Don't have an account?{" "}
                                <Link to="/register" className="text-warning">
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
  ) : (
    <Loading />
  );
}

export default Login;
