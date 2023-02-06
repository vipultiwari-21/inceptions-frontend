import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import axios from "../../features/Interceptors/apiInterceptor";
import Header from "../Sidebar/Header";
import { Box } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function UserProfile() {
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [userName, setUsername] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamDetails,setTeamDetails]=useState([])
  const [teamCount,setTeamCount]=useState(0)




  

  const getTeam = async () => {
    const { data } = await axios.get("/team/get-team-of-current-user");
    console.log(data);
    setTeamDetails(data)
      
  };


  const getUser = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_ENDPOINT}profile/me`
    );

    setUsername(data.firstName);
    console.log(data.firstName);
  };

  const getTeamCount = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}teamMember/get`);
     setTeamCount(data.length);
    //setTeamData(data);
  };
 
  

  useEffect(() => {
    getUser();
    getTeam()
    getTeamCount()
  }, []);



 

  return (
    <Box m="20px" sx={{ height: isNonMobile ? "90vh" : "100%" }}
    
    
    

    className="flex justify-center items-center flex-col">
      <Header 
      title={`Welcome, ${userName}`}
        subtitle="Have a look at your team details"
     
     
        />

      <Table className="text text-primary font-bold ">
      <TableRow >
          <TableCell >Team ID</TableCell>
          <TableCell>{teamDetails.teamId}</TableCell>
      </TableRow>
      <TableRow>
          <TableCell>Team Name</TableCell>
          <TableCell>{teamDetails.name}</TableCell>
      </TableRow>
      <TableRow>
      <TableCell>Group championship</TableCell>
      <TableCell>{teamDetails.isGCConsidered ? "Yes" : "No"}</TableCell>
  </TableRow>

  <TableRow>
      <TableCell>Total participants</TableCell>
      <TableCell>{teamCount}</TableCell>
  </TableRow>

  </Table>

      </Box>
  );
}

export default UserProfile;
