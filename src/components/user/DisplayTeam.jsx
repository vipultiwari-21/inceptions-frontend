import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Header from "../Sidebar/Header";
import { Link } from "react-router-dom";
import axios from "../../features/Interceptors/apiInterceptor";
import Loading from "../../Loading";
// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const DisplayTeam = () => {
  const [teamMemberTable, setTeamMemberTable] = useState([]);
  const [teamRegistered, setTeamRegistered] = useState(false);
  const [pageLoading,setPageLoading]=useState(true)

  const getTeamRegisteredDetails = async () => {
    try {
      const { data } = await axios.get("/team/get-team-of-current-user");
      if (data.message == "This user has not registered any teams") {
        const getAllTeamNames = await axios.get(
          "/teamNames/get-available-team-names"
        );
        console.log("Not registered");
        setTeamRegistered(false);
        setPageLoading(false)
      } else {
        //console.log(data);
        setTeamRegistered(true);
        getTeamMembersOfCurrentUser();
        setPageLoading(false)
      }
    } catch (err) {
      alert("Error occured");
      setTeamRegistered(false)
      setPageLoading(false)
    }
  };

  const getTeamMembersOfCurrentUser = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_ENDPOINT}/teamMember/get`
    );

    console.log("wsdfeedfer", data);
    setTeamMemberTable(data)
  };

  useEffect(() => {
    getTeamRegisteredDetails();
    // // getAllCustomers();
    console.log("Hello")
  }, []);

  const columns = [
    // { field: "sl_no", headerName: "SL. NO" },
    // { field: "userId", headerName: "User ID", flex: 1 },
    // {
    //   field: "user",
    //   headerName: "User Name",
    //   flex: 1,
    //   cellClassName: "name-column--cell",
    // },
    {
      field: "firstName",
      headerName: "Name",
      flex: 1,
      // type: "number",
      // headerAlign: "left",
      // align: "left",
      minWidth: 100,
    },

    {
      field: "contactNumber",
      headerName: "Contact Number",
      flex: 1,
      minWidth: 100,
    },

    // {
    //   field: "phone",
    //   headerName: "Phone Number",
    //   flex: 1,
    // },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      minWidth:200
    },
  ];

  return  (

    !pageLoading ? 

    teamRegistered ?


    
    <Box m="20px">
      <Header title="TEAM MEMBERS" subtitle="Here is your team members list" />
      <Box
        m="40px 0 0 0"
        height="70vh"
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
        {
          <DataGrid
            className="datagrid"
            rows={teamMemberTable}
            columns={columns}
            getRowId={(row) => row.teamMemberId}
            pageSize={8}
          />
        }
      </Box>
    </Box>

    : 
    <Box className="flex justify-center items-center " sx={{ height: "90vh" }}>
      <Header
        title="Pending registration!!!"
        subtitle="Please register your team name and event type in the Add team section"
      />
    </Box>

    : <Loading />

  ) 
  
};

export default DisplayTeam;
