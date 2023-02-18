import React, { useState, useEffect } from "react";
import { Button, TextField, Typography, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import { Formik } from "formik";
import Header from "../Sidebar/Header";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "../../features/Interceptors/apiInterceptor";
import * as yup from "yup";
import Loading from "../../Loading";
import FileUpload from "react-mui-fileuploader";
import CircularProgress from "@material-ui/core/CircularProgress";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

function PaymentInfo() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [teamRegisterd, setTeamRegistered] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [isPaid, setIsPaid] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

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
    amountPaid: "",
  };

  const checkoutSchema = yup.object().shape({
    transactionID: yup.string().required("required"),
    image: yup
      .mixed()
      .required("File is required")
      .test("fileType", "Upload only images", function (value) {
        const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
        return SUPPORTED_FORMATS.includes(value.type);
      }),
    amountPaid: yup.number().required("required"),
  });

  const handleFormSubmit = async (values, { resetForm }) => {
    // console.log(values)
    setLoading(true);
    const formData = new FormData();
    formData.append("screenshot", values.image);
    formData.set("amount", values.amountPaid);
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
      <Box m="20px">
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
          className=""
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
                <Box
                  display="grid"
                  // placeItems="center"
                  color="#e0e0e0"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    "& > div": {
                      gridColumn: isNonMobile ? undefined : "span 4",
                    },
                  }}
                  className="w-full"
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
                    sx={{ gridColumn: "span 4" }}
                    InputLabelProps={{ className: "textfield__label" }}
                    InputProps={{ className: "textfield__label" }}
                    className="textfield"
                  />

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

                  <Box
                    className=""
                    sx={{
                      width: { lg: "900px", sm: "600px", md: "800px" },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FileUpload
                      multiFile={false}
                      title=""
                      name="image"
                      showPlaceholderImage={false}
                      header=""
                      leftLabel=""
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
                  </Box>
                </Box>

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
        className="flex justify-center items-center "
        sx={{ height: "90vh" }}
      >
        <Header
          title="Payment Succesfull"
          subtitle="You have already paid!! Please contact us for any queries."
        />
      </Box>
    ) : teamRegisterd && isPaid ? (
      <Box
        className="flex justify-center items-center "
        sx={{ height: "90vh" }}
      >
        <Header
          title="You have already uploaded a screenshot!"
          subtitle="We are verifying your payment! we will get back to you soon. If you think this is a mistake please contact us"
        />
      </Box>
    ) : (
      <Box
        className="flex justify-center items-center "
        sx={{ height: "90vh" }}
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
