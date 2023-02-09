import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import CircularProgress from "@material-ui/core/CircularProgress";
import ErrorIcon from "@mui/icons-material/Error";
import axios from "../../features/Interceptors/apiInterceptor";
import Header from "../Sidebar/Header";

const AddParticipant = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState("");
  const eventTypes = ["General Champtionship", "Open Event"];
  const [teamData, setTeamData] = useState([] || {});
  const [teamCount,setTeamCount]=useState(0)
  const [isGCConsidered,setIsGCConsidered]=useState(false)


  const getTeamCount = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}teamMember/get`);
     setTeamCount(data.length);
    //setTeamData(data);
  };

  const getTeam = async () => {
    const { data } = await axios.get("/team/get-team-of-current-user");
    console.log(data);
    //setTeamData(data);
    setIsGCConsidered(data.isGCConsidered)    
  };


  useEffect(() => {
    getTeam()
    getTeamCount()
    //console.log("teamData", teamData);
  }, []);

  const handleFormSubmit = async (values, { resetForm }) => {
    if(isGCConsidered && 7-teamCount>0 && !isGCConsidered && 4-teamCount>0){
      setLoading(true)
    try{
      
      const {data}=await axios.post(`${import.meta.env.VITE_API_ENDPOINT}teamMember/add`,values)
      alert("Team mate added succesfully")
      getTeamCount()
    }catch(err){
      // alert(err.data.message)
      alert(err.response.data.error)
    }
    setLoading(false)
    console.log(values)
    
    }else{
      alert("You cant add more members!!")
    }
    resetForm()
  };

  return (
    <Box m="20px" sx={{ height: isNonMobile ? "90vh" : "100%" }}>
      <Header
        title="Add Participants"
        subtitle="Fill up the form with the Participant details"
      />

      {
        <h3 className="text-warning font-bold text-center">You have added {teamCount} members ,{isGCConsidered && 7-teamCount>0 ? 
        <span>You can still add {7- teamCount} members </span> : !isGCConsidered && 4-teamCount>0 ? <span>You can still add {4-teamCount} members </span> : <span>You cant add more members</span>
        } </h3>
      }

      <Box
        m="20px"
        sx={{
          height: isNonMobile ? "80vh" : "100%",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
        }}
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
                maxWidth: "40rem",
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
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 8" }}
                  InputLabelProps={{ className: "textfield__label" }}
                  InputProps={{ className: "textfield__label" }}
                  className="textfield"
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  sx={{ gridColumn: "span 8" }}
                  InputLabelProps={{ className: "textfield__label" }}
                  InputProps={{ className: "textfield__label" }}
                  className="textfield"
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="USN"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.usn}
                  name="usn"
                  error={!!touched.usn && !!errors.usn}
                  helperText={touched.usn && errors.usn}
                  sx={{ gridColumn: "span 8" }}
                  InputLabelProps={{ className: "textfield__label" }}
                  InputProps={{ className: "textfield__label" }}
                  className="textfield"
                />


                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{ gridColumn: "span 8" }}
                  InputLabelProps={{ className: "textfield__label" }}
                  InputProps={{ className: "textfield__label" }}
                  className="textfield"
                />



                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Contact Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contactNumber}
                  name="contactNumber"
                  error={!!touched.contactNumber && !!errors.contactNumber}
                  helperText={touched.contactNumber && errors.contactNumber}
                  sx={{ gridColumn: "span 8" }}
                  InputLabelProps={{ className: "textfield__label" }}
                  InputProps={{ className: "textfield__label" }}
                  className="textfield"
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
                  Add Teammate
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

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  usn: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contactNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  usn: "",
  email: "",
  contactNumber: "",
};

export default AddParticipant;
