import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
// import { tokens } from "../theme";
import { useState, useEffect } from "react";
// import { mockDataTeam } from "../data/mockData";
// import Header from "./Header";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import ErrorIcon from "@mui/icons-material/Error";
import { GridToolbar } from "@mui/x-data-grid";

import axios from "../../features/Interceptors/apiInterceptor";
import Header from "../Sidebar/Header";
import Loading from "../../Loading";

// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const EventwiseList = () => {
  //   const theme = useTheme();
  //   const colors = tokens(theme.palette.mode);
  const [loading, setLoading] = useState(false);
  const [teamMates, setTeamMates] = useState([]);
  const [error, setError] = useState("");
  const isNonMobile = useMediaQuery("(min-width:650px)");
  const [teamName, setTeamName] = useState([] || {});
  const [teamId, setTeamId] = useState("");
  const [eventId, setEventId] = useState("");
  const [events, setEvents] = useState([]);
  const [pageLoading, setPageLoading] = useState(false);

  //   console.log(teamName);
  //   console.log("events", events);

  const getTeams = async () => {
    setPageLoading(true);
    const { data } = await axios.get("/team/get");
    const temp = data.map((obj) => {
      return {
        id: obj.teamId,
        label: obj.teamName.label,
      };
    });

    // allTeams.push(temp);
    setTeamName(temp);
    setPageLoading(false);
  };

  useEffect(() => {
    getTeams();
    getEvents();
  }, []);

  const handleFormSubmit = async (values, { resetForm }) => {
    console.log(values);
    // dispatch(adminregister(values));
    try {
      setLoading(true); //   let obj = { teamId: values.team_id };
      //   console.log("obj", obj);
      setTeamId(values.team_id);
      //   const { data } = await axios.post("/team/get-specific-team-details", {
      //     teamId: values.team_id,
      //   });

      const { data } = await axios.post("/teamMember/get-by-eventId", {
        eventId: values.event_id,
        teamId: values.team_id,
      });
      console.log("data", data);
      setTeamMates(data);
      //   setTeamMates(data[0].teamMembers);
      //   resetForm({ values: initialValues });
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  const getEvents = async () => {
    setPageLoading(true);
    const { data } = await axios.get("/event/get-short");
    // console.log("events list", data);
    let tempArray1 = [];
    let tempArray2 = [];
    for (let i = 0; i < data.detailedEvents.length; i++) {
      const getAllData = {
        eventId: `${data.detailedEvents[i].eventId}`,
        name: `${data.detailedEvents[i].name}`,
      };
      tempArray1.push(getAllData);
    }
    // console.log("tempArray", tempArray);
    tempArray2 = [
      ...tempArray1,
      {
        eventId: String(data.mysteryEvent.eventId),
        name: data.mysteryEvent.eventName,
      },
    ];
    setEvents(tempArray2);
    setPageLoading(false);
  };

  const columns = [
    { field: "memberId", headerName: "Member ID", flex: 1 },
    {
      field: "firstName",
      headerName: "First Name",
      flex: 1,
    },
    // {
    //   field: "lastName",
    //   headerName: "Last Name",
    //   flex: 1,
    // },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    // {
    //   field: "usn",
    //   headerName: "USN",
    //   flex: 1,
    // },
    {
      field: "contactNumber",
      headerName: "Contact Number",
      flex: 1,
    },
    // {
    //   field: "assignEvent",
    //   headerName: "Assign Event",
    //   flex: 1,
    //   renderCell: ({ row, id }) => {
    //     let memberId = id;

    //     // console.log("row", row);
    //     // console.log("teamMates", teamMates);
    //     // teamMates.map((member) => console.log(member));
    //     // console.log("memeberId", memberId);
    //     let currentMember = {};

    //     currentMember = teamMates.filter(
    //       (member) => member.memberId === memberId
    //     )[0];
    //     console.log("currentMember", currentMember);
    //     axios
    //       .post("/teamMember/get-event-of-team-member", {
    //         memberId: currentMember.memberId,
    //       })
    //       .then(({ data }) => console.log(data.message));
    //     return (
    //       <Link to={`${currentMember.memberId}`} className={id}>
    //         <Button color="secondary" variant="contained">
    //           Assign
    //         </Button>
    //       </Link>
    //     );
    //   },
    // },
  ];

  return !pageLoading ? (
    <Box m="20px">
      <Header
        title="Get Specific Team Details"
        subtitle="List of the specific teammates"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: "#94e2cd !important",
            // color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            // backgroundColor: colors.blueAccent[700],
            backgroundColor: "#3e4396",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "#1F2A40",
            // backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "#3e4396",
            // backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: "#b7ebde !important",
            // color: `${colors.greenAccent[200]} !important`,
          },
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
            <form onSubmit={handleSubmit}>
              <Box
                // placeItems="center"
                // color={colors.grey[100]}
                color="#fff"
                gap="30px"
                mb="2rem"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  display: "flex",
                  "& > div": {
                    gridColumn: isNonMobile ? undefined : "span 4",
                  },
                }}
              >
                <div
                  style={{
                    gridColumn: "span 4",
                    width: "20%",
                  }}
                >
                  <InputLabel id="team_id" style={{ color: "#fff" }}>
                    Team Name
                  </InputLabel>
                  <Select
                    style={{ backgroundColor: "#fff", textAlign: "left" }}
                    fullWidth
                    variant="filled"
                    // type="text"
                    label="Team ID"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.team_id}
                    name="team_id"
                    labelId="team"
                    id="team_id"
                    error={!!touched.team_id && !!errors.team_id}
                    helperText={touched.team_id && errors.team_id}
                    sx={{ gridColumn: "span 4" }}
                  >
                    {teamName
                      ? teamName.map((eachTeam) => (
                          <MenuItem value={eachTeam.id} key={eachTeam.id}>
                            {eachTeam.label}
                          </MenuItem>
                        ))
                      : null}
                  </Select>
                </div>
                <div
                  style={{
                    gridColumn: "span 4",
                    width: "20%",
                  }}
                >
                  <InputLabel id="event_id" style={{ color: "#fff" }}>
                    Event Name
                  </InputLabel>
                  <Select
                    style={{ backgroundColor: "#fff", textAlign: "left" }}
                    fullWidth
                    variant="filled"
                    // type="text"
                    label="Event ID"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.event_id}
                    name="event_id"
                    labelId="event"
                    id="event_id"
                    error={!!touched.event_id && !!errors.event_id}
                    helperText={touched.event_id && errors.event_id}
                    sx={{ gridColumn: "span 4" }}
                  >
                    {events
                      ? events.map((event) => (
                          <MenuItem value={event.eventId} key={event.eventId}>
                            {event.name}
                          </MenuItem>
                        ))
                      : null}
                  </Select>
                </div>
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
                        padding: isNonMobile ? "10px 20px" : null,
                        width: "100%",
                        fontSize: isNonMobile ? "16px" : null,
                        letterSpacing: "0.15rem",
                        fontWeight: "bold",
                      }}
                    >
                      Get Teammates
                    </Button>
                  )}
                </Box>
              </Box>
            </form>
          )}
        </Formik>

        <DataGrid
          className="datagrid"
          rows={teamMates}
          columns={columns}
          getRowId={(row) => row.memberId}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  ) : (
    <Loading />
  );
};

const checkoutSchema = yup.object().shape({
  team_id: yup.string().required("required"),
  event_id: yup.string().required("required"),
});
const initialValues = {
  team_id: "",
  event_id: "",
};

export default EventwiseList;
