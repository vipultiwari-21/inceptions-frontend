import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Checkbox,
  Typography,
  FormGroup,
  useTheme,
  FormControlLabel,
} from "@mui/material";
import { Box } from "@mui/system";
import ErrorIcon from "@mui/icons-material/Error";
import { Field, Formik } from "formik";
import * as yup from "yup";
import React, { useEffect } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
// import Topbar from "./Topbar";
// import { tokens } from "../theme";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
// import { adminregister, customerregister } from "../actions/auth";
// import axios, { all } from "axios";
// import Header from "./Header.js";

import axios from "../../features/Interceptors/apiInterceptor";
import Header from "../Sidebar/Header";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import CircularProgress from "@material-ui/core/CircularProgress";
// import { CheckboxWithLabel } from "formik-material-ui";
import { MultiSelect } from "react-multi-select-component";
import Loading from "../../Loading";
function ScoreForm() {
  let arr = [];
  const [loading, setLoading] = useState(false);
  const [teamMates, setTeamMates] = useState([]);
  const [events, setEvents] = useState([]);
  const isNonMobile = useMediaQuery("(min-width:650px)");
  const [teamName, setTeamName] = useState([] || {});
  const [teamId, setTeamId] = useState("");
  const [eventId, setEventId] = useState("");
  const [selected, setSelected] = useState([]);
  const [pageLoading, setPageLoading] = useState(false);

  const checkoutSchema = yup.object().shape({
    team_id: yup.string().required("required"),
    score: yup.string().required("required"),
  });
  const initialValues = {
    team_id: "",
    score: "",
  };

  const getTeams = async () => {
    setPageLoading(true);
    const { data } = await axios.get("/team/get");
    const temp = data.map((obj) => {
      return {
        id: obj.teamId,
        label: obj.teamName.label,
      };
    });

    // allTeams.push(temp);
    setTeamName(temp);
    setPageLoading(false);
  };

  useEffect(() => {
    getTeams();
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleFormSubmit = async (values, { setSubmitting, resetForm }) => {
    // const data = await loginAuth(values);

    // console.log(values);

    // console.log({ teamId: values.team_id, score: values.score });
    try {
      const { data } = await axios.post("/team/add-score-to-team", {
        teamId: values.team_id,
        score: Number(values.score),
      });

      console.log(data);

      setLoading(false);
      setLoading(false);
      Swal.fire({
        title: "Success!",
        text: data.status,
        icon: "success",
        confirmButtonText: "Okay",
      });
      setLoading(false);
      resetForm();
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err.response.data.error,
        icon: "error",
        confirmButtonText: "Okay",
      });
      setLoading(false);
    }
  };

  return !pageLoading ? (
    <Box m="20px" sx={{ height: isNonMobile ? "90vh" : "100%" }}>
      <Header
        title="Update GC Team Scores"
        subtitle="Fill up the form with the Team and Score"
      />
      <Box
        m="20px"
        sx={{
          height: isNonMobile ? "80vh" : "100%",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={checkoutSchema}
          onSubmit={handleFormSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            /* and other goodies */
          }) => (
            <form
              onSubmit={handleSubmit}
              style={{
                width: "100%",
                // boxShadow: "7px 7px 9px 0px rgba(0,0,0,0.47)",
                boxShadow: isNonMobile
                  ? "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"
                  : null,
                maxWidth: "40rem",
                color: "#e0e0e0",
                margin: "0 auto",
                padding: isNonMobile ? "2rem" : null,
                borderRadius: "6px",
                background: isNonMobile ? "#1F2A40" : null,
                // display: "grid",
                // placeItems: "center",
                // height: "100%",
              }}
            >
              <p className="mb-4 font-bold" style={{ color: "#fff" }}>
                Update the score
              </p>
              <div className="mb-4">
                <InputLabel
                  id="team_id"
                  style={{
                    color: "#fff",
                    textAlign: "left",
                    marginBottom: ".5rem",
                  }}
                >
                  Team Name
                </InputLabel>
                <Select
                  style={{ backgroundColor: "#fff", textAlign: "left" }}
                  fullWidth
                  variant="filled"
                  // type="text"
                  label="Team ID"
                  // onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.team_id}
                  name="team_id"
                  labelId="team_id"
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
              <div className="mb-4">
                <InputLabel
                  id="score"
                  style={{
                    color: "#fff",
                    textAlign: "left",
                    marginBottom: ".5rem",
                  }}
                >
                  Update Score
                </InputLabel>
                <TextField
                  type="text"
                  name="score"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.score}
                  placeholder="Score"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal
             text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
              rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
              focus:border-blue-600 focus:outline-none"
                ></TextField>
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
                    Update Score
                  </Button>
                )}
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  ) : (
    <Loading />
  );
}

export default ScoreForm;
