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

// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";



const AssignEvent = () => {
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

  const handleFormSubmit = async (values, { resetForm }) => {
    // console.log(values);
    // dispatch(adminregister(values));
    try {
      setLoading(true);      //   let obj = { teamId: values.team_id };
      //   console.log("obj", obj);
      const { data } = await axios.post("/team/get-specific-team-details", {
        teamId: values.team_id,
      });
      console.log("data", data);
      
    } catch (err) {
      console.log(err);
      setError(err.message);
    }

    setLoading(false)
  };

  console.log("teamMates", teamMates);
  const columns = [
    // { field: "sl_no", headerName: "SL. NO" },
    { field: "memberId", headerName: "Member ID", flex: 1 },
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
      field: "lastName",
      headerName: "Last Name",
      flex: 1,
      // type: "number",
      // headerAlign: "left",
      // align: "left",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      // type: "number",
      // headerAlign: "left",
      // align: "left",
    },
    {
      field: "usn",
      headerName: "USN",
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
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              {error && (
                <Box
                  mb="1rem"
                  sx={{
                    color: "#e87c03",
                    display: "flex",
                    // justifyContent: "center",
                    gap: "0.5rem",
                    alignItems: "center",
                    borderRadius: "5px",
                  }}
                  p=".5rem"
                >
                  <ErrorIcon />
                  {error}
                </Box>
              )}
              <Box
                // placeItems="center"
                // color={colors.grey[100]}
                gap="30px"
                mb="2rem"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  display: "flex",
                  "& > div": {
                    gridColumn: isNonMobile ? undefined : "span 4",
                  },
                }}
              >
                <div
                  style={{
                    gridColumn: "span 4",
                    width: "50%",
                  }}
                >
                  <InputLabel id="team_id">Team Name</InputLabel>
                  <Select
                    fullWidth
                    variant="filled"
                    // type="text"
                    label="Team ID"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.team_id}
                    name="team_id"
                    labelId="team"
                    id="team_id"
                    error={!!touched.team_id && !!errors.team_id}
                    helperText={touched.team_id && errors.team_id}
                    sx={{ gridColumn: "span 4" }}
                  >
                    {teamName
                      ? teamName.map((eachTeam) => (
                          <MenuItem value={eachTeam.id} key={eachTeam.id}>
                            {eachTeam.label}
                          </MenuItem>
                        ))
                      : null}
                  </Select>
                </div>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mt="20px"
                >
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    <Button
                      type="submit"
                      color="secondary"
                      variant="contained"
                      sx={{
                        padding: isNonMobile ? "10px 20px" : null,
                        width: "100%",
                        fontSize: isNonMobile ? "16px" : null,
                        letterSpacing: "0.15rem",
                        fontWeight: "bold",
                      }}
                    >
                      CHECK SENSORS
                    </Button>
                  )}
                </Box>
              </Box>
            </form>
          )}
        </Formik>

        <DataGrid
          checkboxSelection
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

export default AssignEvent;
