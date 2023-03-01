import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "../../features/Interceptors/apiInterceptor";
import Header from "../Sidebar/Header";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Loading from "../../Loading";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { useNavigate } from "react-router";
import { DataGrid } from "@mui/x-data-grid";
import { GridToolbar } from "@mui/x-data-grid";

function UserProfile() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isRegistered, setIsRegistered] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [teamMembers, setTeamMembers] = useState([]);
  const navigate = useNavigate();

  const getTeam = async () => {
    try {
      const { data } = await axios.get("/team/get-team-of-current-user");
      if (data.message == "This user has not registered any teams") {
        setIsRegistered(false);
      } else {
        const { data } = await axios.get(`/teamMember/get`);

        const temp = data.map((obj) => {
          return {
            id: obj.teamMemberId,
            firstName: obj.firstName,
            email: obj.email,
            contactNumber: obj.contactNumber,
          };
        });
        setTeamMembers(temp);

        setIsRegistered(true);
        // console.log("Team mambers : ", data);
      }
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
    setPageLoading(false);
  };

  useEffect(() => {
    getTeam();
  }, []);

  const handleDelete = async (val) => {
    console.log(val);

    try {
      const { data } = await axios.post("/teamMember/delete", {
        memberId: val,
      });

      Swal.fire({
        title: "Success!",
        text: "Deleted Succesfully",
        icon: "success",
        confirmButtonText: "Okay",
      });
      getTeam();
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong",
        icon: "error",
        confirmButtonText: "Okay",
      });
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
      field: "firstName",
      headerName: "First Name",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email ID",
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
        let teamMemberId = id;

        // console.log("row", row);
        // console.log("teamMates", teamMates);
        // teamMates.map((member) => console.log(member));
        // console.log("memeberId", memberId);
        return (
          <Button
            color="primary"
            variant="contained"
            onClick={() => handleDelete(teamMemberId)}
          >
            Delete
          </Button>
        );
      },
    },

    // {
    //   field: "usn",
    //   headerName: "USN",
    //   flex: 1,
    // },
  ];

  return !pageLoading ? (
    isRegistered ? (
      <Box
        m="20px"
        sx={{ height: "100vh" }}
        className="flex flex-col items-center justify-center "
      >
        {teamMembers.length > 0 ? (
          <Header
            title={`Team Members`}
            subtitle={`Have a look at your team mates details`}
          />
        ) : (
          <Box>
            <Header
              title={`No team members added`}
              subtitle={`Hey , you havent added a team mate yet ! start adding teammate`}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/add-participant")}
            >
              Add Team mates
            </Button>
          </Box>
        )}

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
            rows={teamMembers}
            columns={columns}
            getRowId={(row) => row.id}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      </Box>
    ) : (
      <Box
        m="20px"
        sx={{ height: "100vh" }}
        className="flex justify-center items-center"
      >
        <Header
          title="Pending registration!!!"
          subtitle="Please register your team name and event type in the Add team section"
        />
      </Box>
    )
  ) : (
    <Loading />
  );
}

export default UserProfile;
