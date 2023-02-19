import { Box, IconButton, Typography, useTheme, Button } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { FaBars } from "react-icons/fa";
import { stateModifier } from "../../features/reducers/slice";

const Topbar = ({ handleToggleSidebar }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    Cookies.remove("token");
    dispatch(stateModifier(false));
    window.location.href = "/";
  };
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      backgroundColor="#1F2A40"
      p={2}
    >
      {/* SEARCH BAR */}
      <Box display="flex" borderRadius="3px">
        {/* <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton> */}

        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <>
          <Box className="flex items-center justify-center">
            <IconButton onClick={handleLogout}>
              <LogoutIcon onClick={handleLogout} style={{ color: "#B5CDF5" }} />
            </IconButton>
            <h3
              className="text-xl text-neutral-content font-bold event-header cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </h3>
          </Box>
        </>
      </Box>
    </Box>
  );
};

export default Topbar;
