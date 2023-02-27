import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Header from "../Sidebar/Header";
import { TextField, MenuItem } from "@mui/material";
import axios from "../../features/Interceptors/apiInterceptor";

function GetEventsOfTeam() {
  const [eventsOfTeam, setEventsOfTeam] = useState([]);
  const [teams, setTeams] = useState([]);

  const getAllEvents = async () => {
    try {
      const { data } = await axios.get("/team/get");
      console.log(data);
      setTeams(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <Box
      m="20px"
      sx={{
        height: "90vh",
      }}
      className="flex justify-center items-center flex-col"
    >
      <Header
        title="Events of specific team"
        subtitle="View all events of each team"
      />

      <TextField
        select
        label="Select Team Name"
        variant="filled"
        color="primary"
        InputLabelProps={{ className: "textfield__label" }}
        InputProps={{ className: "textfield__label" }}
        className="textfield  w-72 lg:w-96"
      >
        {teams
          ? teams.map((eachTeam) => (
              <MenuItem
                value={eachTeam.teamId ? eachTeam.teamId : null}
                key={eachTeam.teamId ? eachTeam.teamId : null}
              >
                {eachTeam.teamName ? eachTeam.teamName.label : null}
              </MenuItem>
            ))
          : null}
      </TextField>
    </Box>
  );
}

export default GetEventsOfTeam;
