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
import Loading from "../../Loading";

function UserProfile() {
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [userName, setUsername] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamDetails, setTeamDetails] = useState([]);
  const [teamCount, setTeamCount] = useState(0);
  const [isRegistered,setIsRegistered]=useState(false)
  const [pageLoading,setPageLoading]=useState(true)

  const getTeam = async () => {
    const { data } = await axios.get("/team/get-team-of-current-user");
    console.log(data);
    if(data.message=="This user has not registered any teams"){
      setPageLoading(false)
      setIsRegistered(false)
    }else{
      setTeamDetails(data);
      setIsRegistered(true)
      const teamDetails = await axios.get(
        `${import.meta.env.VITE_API_ENDPOINT}teamMember/get`
      );
      setTeamCount(teamDetails.data.length);
      setPageLoading(false)
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
    
  }, []);

  return (
    
    !pageLoading ?

    isRegistered ? <Box
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




</Box>
  </Box>

  </Box> : <Box className="flex justify-center items-center " sx={{height:'90vh'}}>
  <Header
      title="Pending registration!!!"
      subtitle="Please register your team name and event type in the Add team section"
    />
  </Box>
  : <Loading />
  );
}

export default UserProfile;
