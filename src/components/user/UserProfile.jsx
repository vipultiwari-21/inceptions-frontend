import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import axios from "../../features/Interceptors/apiInterceptor";
import Header from "../Sidebar/Header";
import { Box } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TeamSvg from "../../assets/svg/secret.svg";

function UserProfile() {
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [userName, setUsername] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamDetails, setTeamDetails] = useState([]);
  const [teamCount, setTeamCount] = useState(0);
  const [isRegistered,setIsRegistered]=useState(false)

  const getTeam = async () => {
    const { data } = await axios.get("/team/get-team-of-current-user");
    console.log(data);
    if(data.message=="This user has not registered any teams"){
      setIsRegistered(false)
    }else{
      setTeamDetails(data);
      setIsRegistered(true)
      const teamDetails = await axios.get(
        `${import.meta.env.VITE_API_ENDPOINT}teamMember/get`
      );
      setTeamCount(teamDetails.data.length);
    }
    
  };

  const getUser = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_ENDPOINT}profile/me`
    );

    setUsername(data.firstName);
    console.log(data.firstName);
  };

  const getTeamCount = async () => {
   
    //setTeamData(data);
  };

  useEffect(() => {
    getUser();
    getTeam();
    getTeamCount();
  }, []);

  return (
    <Box
      m="20px"
      sx={{ height: isNonMobile ? "90vh" : "100%" }}
      className="flex justify-center items-center l"
    >
     
    <Box >
    <Header
    title={`Welcome, ${userName}`}
    subtitle="Have a look at your team details"
  />

 

 <Box sx={{width:{lg:'400px'}}}>
 {isRegistered ?
  <Table className="text text-neutral-content font-bold   ">
  <TableRow>
    <TableCell>Team ID</TableCell>
    <TableCell>{teamDetails ? teamDetails.teamId : null}</TableCell>
  </TableRow>
  <TableRow>
    <TableCell>Team Name</TableCell>
    <TableCell>{teamDetails && teamDetails.teamName ? teamDetails.teamName.label : null}</TableCell>
  </TableRow>
  <TableRow>
    <TableCell>Group championship</TableCell>
    <TableCell>{teamDetails ? teamDetails.isGCConsidered ? "Yes" : "No" : null}</TableCell>
  </TableRow>
 
  <TableRow>
    <TableCell>Total participants</TableCell>
    <TableCell>{teamCount}</TableCell>
  </TableRow>

  
 </Table>

: <h1 className="lg:text-2xl font-bold text-neutral-content">Team name is not registered yet!!!</h1>}
 </Box>
    </Box>

    </Box>
  );
}

export default UserProfile;
