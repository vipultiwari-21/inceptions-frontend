import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Header from "../Sidebar/Header";
import { TextField, MenuItem } from "@mui/material";
import axios from "../../features/Interceptors/apiInterceptor";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";

function ScoreBoard() {
  const [events, setEvents] = useState([]);
  const [teams, setTeams] = useState([]);
  const [count, setCount] = useState(1);

  const fetchAllTeams = async () => {
    try {
      const { data } = await axios.get("/team/get");
      //   setEvents(data);
      let tempArray = [];
      //   console.log("data", data);

      const newArray = data.filter(
        (team) => team.isGCConsidered === true && team.score > 10
      );
      console.log("newArray", newArray);
      //   console.log("tempArray", tempArray);
      for (let i = 0; i < newArray.length; i++) {
        const getAllData = {
          //   slno: setCount((prevCount) => prevCount + 1),
          slno: count,
          teamId: `${newArray[i].teamId}`,
          teamName: `${newArray[i].teamName.label}`,
          teamHeadUserFirstName: `${newArray[i].headUser.firstName}`,
          teamHeadUserContact: `${newArray[i].headUser.contactNumber}`,
          college: `${newArray[i].teamHeadDetails.collegeName}`,
          score: `${newArray[i].score}`,
        };
        tempArray.push(getAllData);
      }
      setTeams(tempArray);
    } catch (err) {
      console.log(err);
    }
  };

  fetchAllTeams();
  //   useEffect(() => {
  //   }, []);

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
      field: "slno",
      headerName: "Prize",
      flex: 1,
    },
    {
      field: "teamName",
      headerName: "Team Name",
      flex: 1,
    },
    {
      field: "college",
      headerName: "College",
      flex: 1,
    },
    {
      field: "teamHeadUserFirstName",
      headerName: "Team Head Name",
      flex: 1,
    },
    {
      field: "teamHeadUserContact",
      headerName: "Team Head Contact",
      flex: 1,
    },
    {
      field: "score",
      headerName: "Current Score",
      flex: 1,
    },
    // {
    //   field: "route",
    //   headerName: "Details",
    //   flex: 1,
    //   renderCell: ({ row, id }) => {
    //     let teamId = id;

    //     // console.log("row", row);
    //     // console.log("teamMates", teamMates);
    //     // teamMates.map((member) => console.log(member));
    //     // console.log("memeberId", memberId);
    //     return (
    //       <Link to={`/get-teams/${teamId}`} className={id}>
    //         <Button color="primary" variant="contained">
    //           Details
    //         </Button>
    //       </Link>
    //     );
    //   },
    // },

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
        title="SCORE BOARD"
        subtitle="TOP 5 TEAMS TO WIN THE GENERAL CHAMPIONSHIP"
      />

      <Box
        m="40px 0 0 0"
        height="75vh"
        width="100%"
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
          rows={teams}
          columns={columns}
          getRowId={(row) => row.teamId}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
}

export default ScoreBoard;
