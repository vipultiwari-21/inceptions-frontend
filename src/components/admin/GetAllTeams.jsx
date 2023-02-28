import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
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
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { GridToolbar } from "@mui/x-data-grid";
import Loading from "../../Loading";

// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const GetAllTeams = () => {
  //   const theme = useTheme();
  //   const colors = tokens(theme.palette.mode);
  const [teamName, setTeamName] = useState([] || {});
  const [pageLoading, setPageLoading] = useState(false);

  const getTeamCount = async (teamId) => {
    try {
      const { data } = await axios.post("/team/get-specific-team-details", {
        teamId: teamId,
      });

      return data[0].teamMembers ? data[0].teamMembers.length : null;
    } catch (err) {
      console.log("Error occured!!");
    }
  };

  const getPayment = async (userId) => {
    try {
      const { data } = await axios.post("/payment/is-participant-paid", {
        participantId: userId,
      });

      if (data.isPaid && data.paymentData.isVerified) {
        return true;
      } else {
        return false;
      }
    } catch (err) {}
  };

  const getCollegeOfHeadUser = async (userId) => {
    try {
      const { data } = await axios.post("/user/get-user-by-id", {
        userId: userId,
      });

      return data.participantDetails
        ? data.participantDetails.collegeName
        : null;
    } catch (err) {
      console.log(err);
    }
  };

  const getTeams = async () => {
    setPageLoading(true);
    try {
      const { data } = await axios.get("/team/get");
      console.log(data);

      const temp1 = await Promise.all(
        data.map(async (obj) => {
          return {
            id: obj.teamId,
            label: obj.teamName.label,
            payment: await getPayment(
              obj.headUser ? obj.headUser.userId : null
            ),
            college: await getCollegeOfHeadUser(
              obj.headUser ? obj.headUser.userId : null
            ),
            total: await getTeamCount(obj.teamId ? obj.teamId : null),
          };
        })
      );

      const temp = data.map((obj) => {
        return {
          id: obj.teamId,
          label: obj.teamName.label,
          payment: getPayment(),
        };
      });

      // allTeams.push(temp);
      setTeamName(temp1);
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err,
        icon: "error",
      });
    }

    setPageLoading(false);
  };

  useEffect(() => {
    getTeams();
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
      field: "label",
      headerName: "Team Name",
      flex: 1,
    },
    {
      field: "college",
      headerName: "College Name",
      flex: 1,
    },
    {
      field: "total",
      headerName: "Total Participants",
      flex: 1,
    },
    {
      field: "payment",
      headerName: "Payment",
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
          <Link to={`${teamId}`} className={id}>
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

  return !pageLoading ? (
    <Box m="20px">
      <Header title="Get All Team Details" subtitle="List of the all teams" />
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
          rows={teamName}
          columns={columns}
          getRowId={(row) => row.id}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  ) : (
    <Loading />
  );
};

const checkoutSchema = yup.object().shape({
  team_id: yup.string().required("required"),
});
const initialValues = {
  team_id: "",
};

export default GetAllTeams;
