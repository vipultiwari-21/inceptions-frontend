import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
// import { tokens } from "../theme";
import { useState, useEffect } from "react";
// import { mockDataTeam } from "../data/mockData";
// import Header from "./Header";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import ErrorIcon from "@mui/icons-material/Error";
import axios from "../../features/Interceptors/apiInterceptor";
import Header from "../Sidebar/Header";
import { useParams } from "react-router-dom";

// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const GetSpecificTeam = () => {
  //   const theme = useTheme();
  //   const colors = tokens(theme.palette.mode);
  const [loading, setLoading] = useState(false);
  const [teamMates, setTeamMates] = useState([]);
  const [error, setError] = useState("");

  const { id } = useParams();

  useEffect(() => {
    getTeamDetails();
  }, []);

  const getTeamDetails = async () => {
    try {
      setLoading(true); //   let obj = { teamId: values.team_id };
      //   console.log("obj", obj);
      const { data } = await axios.post("/team/get-specific-team-details", {
        teamId: id,
      });
      setTeamMates(data[0].teamMembers);
      resetForm({ values: initialValues });
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  const columns = [
    { field: "memberId", headerName: "Member ID", flex: 1 },
    {
      field: "firstName",
      headerName: "First Name",
      flex: 1,
    },
    // {
    //   field: "lastName",
    //   headerName: "Last Name",
    //   flex: 1,
    // },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    // {
    //   field: "usn",
    //   headerName: "USN",
    //   flex: 1,
    // },
    {
      field: "contactNumber",
      headerName: "Contact Number",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Get Specific Team Details"
        subtitle="List of the specific teammates"
      />
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
          rows={teamMates}
          columns={columns}
          getRowId={(row) => row.memberId}
        />
      </Box>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  team_id: yup.string().required("required"),
});
const initialValues = {
  team_id: "",
};

export default GetSpecificTeam;
