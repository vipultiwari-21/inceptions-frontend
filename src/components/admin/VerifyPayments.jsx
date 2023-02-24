import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Header from "../Sidebar/Header";
import axios from "../../features/Interceptors/apiInterceptor";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { MenuItem, TextField } from "@mui/material";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";

function VerifyPayments() {
  const [data, setData] = useState([]);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [selectedUserID, setSelectedUserID] = useState("");
  const [selectedTeamAmount, setSelectedTeamAmount] = useState("");
  const [selectedTeamTransactionID, setSelectedTeamTransactionID] =
    useState("");
  const [selectedTeamScreenshot, setSelectedTeamScreenshot] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/team/get-paid-unverified");
      setData(data);
      console.log(data);
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err,
        icon: "error",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const initialValues = {
    teamID: "",
  };

  const handleFormSubmit = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/payment/update-verification", {
        isVerified: true,
        participantId: selectedUserID,
      });

      Swal.fire({
        title: "Success!",
        text: "Team mate succesfully verified!",
        icon: "success",
      });
      setSelectedTeamAmount("");
      setSelectedTeamScreenshot("");
      setSelectedTeamTransactionID("");
      setSelectedUserID("");

      fetchData();
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err,
        icon: "error",
      });
    }
    setIsLoading(false);
  };

  const handleTeamSelect = async (val) => {
    try {
      const { data } = await axios.post("/payment/is-participant-paid", {
        participantId: val,
      });

      setSelectedTeamAmount(data.paymentData.amount);
      setSelectedTeamTransactionID(data.paymentData.transactionId);

      const imageTransaction = await axios.post(
        "/payment/get-screenshot-by-user-id",

        {
          participantId: val,
        },
        { responseType: "blob" }
      );
      //console.log(imageTransaction.data);

      // const blob = new Blob([data], { type: "plain/text" });
      //console.log(blob);
      setSelectedTeamScreenshot(imageTransaction.data);
    } catch (err) {
      // console.log(err);
      Swal.fire({
        title: "Error!",
        text: err,
        icon: "error",
      });
    }
  };

  return (
    <Box
      m="20px"
      sx={{
        height: "90vh",
        overflow: "hidden",
        padding: "20px",
      }}
      className="flex justify-center items-center flex-col"
    >
      <Header
        title="Verify Payments"
        subtitle="Have a look at screenshot uploaded by participant and verify their payment"
      />

      <Box className="w-full my-8 ">
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
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <TextField
                  select
                  label="Select Team Name"
                  variant="filled"
                  color="primary"
                  InputLabelProps={{ className: "textfield__label" }}
                  InputProps={{ className: "textfield__label" }}
                  className="textfield  w-72 lg:w-96"
                  value={values.teamID}
                  onChange={(e) => {
                    setFieldValue("teamID", e.target.value);
                    setSelectedUserID(e.target.value);
                    handleTeamSelect(e.target.value);
                  }}
                >
                  {data
                    ? data.map((eachTeam) => (
                        <MenuItem
                          value={
                            eachTeam.headUser ? eachTeam.headUser.userId : null
                          }
                          key={
                            eachTeam.headUser ? eachTeam.headUser.userId : null
                          }
                        >
                          {eachTeam.teamName ? eachTeam.teamName.label : null}
                        </MenuItem>
                      ))
                    : null}
                </TextField>

                <TextField
                  disabled
                  variant="filled"
                  type="text"
                  label={
                    selectedTeamAmount ? selectedTeamAmount : "Amount Paid"
                  }
                  sx={{ gridColumn: "span 4" }}
                  InputLabelProps={{ className: "textfield__label" }}
                  InputProps={{ className: "textfield__label" }}
                  className="textfield w-72 lg:w-96"
                />

                <TextField
                  disabled
                  variant="filled"
                  type="text"
                  label={
                    selectedTeamTransactionID
                      ? selectedTeamTransactionID
                      : "Transaction ID"
                  }
                  sx={{ gridColumn: "span 4" }}
                  InputLabelProps={{ className: "textfield__label" }}
                  InputProps={{ className: "textfield__label" }}
                  className="textfield w-72 lg:w-96"
                />

                {selectedTeamScreenshot ? (
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
                      src={
                        selectedTeamScreenshot
                          ? URL.createObjectURL(selectedTeamScreenshot)
                          : ""
                      }
                    />
                  </Box>
                ) : null}

                {selectedTeamScreenshot ? (
                  <button
                    className={`btn btn-outline btn-warning ${
                      isLoading ? "loading" : ""
                    }`}
                  >
                    Verify Payment
                  </button>
                ) : null}
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default VerifyPayments;
