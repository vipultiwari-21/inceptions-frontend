import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Header from "../Sidebar/Header";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import axios from "../../features/Interceptors/apiInterceptor";
import Loading from "../../Loading";

const AdminProfile = () => {
  const [totalTeams, setTotalTeams] = useState("");
  const [totalParticipants, setTotalParticipants] = useState("");
  const [totalGCTeams, setTotalGCTeams] = useState("");
  const [solvathonTeams, setSolvathonTeams] = useState("");
  const [IoTTeams, setIoTTeams] = useState("");
  const [strikeForce, setStrikeForce] = useState("");
  const [pageLoading, setPageLoading] = useState(false);
  const [totalGroupEvents, setTotalGroupEvents] = useState("");
  const [totalGCParticipants, setTotalGCParticipants] = useState("");
  const [solvathonPaid, setSolvathonPaid] = useState(0);
  const [StrikeForcePaid, setStrikeForcePaid] = useState(0);
  const [IotPaid, setIotPaid] = useState(0);

  const fetchAllData = async () => {
    setPageLoading(true);
    try {
      const { data } = await axios.get("/team/get");
      setTotalTeams(data.length);
      const filteredData = data.filter((val) => {
        return val.isGCConsidered;
      });

      setTotalGCTeams(filteredData.length);

      const OpenEventsCount = await axios.get(
        "/admin/get-open-event-total-teams"
      );
      const getTotalParticipants = await axios.get(
        "/admin/get-total-team-members"
      );

      setSolvathonTeams(OpenEventsCount.data.solvathon);
      setIoTTeams(OpenEventsCount.data.infinityAndBeyond);
      setStrikeForce(OpenEventsCount.data.strikeForce);
      setTotalParticipants(getTotalParticipants.data);
      setStrikeForcePaid(OpenEventsCount.data.strikeForcePaidTeams);
      setSolvathonPaid(OpenEventsCount.data.solvathonPaidTeams);
      setIotPaid(OpenEventsCount.data.infinityAndBeyondPaidTeams);

      const onlyGCTeams = await axios.get("/admin/get-group-event-total-teams");
      setTotalGroupEvents(onlyGCTeams.data);

      const onlyGCParticipants = await axios.get(
        "/admin/get-total-team-members-of-group-events"
      );

      setTotalGCParticipants(onlyGCParticipants.data);
    } catch (err) {}
    setPageLoading(false);
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return !pageLoading ? (
    <Box
      m="20px"
      sx={{
        height: "90vh",
      }}
      className="flex justify-center items-center flex-col"
    >
      <Header title="Welcome Admin" subtitle="Dashboard" />
      <h2 className="text-2xl text-left font-bold w-full ml-8">
        General Updates
      </h2>

      <Grid container className="lg:px-20 py-8 overflow-auto mt-5" spacing={6}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <div className="card w-72 bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title text-center">Total teams</h2>

                <div className="card-actions w-full flex justify-center items-center">
                  <span className="text-5xl">{totalTeams}</span>
                </div>
              </div>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <div className="card w-72 bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Total Participants</h2>

                <div className="card-actions w-full flex justify-center items-center">
                  <span className="text-5xl ">{totalParticipants} </span>
                </div>
              </div>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <div className="card w-72 bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Teams in group+open events</h2>
                <div className="card-actions w-full flex justify-center items-center">
                  <span className="text-5xl">{totalGCTeams}</span>
                </div>
              </div>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <div className="card w-72 bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Total teams only in group events</h2>
                <div className="card-actions w-full flex justify-center items-center">
                  <span className="text-5xl">{totalGroupEvents}</span>
                </div>
              </div>
            </div>
          </Box>
        </Grid>

        <h1 className="text-2xl font-bold text-center">Open Events</h1>

        <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <div className="card w-72 bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Total teams in Solvathon</h2>
                <div className="card-actions w-full flex justify-center items-center">
                  <span className="text-5xl">{solvathonTeams}</span>
                </div>
              </div>
            </div>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <div className="card w-72 bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Total teams in Strike Force</h2>
                <div className="card-actions w-full flex justify-center items-center">
                  <span className="text-5xl">{strikeForce}</span>
                </div>
              </div>
            </div>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <div className="card w-72 bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">
                  Total teams in Infinity and beyond
                </h2>
                <div className="card-actions w-full flex justify-center items-center">
                  <span className="text-5xl">{IoTTeams}</span>
                </div>
              </div>
            </div>
          </Box>
        </Grid>
      </Grid>
      <h1 className="text-2xl font-bold text-left  ml-8 w-full">
        Payment Status
      </h1>
      <Grid container className="lg:px-20 py-8 overflow-auto mt-5" spacing={6}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <div className="card w-72 bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Total Paid in Solvathon</h2>
                <div className="card-actions w-full flex justify-center items-center">
                  <span className="text-5xl">{solvathonPaid}</span>
                </div>
              </div>
            </div>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <div className="card w-72 bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Total Paid in Strike Force</h2>
                <div className="card-actions w-full flex justify-center items-center">
                  <span className="text-5xl">{StrikeForcePaid}</span>
                </div>
              </div>
            </div>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <div className="card w-72 bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Total Paid in Infinity & beyond</h2>
                <div className="card-actions w-full flex justify-center items-center">
                  <span className="text-5xl">{IotPaid}</span>
                </div>
              </div>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  ) : (
    <Loading />
  );
};

export default AdminProfile;
