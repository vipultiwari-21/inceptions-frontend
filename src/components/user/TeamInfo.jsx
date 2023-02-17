import React, { useEffect, useState, useRef } from "react";
import { Button, MenuItem, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { Formik, Field } from "formik";
import * as yup from "yup";
import Topbar from "./Topbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import CircularProgress from "@material-ui/core/CircularProgress";
import ErrorIcon from "@mui/icons-material/Error";
import axios from "../../features/Interceptors/apiInterceptor";
import Header from "../Sidebar/Header";
import Loading from "../../Loading";
import { useNavigate } from "react-router-dom";

const TeamInfo = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const navigate=useNavigate()
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

  const getTeamHeadDetails = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_ENDPOINT}/profile/me`
      );
      setTeamHead(data);
      //console.log(data)
    } catch (err) {
      alert("Some error occured!!");
    }
  };

  const getOpenEvents = async () => {
    try {
      const { data } = await axios.get("/event/get-open-events");
      console.log("Open Events : ", data);
      setOpenEvents(data);
    } catch (err) {
      //console.log(err);
    }
  };

  const addTeamLeader = async () => {
    try {
      const obj = {
        firstName: teamHead.firstName,
        lastName: teamHead.lastName,
        usn: teamHead.participantDetails.usn,
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
      alert(err.response.data.error);
    }
  };

  const getTeams = async () => {
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

      setPageLoading(false);
    }
  };

  useEffect(() => {
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

      console.log(data);
      addTeamLeader();
      setIsGCConsidered(true);
      alert("Team was created succesfully!! You can start adding team members");
      resetForm(initialValues);
      getTeams();
    } catch (err) {
      console.log(err);
      setError(err.message);
    }

    setLoading(false);
  };

  return !pageLoading ? (
    <Box m="20px" sx={{ height: isNonMobile ? "90vh" : "100%" }}>
      <Header
        title="Add Team"
        subtitle="Fill up the form with the Event details"
      />
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
                EXCEPTIONS - 2023
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

                          console.log("selected event : ", e.target.value);
                        } else if (
                          e.target.value == "Group Events + Open Events"
                        ) {
                          setIsGCConsidered(true);
                          setHasOpenEvents(true);
                          console.log("selected event : ", e.target.value);
                        } else if (e.target.value == "Open Events") {
                          setIsGCConsidered(false);
                          setHasOpenEvents(true);
                          console.log("selected event : ", e.target.value);
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
                <Box className="flex w-full items-center justify-center  flex-wrap my-8">
                  {openEvents
                    ? openEvents.map((oe) => {
                        return (
                          <label key={oe.eventId} className="mx-3 py-3 ">
                            <Field
                              type="checkbox"
                              name="openEvents"
                              key={oe.eventId}
                              value={oe.name}
                            />
                            {`${oe.name}`}
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
