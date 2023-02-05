import { Box, IconButton, Typography, useTheme, Button } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { stateModifier } from "../../features/reducers/slice";

const Topbar = () => {
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
      width="100%"
      backgroundColor="white"
      p={2}
    >
      {/* SEARCH BAR */}
      <Box display="flex" borderRadius="3px">
        {/* <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton> */}
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <>
          <IconButton onClick={handleLogout}>
            <LogoutIcon onClick={handleLogout} />
          </IconButton>
        </>
      </Box>
    </Box>
  );
};

export default Topbar;
