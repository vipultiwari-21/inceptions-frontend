import React, { useEffect, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import CircularProgress from "@material-ui/core/CircularProgress";
import ErrorIcon from "@mui/icons-material/Error";
import axios from "../../features/Interceptors/apiInterceptor";
import Header from "../Sidebar/Header";
import Loading from "../../Loading";
import { useNavigate } from "react-router-dom";


const AddParticipant = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [teamCount, setTeamCount] = useState(0);
  const [maxTeam, setMaxTeam] = useState(0);
  const [teamRegisterd, setTeamRegistered] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [eventType,setEventType]=useState('')
  const navigate=useNavigate()

  const getEventType=async()=>{
    try{
      const events = await axios.get("/team/get-events-of-team");
      const isOpen = events.data.some((event) => {
        return event.eventIsOpenEvent;
      });

      const isGC = events.data.some((event) => {
        return !event.eventIsOpenEvent;
      });

     

      isOpen && isGC
        ? setEventType("both")
        : isOpen && !isGC
        ? setEventType("open")
        : isGC && !isOpen
        ? setEventType("group")
        : setEventType("");
    }catch(err){
      console.log("Error occured")
    }
  }

  const getTeamRegisteredDetails = async () => {
    try{
      const { data } = await axios.get("/team/get-team-of-current-user");
    if (data.message == "This user has not registered any teams") {
      const getAllTeamNames = await axios.get(
        "/teamNames/get-available-team-names"
      );
      setTeamRegistered(false);
      setPageLoading(false) 
    } else {
      //console.log(data);
      setTeamRegistered(true);
      getMaxTeamMembers();
     getEventType()
      getTeamCount();
      setPageLoading(false);
    }
    }catch(err){
      console.log("error")
    }
  };

  const getTeamCount = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_ENDPOINT}teamMember/get`
      );
      setTeamCount(data.length);
      // setPageLoading(false)
      //setTeamData(data);
      //console.log(data.length)
    } catch (err) {
      console.log(err);
    }
  };

  const getMaxTeamMembers = async () => {
    try {
      const { data } = await axios.get("/team/get-max-team-members");
      console.log("Max", data);
      setMaxTeam(data);
    } catch (err) {
      console.log(err);
    }
  };



  useEffect(() => {
    getTeamRegisteredDetails();
  }, []);

  const handleFormSubmit = async (values, { resetForm }) => {
    setLoading(true);

    if (maxTeam - teamCount > 0) {
      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_ENDPOINT}teamMember/add`,
          values
        );
        alert("Team mate added succesfully");
        getTeamCount();
        getMaxTeamMembers();
      } catch (err) {
        // alert(err.data.message)
        console.log(err.response.data.error);
      }
      console.log(values);
    } else {
      alert("You cant add more members");
    }
    resetForm();
    setLoading(false);
  };

  const handleSelected=()=>{
    navigate("/payment");
  }

  return !pageLoading ? (
    teamRegisterd ? (
      <Box m="20px" sx={{ height: isNonMobile ? "90vh" : "100%" }}>
        <Header
          title="Add Participants"
          subtitle="Fill up the form with the Participant details"
        />

        {
          <>
          <h3 className="text-warning font-bold text-center">
            You have added {teamCount} member(s) ,{" "}
            {maxTeam - teamCount > 0
              ? `you can still add ${maxTeam - teamCount} member(s)`
              : "you cannot add more member(s)"}{" "}
 </h3>

 <h3 className="text-error my-5 font-bold">
   
 {eventType=='both' ? `  Note : Your team must contain atleast 7 members to win General Championship` 
 : null
 }
 </h3>
 
 </>

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
                    "& > div": {
                      gridColumn: isNonMobile ? undefined : "span 4",
                    },
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
                  flexDirection="column"
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

                  <Button
                      color="primary"
                      variant="contained"
                      sx={{
                        padding: "10px 20px",
                        width: "100%",
                        fontSize: "16px",
                        letterSpacing: "0.15rem",
                        fontWeight: "bold",
                        marginTop:'10px'
                      }}
                      onClick={handleSelected}
                    >
                      Head to payment

                     

                    </Button>

                </Box>
              </form>
            )}
          </Formik>
        </Box>
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
