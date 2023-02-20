import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "../../features/Interceptors/apiInterceptor";
import Header from "../Sidebar/Header";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Loading from "../../Loading";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { useNavigate } from "react-router";

function UserProfile() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isRegistered, setIsRegistered] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [teamMembers, setTeamMembers] = useState([]);
  const navigate = useNavigate();

  const getTeam = async () => {
    try {
      const { data } = await axios.get("/team/get-team-of-current-user");
      if (data.message == "This user has not registered any teams") {
        setIsRegistered(false);
      } else {
        const { data } = await axios.get(`/teamMember/get`);
        setTeamMembers(data);

        setIsRegistered(true);
        // console.log("Team mambers : ", data);
      }
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
    setPageLoading(false);
  };

  useEffect(() => {
    getTeam();
  }, []);

  return !pageLoading ? (
    isRegistered ? (
      <Box
        m="20px"
        sx={{ height: "100vh" }}
        className="flex flex-col items-center justify-center "
      >
        {teamMembers.length > 0 ? (
          <Header
            title={`Team Members`}
            subtitle={`Have a look at your team mates details`}
          />
        ) : (
          <Box>
            <Header
              title={`No team members added`}
              subtitle={`Hey , you havent added a team mate yet ! start adding teammate`}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/add-participant")}
            >
              Add Team mates
            </Button>
          </Box>
        )}

        {teamMembers.length > 0 ? (
          <Box className="overflow-x-auto " sx={{ padding: "20px" }}>
            <table className="table w-full overflow-x-auto">
              <thead>
                <tr>
                  <th
                    className="bg-primary font-bold text-neutral"
                    style={{ zIndex: "-9999" }}
                  ></th>
                  <th className="bg-primary font-bold text-neutral">Name</th>
                  <th className="bg-primary font-bold text-neutral">
                    Phone number
                  </th>
                  <th className="bg-primary font-bold text-neutral">Email</th>
                </tr>
              </thead>
              <tbody>
                {teamMembers
                  ? teamMembers.map((member) => {
                      return (
                        <>
                          <tr key={member.id}>
                            <td>{member.teamMemberId}</td>
                            <td>{member.firstName}</td>
                            <td>{member.contactNumber}</td>
                            <td>{member.email}</td>
                          </tr>
                        </>
                      );
                    })
                  : null}
              </tbody>
            </table>
          </Box>
        ) : null}
      </Box>
    ) : (
      <Box
        m="20px"
        sx={{ height: "100vh" }}
        className="flex justify-center items-center"
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
