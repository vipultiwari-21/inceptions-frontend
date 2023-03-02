import React, { useState, useEffect } from "react";
import { Button, TextField, Typography, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import { Formik, ErrorMessage, Field } from "formik";
import Header from "../Sidebar/Header";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "../../features/Interceptors/apiInterceptor";
import * as yup from "yup";
import Loading from "../../Loading";
import CircularProgress from "@material-ui/core/CircularProgress";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import UploadComponent from "./UploadComponent";

function PaymentInfo() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [teamRegisterd, setTeamRegistered] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [isPaid, setIsPaid] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [selected, setSelected] = useState([]);

  const getTeamRegisteredDetails = async () => {
    try {
      const { data } = await axios.get("/team/get-team-of-current-user");
      if (data.message == "This user has not registered any teams") {
        setTeamRegistered(false);
      } else {
        //console.log(data);
        setTeamRegistered(true);
      }
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong!! please try again!",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  const verifyPayment = async () => {
    try {
      const { data } = await axios.get("/payment/is-paid");

      setIsPaid(data.isPaid);

      data.paymentData
        ? setIsVerified(data.paymentData.isVerified)
        : setIsVerified(false);
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong!! check your internet connectivity",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }

    setPageLoading(false);
  };

  useState(() => {
    getTeamRegisteredDetails();
    verifyPayment();
  }, []);

  const initialValues = {
    transactionID: "",
    image: "",
    amountPaid: [],
  };

  const checkoutSchema = yup.object().shape({
    transactionID: yup
      .string()
      .required("required")
      .matches("^[a-zA-Z0-9]*$", "Enter valid Transaction ID"),
    image: yup
      .mixed()
      .required("File is required")
      .test(
        "fileSize",
        "File too large",
        (value) => value === null || (value && value.size <= 512000)
      )
      .test("fileType", "Upload only jpeg / jpg format", function (value) {
        const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
        return SUPPORTED_FORMATS.includes(value ? value.type : null);
      }),

    amountPaid: yup.array().required("required"),
  });

  const calculateSum = (values) => {
    var sum = values.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
    }, 0);

    console.log(sum);

    return sum;
  };

  const handleFormSubmit = async (values, { resetForm }) => {
    // console.log(values)
    setLoading(true);
    const formData = new FormData();
    formData.append("screenshot", values.image);
    formData.set("amount", calculateSum(values.amountPaid));
    formData.set("transactionId", values.transactionID);

    // for (var key of formData.entries()) {
    //   //console.log(key[0] + ', ' + key[1])
    // }

    try {
      const { data } = await axios.post("/payment/add", formData);
      Swal.fire({
        title: "Success!",
        text: data.status,
        icon: "success",
        confirmButtonText: "Okay",
      });

      verifyPayment();
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong!! please try again!",
        icon: "error",
        confirmButtonText: "Okay",
      });

      setLoading(false);
    }
  };

  return !pageLoading ? (
    teamRegisterd && isPaid == false ? (
      <Box
        m="20px"
        className="flex justify-center items-center  flex-col"
        sx={{ height: "100vh" }}
      >
        <Header
          title="Transaction Details"
          subtitle="Please upload screenshot of payment recieved by RVCE with transaction ID"
        />

        <Box className="" m="20px">
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
                // encType="multipart/form-data"
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

                <Box className="w-full flex justify-evenly items-center flex-col ">
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
                    sx={{ gridColumn: "span 4" }}
                    InputLabelProps={{ className: "textfield__label" }}
                    InputProps={{ className: "textfield__label" }}
                    className="textfield my-5"
                  />

                  <Box className="w-full my-5 font-bold">
                    <label className="mx-3 py-3 ">
                      <Field type="checkbox" name="amountPaid" value="3540" />
                      3540₹
                    </label>
                    <label className="mx-3 py-3 ">
                      <Field type="checkbox" name="amountPaid" value="944" />
                      944₹
                    </label>
                    <label className="mx-3 py-3 ">
                      <Field type="checkbox" name="amountPaid" value="590" />
                      590₹
                    </label>
                    <label className="mx-3 py-3 ">
                      <Field type="checkbox" name="amountPaid" value="236" />
                      236₹
                    </label>
                  </Box>

                  <Box className="w-full my-5">
                    <UploadComponent
                      setFieldValue={setFieldValue}
                      setSelectedImage={setSelectedImage}
                    />

                    <ErrorMessage name="image">
                      {(err) => (
                        <h2 className="text-accent mt-5 font-bold ">{err}</h2>
                      )}
                    </ErrorMessage>
                  </Box>
                </Box>

                {/*
                <TextField
                    select
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Amount paid"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.amountPaid}
                    name="amountPaid"
                    error={!!touched.amountPaid && !!errors.amountPaid}
                    helperText={touched.amountPaid && errors.amountPaid}
                    sx={{ gridColumn: "span 4" }}
                    InputLabelProps={{ className: "textfield__label" }}
                    InputProps={{ className: "textfield__label" }}
                    className="textfield"
                  >
                    <MenuItem value="3540">3540</MenuItem>
                    <MenuItem value="944">944</MenuItem>
                    <MenuItem value="236">236</MenuItem>
                    <MenuItem value="590">590</MenuItem>
                  </TextField>
              */}

                {/* <TextField
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
                    sx={{ gridColumn: "span 4" }}
                    InputLabelProps={{
                      className: "textfield__label fileInputLabel",
                    }}
                    InputProps={{
                      className: "textfield__label default-file-input",
                    }}
                    className="textfield"
                  /> */}

                {/*
                  
                  *
                      {({ getRootProps, getInputProps, isDragRejected }) => (
                        <section>
                          <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <Box className="py-3  ">
                              <p className="text-neutral-content  ">
                                {!isDragRejected
                                  ? "Drag and drop screenshot of payment / click here to upload"
                                  : "Select valid file"}
                              </p>
                            </Box>
                          </div>
                        </section>
                      )}
                    </Dropzone>

                    /*}

                    {/*
                    <FileUpload
                      multiFile={false}
                      title=""
                      name="image"
                      showPlaceholderImage={false}
                      header=""
                      leftLabel=""
                      rightLabel=""
                      buttonLabel="Click here to upload file"
                      acceptedType={"image/*"}
                      allowedExtensions={["jpg", "jpeg", "png"]}
                      onBlur={handleBlur}
                      error={!!touched.image && !!errors.image}
                      helperText={touched.image && errors.image}
                      onFilesChange={(file) => {
                        setFieldValue("image", file[0]);
                        setSelectedImage(file[0]);
                        console.log(file);
                      }}
                      maxUploadFiles={1}
                      onError={() => {}}
                      onContextReady={(context) => {}}

/>

                    */}

                {selectedImage ? (
                  <Box className="w-full my-8 flex items-center justify-center  ">
                    <Box
                      component="img"
                      sx={{
                        height: 300,
                        width: 500,
                        maxHeight: { xs: 200, md: 167, lg: 450 },
                        maxWidth: { xs: 200, md: 250, lg: 450 },
                        margin: 0,
                        padding: 0,
                      }}
                      alt="The house from the offer."
                      src={URL.createObjectURL(selectedImage)}
                    />
                  </Box>
                ) : null}

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
    ) : teamRegisterd && isVerified ? (
      <Box
        className="flex justify-center items-center w-full "
        sx={{ height: "100vh" }}
      >
        <Header
          title="Payment Succesfull"
          subtitle="You have already paid!! Please contact us for any queries."
        />
      </Box>
    ) : teamRegisterd && isPaid ? (
      <Box
        m="20px"
        sx={{ height: "100vh" }}
        className="flex justify-center items-center  "
      >
        <Header
          title="You have already uploaded a screenshot!"
          subtitle="We are verifying your payment! we will get back to you soon. If you think this is a mistake please contact us"
        />
      </Box>
    ) : (
      <Box
        m="20px"
        sx={{ height: "100vh" }}
        className="flex justify-center items-center  "
      >
        <Header
          title="Pending registration!!!"
          subtitle="Please register your team name and event type in the Add team section"
        />
      </Box>
    )
  ) : (
    <Loading />
  );
}

export default PaymentInfo;
