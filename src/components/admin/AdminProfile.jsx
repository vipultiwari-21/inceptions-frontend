import React from "react";
import { Box } from "@mui/system";
import Header from "../Sidebar/Header";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

const AdminProfile = () => {
  return (
    <Box
      m="20px"
      sx={{
        height: "100vh",
      }}
      className="flex justify-center items-center flex-col"
    >
      <Header title="Welcome Admin" subtitle="Dashboard" />

      <Grid container className="lg:px-20 py-8" spacing={6}>
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
                  <span className="btn btn-large text-7xl">99</span>
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
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn">Buy Now</button>
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
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn">Buy Now</button>
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
