import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Header from "../Sidebar/Header";
import { TextField, MenuItem } from "@mui/material";
import axios from "../../features/Interceptors/apiInterceptor";
import { DataGrid } from "@mui/x-data-grid";
import { GridToolbar } from "@mui/x-data-grid";

function GetEventsOfTeam() {
  const [eventsOfTeam, setEventsOfTeam] = useState([]);
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");

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

  const handleChange = async (e) => {
    try {
      const { data } = await axios.post("/team/get-events-of-specific-team", {
        teamId: e.target.value,
      });

      const temp = data.map((obj) => {
        return {
          id: obj.eventId,
          label: obj.eventName,
          maxTeamSize: obj.eventMaxTeamSize,
          isOpenEvent: obj.eventIsOpenEvent,
        };
      });

      //console.log(data);
      setEventsOfTeam(temp);
    } catch (err) {
      console.log(err);
    }
  };

  const columns = [
    // {
    //   field: "headUser",
    //   headerName: "Team Head",
    //   flex: 1,
    // },
    // {
    //   field: "lastName",
    //   headerName: "Last Name",
    //   flex: 1,
    // },

    {
      field: "id",
      headerName: "Event Id",
      flex: 1,
    },

    {
      field: "label",
      headerName: "Team Name",
      flex: 1,
    },

    {
      field: "isOpenEvent",
      headerName: "Is Open Event",
      flex: 1,
    },

    // {
    //   field: "usn",
    //   headerName: "USN",
    //   flex: 1,
    // },
  ];

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
        onChange={(e) => {
          handleChange(e);
        }}
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
        <DataGrid
          className="datagrid"
          rows={eventsOfTeam}
          columns={columns}
          getRowId={(row) => row.id}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
}

export default GetEventsOfTeam;
