import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Header from "../Sidebar/Header";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import axios from "../../features/Interceptors/apiInterceptor";

const AdminProfile = () => {
  const [totalTeams, setTotalTeams] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [totalGCTeams, setTotalGCTeams] = useState("");
  const [solvathonTeams, setSolvathonTeams] = useState("");
  const [IoTTeams, setIoTTeams] = useState("");
  const [strikeForce, setStrikeForce] = useState("");

  const fetchAllData = async () => {
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
      console.log(OpenEventsCount);
      setSolvathonTeams(OpenEventsCount.data.solvathon);
      setIoTTeams(OpenEventsCount.data.infinityAndBeyond);
      setStrikeForce(OpenEventsCount.data.strikeForce);
    } catch (err) {}
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <Box
      m="20px"
      sx={{
        height: "90vh",
      }}
      className="flex justify-center items-center flex-col"
    >
      <Header title="Welcome Admin" subtitle="Dashboard" />

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
                <h2 className="card-title text-center">Total team count</h2>

                <div className="card-actions w-full flex justify-center items-center">
                  <span className="text-7xl">{totalTeams}</span>
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
                <h2 className="card-title">Total Amount</h2>

                <div className="card-actions w-full flex justify-center items-center">
                  <span className="text-7xl">{totalAmount}</span>
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
                <h2 className="card-title">Total teams in group event</h2>
                <div className="card-actions w-full flex justify-center items-center">
                  <span className="text-7xl">{totalGCTeams}</span>
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
                <h2 className="card-title">Total teams in Solvathon</h2>
                <div className="card-actions w-full flex justify-center items-center">
                  <span className="text-7xl">{solvathonTeams}</span>
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
                <h2 className="card-title">Total teams in Strike Force</h2>
                <div className="card-actions w-full flex justify-center items-center">
                  <span className="text-7xl">{strikeForce}</span>
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
                <h2 className="card-title">
                  Total teams in Infinity and beyond
                </h2>
                <div className="card-actions w-full flex justify-center items-center">
                  <span className="text-7xl">{IoTTeams}</span>
                </div>
              </div>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminProfile;
