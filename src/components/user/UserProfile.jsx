import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "../../features/Interceptors/apiInterceptor";
import Header from "../Sidebar/Header";
import { Box } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import Table from "@mui/material/Table";
import AstronautImage from "../../assets/images/astronaut.png";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Loading from "../../Loading";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

function UserProfile() {
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [userName, setUsername] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamDetails, setTeamDetails] = useState([]);
  const [teamCount, setTeamCount] = useState(0);
  const [isRegistered, setIsRegistered] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [userDetails, setUserDetails] = useState([]);

  const getTeam = async () => {
    try {
      const { data } = await axios.get("/profile/me");
      if (data.message == "This user has not registered any teams") {
        setPageLoading(false);
        setIsRegistered(false);
      } else {
        setUserDetails(data);
        setIsRegistered(true);
        const currUserTeam = await axios.get("team/get-team-of-current-user");
        setTeamDetails(currUserTeam.data);

        const teamSize = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}teamMember/get`
        );
        setTeamCount(teamSize.data.length);
        setPageLoading(false);
      }
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  const getUser = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_ENDPOINT}profile/me`
      );

      setUsername(data.firstName);
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong!",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  useEffect(() => {
    getUser();
    getTeam();
  }, []);

  return !pageLoading ? (
    isRegistered ? (
      <Box
        m="20px"
        sx={{ height: isNonMobile ? "90vh" : "100%" }}
        className="flex justify-center items-center l"
      >
        <Box className="flex flex-col align-center justify-center">
          <Header
            title={`Welcome , ${userDetails ? userDetails.firstName : null}`}
            subtitle={`Cant wait to see you soon at RVCE`}
          />

          <Box
            sx={{
              width: { lg: "400px" },
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            <Table className=" ">
              <TableRow>
                <TableCell>Team ID</TableCell>
                <TableCell>{teamDetails ? teamDetails.teamId : null}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Team Name</TableCell>
                <TableCell>
                  {teamDetails && teamDetails.teamName
                    ? teamDetails.teamName.label
                    : null}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>General Championship</TableCell>
                <TableCell>
                  {teamDetails
                    ? teamDetails.isGCConsidered
                      ? "Yes"
                      : "No"
                    : null}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Total Participants</TableCell>
                <TableCell>{teamCount}</TableCell>
              </TableRow>
            </Table>
          </Box>
        </Box>
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
}

export default UserProfile;
