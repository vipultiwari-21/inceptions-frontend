import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Header from "../Sidebar/Header";
import { Link } from "react-router-dom";
import axios from "../../features/Interceptors/apiInterceptor";
// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const DisplayTeam = () => {
  const [teamMemberTable, setTeamMemberTable] = useState([]);
  const getTeamMembersOfCurrentUser = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_ENDPOINT}/teamMember/get`
    );
    setTeamMemberTable(data);
    console.log(data);
  };

  useEffect(() => {
    getTeamMembersOfCurrentUser();
    // getAllCustomers();
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
      minWidth:25
    },
    

    {
      field: "contactNumber",
      headerName: "Contact Number",
      flex: 1,
      minWidth:25
    },

    // {
    //   field: "phone",
    //   headerName: "Phone Number",
    //   flex: 1,
    // },
    // {
    //   field: "email",
    //   headerName: "Email",
    //   flex: 1,
    // },
  ];

  return (
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
  );
};

export default DisplayTeam;
