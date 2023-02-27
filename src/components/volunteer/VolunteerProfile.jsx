import React from "react";
import { Box } from "@mui/system";
import Header from "../Sidebar/Header";

function VolunteerProfile() {
  return (
    <Box m="20px" sx={{ height: "90vh" }}>
      <Header
        title="Get Specific Event Details"
        subtitle="List of the specific events"
      />
    </Box>
  );
}

export default VolunteerProfile;
