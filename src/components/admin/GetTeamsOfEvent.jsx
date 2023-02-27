import React, { useState } from "react";
import { Box } from "@mui/system";
import Header from "../Sidebar/Header";
import { TextField } from "@mui/material";

function GetTeamsOfEvent() {
  const [events, setEvents] = useState([]);

  return (
    <Box
      m="20px"
      sx={{
        height: "90vh",
      }}
      className="flex justify-center items-center flex-col"
    >
      <Header
        title="Teams of specific event"
        subtitle="View all teams of each event"
      />

      <TextField
        select
        label="Select Event Name"
        variant="filled"
        color="primary"
        InputLabelProps={{ className: "textfield__label" }}
        InputProps={{ className: "textfield__label" }}
        className="textfield  w-72 lg:w-96"
        value={events}
      ></TextField>
    </Box>
  );
}

export default GetTeamsOfEvent;
