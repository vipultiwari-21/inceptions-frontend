import React, { useEffect, useState, useRef } from "react";
import { Button, MenuItem, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Formik, Field } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import CircularProgress from "@material-ui/core/CircularProgress";
import ErrorIcon from "@mui/icons-material/Error";
import axios from "../../features/Interceptors/apiInterceptor";
import Header from "../Sidebar/Header";
import Loading from "../../Loading";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import ExcitingImage from "../../assets/svg/excitingNews.svg";

const TeamInfo = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [loading, setLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const eventTypes = [
    "Group Events",
    "Group Events + Open Events",
    "Open Events",
  ];
  const [teamName, setTeamName] = useState([] || {});
  const [isRegistered, setIsRegistered] = useState(false);
  const [registeredTeamName, setRegisteredTeamName] = useState("");
  const [registeredEventType, setRegisteredEventType] = useState("");
  const [teamHead, setTeamHead] = useState([]);
  const [openEvents, setOpenEvents] = useState([]);
  const [isGCConsidered, setIsGCConsidered] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [hasOpenEvents, setHasOpenEvents] = useState(false);

  const confirmationMessages = [
    "Congratulations! Your registration is confirmed for lift-off. Get ready to blast off into space!",
    "Thank you for joining us on this interstellar journey. Your registration has been confirmed.",
    "We have liftoff! Your registration is confirmed for the event. We'll see you among the stars!",
    "Your registration has been confirmed. Prepare for an out-of-this-world experience!",
    "Get ready to explore the final frontier! Your registration is confirmed for the  event.",
    "Your registration is confirmed for the event. Get ready to embark on a journey through the cosmos!",
    "Congratulations! Your registration for the  event has been confirmed. We can't wait to launch with you!",
    "Prepare for a journey beyond our wildest dreams! Your registration for the  event has been confirmed.",
    "Your registration has been confirmed for the  event. It's time to take off and soar through the galaxy!",
    "Get ready to experience the wonders of space! Your registration for the event has been confirmed.",
    "Your registration is confirmed and mission control is go for launch! Get ready to explore the cosmos.",
    "We're excited to have you aboard for the event. Your registration has been confirmed.",
    "Buckle up and prepare for takeoff! Your registration is confirmed for the event.",
    "Congratulations on your confirmed registration for the event. We can't wait to see you among the stars!",
    "Your registration has been confirmed, and we're counting down the seconds to launch. See you in space!",
    "Thank you for joining us on this incredible  adventure. Your registration is confirmed and we're ready for liftoff!",
    "Your registration is confirmed for the  event. Get ready to witness the awe-inspiring beauty of the universe!",
    "Get ready to experience the majesty of space! Your registration for the event has been confirmed.",
    "You're now part of an exclusive group of explorers! Your registration for the event has been confirmed.",
    "Your registration for the event has been confirmed. Prepare to journey through the stars and explore the unknown.",
  ];

  const getTeamHeadDetails = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_ENDPOINT}/profile/me`
      );
      setTeamHead(data);
      //console.log(data);
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong! please check your internet connectivity",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  const getOpenEvents = async () => {
    try {
      const { data } = await axios.get("/event/get-open-events");
      setOpenEvents(data);
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong! please check your internet connectivity",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  const addTeamLeader = async () => {
    try {
      const obj = {
        firstName: teamHead.firstName,
        lastName: teamHead.lastName,
        email: teamHead.email,
        contactNumber: teamHead.contactNumber,
      };

      //console.log("ADding data ",obj )

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}teamMember/add`,
        obj
      );
    } catch (err) {
      // alert(err.data.message)
      Swal.fire({
        title: "Error!",
        text: err.response.data.error,
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  const getTeams = async () => {
    try {
      const { data } = await axios.get("/team/get-team-of-current-user");
      if (data.message == "This user has not registered any teams") {
        const getAllTeamNames = await axios.get(
          "/teamNames/get-available-team-names"
        );
        setPageLoading(false);
        setIsRegistered(false);
        // console.log(getAllTeamNames.data);
        setTeamName(getAllTeamNames.data);
      } else {
        //console.log(data);
        setIsRegistered(true);

        setRegisteredTeamName(data.teamName.label);
        // data.isGCConsidered
        //   ? setRegisteredEventType("Group Event")
        //   : setRegisteredEventType("Open Event");

        const events = await axios.get("/team/get-events-of-team");
        const isOpen = events.data.some((event) => {
          return event.eventIsOpenEvent;
        });

        const isGC = events.data.some((event) => {
          return !event.eventIsOpenEvent;
        });

        isOpen && isGC
          ? setRegisteredEventType("Group Events + Open Event")
          : isOpen && !isGC
          ? setRegisteredEventType("Open Events")
          : isGC && !isOpen
          ? setRegisteredEventType("Group Events")
          : setRegisteredEventType("");
      }
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong! please check your internet connectivity",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
    setPageLoading(false);
  };

  const getIsVerified = async () => {
    const { data } = await axios.get("/payment/is-paid");

    setIsVerified(data.isPaid && data.paymentData.isVerified ? true : false);
  };

  useEffect(() => {
    getIsVerified();
    getTeamHeadDetails();
    getTeams();
    getOpenEvents();
  }, []);

  const mapTeamID = async (values) => {
    var eventIdArray = [];

    values.openEvents.forEach((selectedEvents) => {
      openEvents.forEach((event) => {
        if (event.name == selectedEvents) {
          eventIdArray.push(event.eventId);
        }
      });
    });

    return eventIdArray;
  };

  const handleFormSubmit = async (values, { resetForm }) => {
    //console.log(eventIdArray)

    try {
      setLoading(true);
      // console.log(values.eventType === values.eventType.toLowerCase())

      //console.log("isGCConsidered", isGCConsidered);

      //  console.log(values.eventType);

      let obj = {
        teamNameId: values.teamID,
        isGCConsidered,
        ...(values.eventType !== "Group Events"
          ? { openEventIds: await mapTeamID(values) }
          : { openEventIds: [] }),
      };

      //console.log(obj);

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}team/add`,
        obj
      );

      addTeamLeader();

      setIsGCConsidered(true);
      Swal.fire({
        title: "Success!",
        text: "Your team was registered succesfully! Proceed to payment and add teammates",
        icon: "success",
        confirmButtonText: "Okay",
      });
      resetForm(initialValues);
      getTeams();
    } catch (err) {
      // console.log(err);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong! please try again :)",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }

    setLoading(false);
  };

  return !pageLoading && isVerified ? (
    <Box
      m="20px"
      sx={{ height: "100vh" }}
      className="flex flex-col justify-center items-center event-details"
    >
      <Box>
        <img
          src={ExcitingImage}
          alt="welcome team image"
          style={{ width: "400px" }}
        />
      </Box>

      <h1 className="text-xl lg:text-3xl font-bold">
        {" "}
        Welcome Team <br />
        <span className="text-info">{registeredTeamName}</span>
      </h1>

      <h1 className="my-5 text-warning text-xl font-bold">
        {confirmationMessages[Math.floor(Math.random() * 20)]}
      </h1>
    </Box>
  ) : !pageLoading && !isVerified ? (
    <Box
      m="20px"
      sx={{ overflow: "auto" }}
      className="flex flex-col justify-center items-center h-full"
    >
      <Header
        title="Add Team"
        subtitle="Fill up the form with the Event details"
      />
      <h3
        className={`text-neutral-content my-3 font-bold ${
          isNonMobile ? "text-center" : "text-left"
        }`}
      >
        Note: Once registered, team name cannot be changed, please choose the
        team name carefully
      </h3>

      <h3
        className={`text-warning my-3 font-bold ${
          isNonMobile ? "text-center" : "text-left"
        }`}
      >
        Important: If you are only interested in group events, select group
        event{" "}
        <span className="text-accent">(only for MCA , BCA , BSc and MSc)</span>{" "}
        , <br />
        If you are only interested in open event, select open event.{" "}
        <span className="text-accent">
          (For all branches of UG and PG)
        </span>{" "}
        <br />
        If you are interested in both select Group + Open event, below. <br />{" "}
        <br />
        If you select Group + Open , you have to choose sufficient team members
        as suggested in next section. Conflicts between events will not be
        entertained
      </h3>

      <Box
        m="20px"
        sx={{
          overflow: "hidden",
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
            setFieldValue,
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
                INCEPTIONS - 2023
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
                {!isRegistered ? (
                  <>
                    <TextField
                      select
                      label="Select Team Name"
                      sx={{ gridColumn: "span 8", color: "#fff" }}
                      variant="filled"
                      color="primary"
                      InputLabelProps={{ className: "textfield__label" }}
                      InputProps={{ className: "textfield__label" }}
                      className="textfield"
                      name="teamID"
                      id="teamID"
                      value={values.teamID}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!touched.teamID && !!errors.teamID}
                      helperText={touched.teamID && errors.teamID}
                    >
                      {teamName
                        ? teamName.map((eachTeam) => (
                            <MenuItem value={eachTeam.id} key={eachTeam.id}>
                              {eachTeam.label}
                            </MenuItem>
                          ))
                        : null}
                    </TextField>

                    <TextField
                      select
                      label="Select Event Type"
                      sx={{ gridColumn: "span 8", color: "#fff" }}
                      variant="filled"
                      color="primary"
                      InputLabelProps={{ className: "textfield__label" }}
                      InputProps={{ className: "textfield__label" }}
                      className="textfield"
                      name="eventType"
                      onChange={(e, { value }) => {
                        setFieldValue("eventType", e.target.value);

                        //console.log("Selected Event : ",e.target.value);

                        if (e.target.value == "Group Events") {
                          setIsGCConsidered(true);
                          setHasOpenEvents(false);
                        } else if (
                          e.target.value == "Group Events + Open Events"
                        ) {
                          setIsGCConsidered(true);
                          setHasOpenEvents(true);
                        } else if (e.target.value == "Open Events") {
                          setIsGCConsidered(false);
                          setHasOpenEvents(true);
                        }
                      }}
                      onBlur={handleBlur}
                      id="eventType"
                      error={!!touched.eventType && !!errors.eventType}
                      helperText={touched.eventType && errors.eventType}
                    >
                      {eventTypes.map((event, id) => (
                        <MenuItem value={event} key={id}>
                          {event}
                        </MenuItem>
                      ))}
                    </TextField>
                  </>
                ) : (
                  <>
                    <TextField
                      select
                      label={registeredTeamName}
                      sx={{ gridColumn: "span 8", color: "#fff" }}
                      variant="filled"
                      color="primary"
                      InputLabelProps={{ className: "textfield__label" }}
                      InputProps={{ className: "textfield__label" }}
                      className="textfield"
                      disabled
                    ></TextField>

                    <TextField
                      label={registeredEventType}
                      sx={{ gridColumn: "span 8", color: "#fff" }}
                      variant="filled"
                      color="primary"
                      InputLabelProps={{ className: "textfield__label" }}
                      InputProps={{ className: "textfield__label" }}
                      className="textfield"
                      disabled
                    ></TextField>
                  </>
                )}
              </Box>

              {!isRegistered && hasOpenEvents ? (
                <Box className="flex w-full items-start   justify-center  flex-wrap my-8">
                  {openEvents
                    ? openEvents.map((oe) => {
                        return (
                          <label key={oe.eventId} className="mx-3 py-3" s>
                            <Field
                              type="checkbox"
                              name="openEvents"
                              key={oe.eventId}
                              value={oe.name}
                            />
                            <span
                              style={{ marginLeft: "10px", fontWeight: "bold" }}
                            >{`${oe.name}`}</span>
                          </label>
                        );
                      })
                    : null}
                </Box>
              ) : null}

              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt="20px"
                className="flex-col"
              >
                {loading ? (
                  <CircularProgress />
                ) : isRegistered ? (
                  <Button
                    disabled
                    type="submit"
                    color="secondary"
                    variant="contained"
                    sx={{
                      padding: "10px 20px",
                      width: "100%",
                      fontSize: "16px",
                      letterSpacing: "0.15rem",
                      fontWeight: "bold",
                      margin: "20px 0",
                    }}
                  >
                    Already Registered
                  </Button>
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
                      color: "#fff",
                    }}
                  >
                    Register team
                  </Button>
                )}

                {isRegistered ? (
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    onClick={() => navigate("/add-participant")}
                    sx={{
                      padding: "10px 20px",
                      width: "100%",
                      fontSize: "16px",
                      letterSpacing: "0.15rem",
                      fontWeight: "bold",
                    }}
                  >
                    Add team mates
                  </Button>
                ) : null}
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  ) : (
    <Loading />
  );
};

const checkoutSchema = yup.object().shape({
  teamID: yup.string().required("required"),
  eventType: yup.string().required("required"),
});
const initialValues = {
  teamID: "",
  eventType: "",
  openEvents: [],
};

export default TeamInfo;
