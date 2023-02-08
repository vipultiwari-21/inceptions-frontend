import { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import PeopleIcon from "@mui/icons-material/People";
import Logo from "../../assets/exceptions/png/E1.png";
import axios from "../../features/Interceptors/apiInterceptor";
import UpdateIcon from "@mui/icons-material/Update";
import GroupsIcon from "@mui/icons-material/Groups";
import useMediaQuery from "@mui/material/useMediaQuery";
import FilterListIcon from "@mui/icons-material/FilterList";

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      //   style={{
      //     color: colors.grey[100],
      //   }}
      className="text-neutral-content"
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  //   const theme = useTheme();
  //   const colors = tokens(theme.palette.mode);

  const isNonMobile = useMediaQuery("(max-width:700px)");
  console.log("Break-Point : ", isNonMobile);
  const [isAdmin, setIsAdmin] = useState(false);
  const [role, setRole] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Set Team Name");
  const [profile, setProfile] = useState({});

  const getRoleOrProfile = async (route) => {
    const { data } = await axios.get(route);
    if (route === "profile/me") {
      setProfile(data);
    } else if (route === "/auth/my-role") {
      setRole(data.role);
      if (data.role == "PARTICIPANT") {
        setSelected("User Profile");
      }
    }
  };

  useEffect(() => {
    getRoleOrProfile("profile/me");
    getRoleOrProfile("/auth/my-role");
  }, []);

  //   const user = JSON.parse(localStorage.getItem("profile"));

  //   const API = axios.create({ baseURL: process.env.REACT_APP_API });
  //   API.interceptors.request.use((req) => {
  //     if (localStorage.getItem("profile")) {
  //       req.headers.authorization = `Bearer ${
  //         JSON.parse(localStorage.getItem("profile")).accessToken
  //       }`;
  //     }

  //     return req;
  //   });

  //   API.get("auth/my-role", {
  //     headers: {},
  //   })
  //     .then(({ data }) => setRole(data.role))
  //     .catch((err) => console.log(err));
  //   API.get("/auth/is-admin", {
  //     headers: {},
  //   })
  //     .then(({ data }) => setIsAdmin(data.isAdmin))
  //     .catch((err) => console.log(err));
  return (
    <Box
      sx={{
        minHeight: "100vh",

        // "& .pro-sidebar-inner": {
        //   background: `${colors.primary[400]} !important`,
        // },
        "& .pro-menu": {
          minHeight: "100vh",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .MuiBox-root": {
          padding: "0px !important",
        },
        "& .pro-menu-item": {
          padding: "0px !important",
          borderBottom: "0px !important",
        },
        "& .pro-menu-item.active": {
          // color: "#6870fa !impor  tant",
          color: "#fff !important",
          background: "#38BDF8",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed} sx={{ minHeight: "100vh" }}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => (!isNonMobile ? setIsCollapsed(!isCollapsed) : null)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : null}
            style={{
              margin: "10px 0 20px 0",
              color: "#fff",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <img
                  src={Logo}
                  className="logo"
                  style={{ width: "50px", maxWidth: "50px" }}
                />

                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon
                    style={{
                      margin: "10px 0 20px 0",
                      color: "#fff",
                    }}
                  />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                {/* <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                /> */}
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  //   color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {profile.firstName}
                </Typography>
                <Typography variant="h5" className="text-primary">
                  {role}
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {/* <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}

            {/* <Typography
              variant="h6"
              //   color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography> */}
            {/* <Item
              title={role === "PARTICIPANT"}              to="/devices"
              icon={<ChargingStationIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}

            {role === "PARTICIPANT" && (
              <>
                <Item
                  title="User Profile"
                  to="/"
                  icon={<WorkspacesIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Set Team Name"
                  to="team-info"
                  icon={<GroupsIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Add Participants"
                  to="add-participant"
                  icon={<PersonAddAltIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />{" "}
                <Item
                  title="Show Team Members"
                  to="display-team"
                  icon={<FilterListIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </>
            )}
            {role === "ADMIN" && (
              <>
                <Item
                  title="Dashboard"
                  to="/"
                  icon={<PersonAddAltIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Assign Devices"
                  to="assign-device"
                  icon={<AddToQueueIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="My Tenants"
                  to="tenants"
                  icon={<PeopleIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </>
            )}
            {/* <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}>
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}>
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
