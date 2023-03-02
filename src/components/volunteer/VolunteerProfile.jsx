import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Header from "../Sidebar/Header";
import axios from "../../features/Interceptors/apiInterceptor";
import { DataGrid } from "@mui/x-data-grid";
import { GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function VolunteerProfile() {
  const [attendanceData, setAttendanceData] = useState([]);

  const checkStatus = (obj) => {
    return obj.isPresent == true;
  };

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/team/get-all-team-details");
      console.log(data);

      const temp = data.map((obj) => {
        return {
          teamName: obj.teamName.label,
          teamCount: obj.teamMembers.length,
          id: obj.teamId,
          firstName: obj.headUser.firstName,
          contactNumber: obj.headUser.contactNumber,
          isPresent: obj.teamMembers.every(checkStatus),
        };
      });

      console.log(temp);
      setAttendanceData(temp);
    } catch (err) {
      alert("Something went wrong!!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      field: "teamName",
      headerName: "Team Name",
      flex: 1,
    },
    {
      field: "teamCount",
      headerName: "Total Participants",
      flex: 1,
    },
    {
      field: "firstName",
      headerName: "First Name",
      flex: 1,
    },
    {
      field: "isPresent",
      headerName: "Attendance status",
      flex: 1,
    },
    {
      field: "contactNumber",
      headerName: "Contact Number",
      flex: 1,
    },
    {
      field: "route",
      headerName: "Details",
      flex: 1,
      renderCell: ({ row, id }) => {
        let teamId = id;

        // console.log("row", row);
        // console.log("teamMates", teamMates);
        // teamMates.map((member) => console.log(member));
        // console.log("memeberId", memberId);
        return (
          <Link to={`/get-teams/${teamId}`} className={id}>
            <Button color="primary" variant="contained">
              Details
            </Button>
          </Link>
        );
      },
    },

    // {
    //   field: "usn",
    //   headerName: "USN",
    //   flex: 1,
    // },
  ];

  return (
    <Box m="20px" sx={{ height: "90vh" }}>
      <Header
        title="Get Attenance status of teams"
        subtitle="List of the specific events"
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
          rows={attendanceData}
          columns={columns}
          getRowId={(row) => row.id}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
}

export default VolunteerProfile;
