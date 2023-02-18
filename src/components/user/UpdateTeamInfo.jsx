import React, { useEffect, useState } from "react";
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Formik } from "formik";
import * as yup from "yup";
import Topbar from "./Topbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import CircularProgress from "@material-ui/core/CircularProgress";
import ErrorIcon from "@mui/icons-material/Error";
import axios from "../../features/Interceptors/apiInterceptor";
import Header from "../Sidebar/Header";
import Swal, { swal } from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const UpdateTeamInfo = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState("");
  const eventTypes = ["General Champtionship", "Open Event"];
  const [teamName, setTeamName] = useState("");

  const getTeam = async () => {
    try {
      const { data } = await axios.get("/team/get-team-of-current-user");
      // console.log(data.name);
      setTeamName(data.name);
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: "Something went wrong !!!",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  useEffect(() => {
    getTeam();
    // console.log("teamData", teamData);
  }, []);

  const checkoutSchema = yup.object().shape({
    name: yup.string().required("required"),
  });
  const initialValues = {
    name: teamName,
  };

  // console.log(initialValues);
  const handleFormSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);
      let obj = {
        name: values.name,
      };
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}team/update`,
        obj
      );

      Swal.fire({
        title: "Success!",
        text: "Your team was succesfully registered ! you can proceed to payment and add teammates",
        icon: "success",
        confirmButtonText: "Okay",
      });

      setLoading(false);
      resetForm(initialValues);
      getTeam();
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong! please try again :)",
        icon: "error",
        confirmButtonText: "Okay",
      });
      setError(err.message);
      setLoading(false);
    }
  };
  return (
    <Box m="20px" sx={{ height: "85vh" }}>
      <Header
        title="Update Team Name"
        subtitle="Fill up the form with the Updated Team Name"
      />
      <Box
        m="20px"
        sx={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Formik
          enableReinitialize
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
            handleSubmit,
          }) => (
            <form
              onSubmit={handleSubmit}
              style={{
                width: "100%",
                maxWidth: "30rem",
                boxShadow: isNonMobile
                  ? "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"
                  : null,
                // color: colors.grey[100],
                marginTop: "2rem",
                margin: "0 auto",
                padding: isNonMobile ? "2rem" : null,
                borderRadius: "6px",
                // background: isNonMobile ? colors.primary[400] : null,
                background: "white",
              }}
            >
              <Typography
                variant="h3"
                // color={colors.grey[100]}
                fontWeight="bold"
                mb="2rem"
              >
                UPDATE TEAM
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
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                // sx={{
                //   "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                // }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Team Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  name="name"
                  id="name"
                  error={!!touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                  sx={{ gridColumn: "span 4" }}
                />
              </Box>
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
                    color="secondary"
                    variant="contained"
                    sx={{
                      padding: "10px 20px",
                      width: "100%",
                      fontSize: "16px",
                      letterSpacing: "0.15rem",
                      fontWeight: "bold",
                    }}
                  >
                    Update team name
                  </Button>
                )}
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default UpdateTeamInfo;
