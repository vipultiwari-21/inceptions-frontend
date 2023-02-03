import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { Formik } from "formik";
import * as yup from "yup";
import Topbar from "./Topbar";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import CircularProgress from "@material-ui/core/CircularProgress";
import ErrorIcon from "@mui/icons-material/Error";
import CreateApiInterceptor from "../../features/Interceptors/apiInterceptor";

const TeamInfo = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState("");
  const eventTypes = ["General Champtionships", "Non General Champtionship"];
  const [teamData, setTeamData] = useState([]);

  const getTeam = async () => {
    const { data } = await CreateApiInterceptor().get(
      "/team/get-team-of-current-user"
    );
    setTeamData(data);
  };

  useEffect(() => {
    getTeam();
    console.log("teamData", teamData);
  }, []);

  const handleFormSubmit = async (values) => {
    try {
      setLoading(true);
      // console.log(values.eventType === values.eventType.toLowerCase())
      let isGCConsidered =
        values.eventType.toLowerCase().replace(/ +/g, "") ===
        "generalchamptionships";
      let obj = {
        name: values.name,
        isGCConsidered,
      };
      console.log(obj);
      const { data } = await CreateApiInterceptor().post(
        `${import.meta.env.VITE_API_ENDPOINT}team/add`,
        obj
      );

      // CreateApiInterceptor();
      // const { data } = await axios.post(
      //   `${import.meta.env.VITE_API_ENDPOINT}team/add`,
      //   obj
      // );
      // console.log(CreateApiInterceptor());
      console.log(res);

      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <Box m="20px" sx={{ height: "85vh" }}>
      <Box
        m="20px"
        sx={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
            <form
              onSubmit={handleSubmit}
              style={{
                width: "100%",
                maxWidth: "30rem",
                boxShadow: isNonMobile
                  ? "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"
                  : null,
                // color: colors.grey[100],
                marginTop: "2rem",
                margin: "0 auto",
                padding: isNonMobile ? "2rem" : null,
                borderRadius: "6px",
                // background: isNonMobile ? colors.primary[400] : null,
                background: "white",
              }}
            >
              <Typography
                variant="h3"
                // color={colors.grey[100]}
                fontWeight="bold"
                mb="2rem"
              >
                REGISTER TEAM
              </Typography>
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
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                // sx={{
                //   "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                // }}
              >
                {/* <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              /> */}
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Team Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  name="name"
                  id="name"
                  error={!!touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                  sx={{ gridColumn: "span 4" }}
                />
                <div
                  style={{
                    gridColumn: "span 4",
                    width: "100%",
                  }}
                >
                  <InputLabel id="tenantId">Event Type</InputLabel>
                  <Select
                    fullWidth
                    variant="filled"
                    // type="text"
                    label="Event Type"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.eventType}
                    name="eventType"
                    labelId="Event Type"
                    id="eventType"
                    error={!!touched.eventType && !!errors.eventType}
                    helperText={touched.eventType && errors.eventType}
                    sx={{ gridColumn: "span 4" }}
                  >
                    {eventTypes.map((event, id) => (
                      <MenuItem value={event} key={id}>
                        {event}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
                {/* <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              /> */}
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt="20px"
              >
                {loading ? (
                  <CircularProgress />
                ) : teamData.length ? (
                  <Button
                    disabled
                    type="submit"
                    color="secondary"
                    variant="contained"
                    sx={{
                      padding: "10px 20px",
                      width: "100%",
                      fontSize: "16px",
                      letterSpacing: "0.15rem",
                      fontWeight: "bold",
                    }}
                  >
                    Already Registered
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    sx={{
                      padding: "10px 20px",
                      width: "100%",
                      fontSize: "16px",
                      letterSpacing: "0.15rem",
                      fontWeight: "bold",
                    }}
                  >
                    Register team
                  </Button>
                )}
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  eventType: yup.string().required("required"),
});
const initialValues = {
  name: "",
  eventType: "",
};

export default TeamInfo;
