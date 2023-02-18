import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Header from "../Sidebar/Header";
import { Link } from "react-router-dom";
import axios from "../../features/Interceptors/apiInterceptor";
import Loading from "../../Loading";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const DisplayTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamRegistered, setTeamRegistered] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const getTeamRegisteredDetails = async () => {
    try {
      const { data } = await axios.get("/team/get-team-of-current-user");
      if (data.message == "This user has not registered any teams") {
        const getAllTeamNames = await axios.get(
          "/teamNames/get-available-team-names"
        );
        setTeamRegistered(false);
        setPageLoading(false);
      } else {
        //console.log(data);
        setTeamRegistered(true);
        getTeamMembersOfCurrentUser();
        setPageLoading(false);
      }
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong!! check your internet connectivity",
        icon: "error",
        confirmButtonText: "Okay",
      });
      setTeamRegistered(false);
      setPageLoading(false);
    }
  };

  const getTeamMembersOfCurrentUser = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_ENDPOINT}/teamMember/get`
    );

    setTeamMembers(data);
  };

  useEffect(() => {
    getTeamRegisteredDetails();
  }, []);

  return !pageLoading ? (
    teamRegistered ? (
      <Box>
        <Header
          title="TEAM MEMBERS"
          subtitle="Have a look at your team mates details"
        />
      </Box>
    ) : (
      <Box
        className="flex justify-center items-center "
        sx={{ height: "90vh" }}
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
};

export default DisplayTeam;
