import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
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
import { DataGrid } from "@mui/x-data-grid";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const VolunteerAttendance = () => {
  //   const theme = useTheme();
  //   const colors = tokens(theme.palette.mode);
  const [loading, setLoading] = useState(false);
  const [teamMates, setTeamMates] = useState([]);
  const [error, setError] = useState("");
  const isNonMobile = useMediaQuery("(min-width:650px)");
  const [teamName, setTeamName] = useState([] || {});

  const getTeams = async () => {
    const { data } = await axios.get("/team/get");
    const temp = data.map((obj) => {
      return {
        id: obj.teamId,
        label: obj.teamName.label,
      };
    });
    // console.log("temp", temp);

    // allTeams.push(temp);
    setTeamName(temp);
  };

  useEffect(() => {
    getTeams();
  }, []);

  const handleChange = async (val) => {
    try {
      //   let obj = { teamId: values.team_id };
      //   console.log("obj", obj);
      const { data } = await axios.post("/team/get-specific-team-details", {
        teamId: val,
      });

      const temp = data[0].teamMembers.map((obj) => {
        return {
          id: obj.memberId,
          firstName: obj.firstName,
          participantStatus: obj.isPresent,
          contactNumber: obj.contactNumber,
          email: obj.email,
        };
      });
      setTeamMates(temp);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  const handlePresent = async (memberId) => {
    try {
      const { data } = await axios.post("/teamMember/update-attendence", {
        memberId: memberId,
        isPresent: true,
      });

      //console.log(data);

      Swal.fire({
        title: "Success!",
        text: data.status,
        icon: "success",
        confirmButtonText: "Okay",
      });
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "Error!",
        text: err.response.data.error,
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  const columns = [
    // { field: "sl_no", headerName: "SL. NO" },
    // {
    //   field: "user",
    //   headerName: "User Name",
    //   flex: 1,
    //   cellClassName: "name-column--cell",
    // },
    {
      field: "firstName",
      headerName: "First Name",
      flex: 1,
      // type: "number",
      // headerAlign: "left",
      // align: "left",
    },

    {
      field: "contactNumber",
      headerName: "Contact Number",
      flex: 1,
      // type: "number",
      // headerAlign: "left",
      // align: "left",
    },
    {
      field: "email",
      headerName: "Email ID",
      flex: 1,
      // type: "number",
      // headerAlign: "left",
      // align: "left",
    },

    {
      field: "participantStatus",
      headerName: "Participant Attendance",
      flex: 1,
      // type: "number",
      // headerAlign: "left",
      // align: "left",
    },

    {
      field: "status",
      headerName: "Participant Status",
      flex: 1,
      renderCell: ({ row, id }) => {
        let memberId = id;

        // console.log("row", row);
        // console.log("teamMates", teamMates);
        // teamMates.map((member) => console.log(member));
        // console.log("memeberId", memberId);
        return (
          <Button
            color="primary"
            variant="contained"
            onClick={() => handlePresent(memberId)}
          >
            Update attendance
          </Button>
        );
      },
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
        <TextField
          select
          label="Select Team Name"
          variant="filled"
          color="primary"
          InputLabelProps={{ className: "textfield__label" }}
          InputProps={{ className: "textfield__label" }}
          className="textfield  w-72 lg:w-96"
          onChange={(e) => handleChange(e.target.value)}
        >
          {teamName
            ? teamName.map((eachTeam) => (
                <MenuItem value={eachTeam.id} key={eachTeam.id}>
                  {eachTeam.label}
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
            rows={teamMates}
            columns={columns}
            getRowId={(row) => row.id}
          />
        </Box>
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

export default VolunteerAttendance;
