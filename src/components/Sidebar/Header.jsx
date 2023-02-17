import { Typography, Box, useTheme } from "@mui/material";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box  mb="" className="p-5 text-center lg:text-left flex justify-center items-center flex-col "
      
    >
      <Typography
        variant="h5"
        color="#e0e0e0"
        fontWeight="bold"
        sx={{ m: "0 0 5px 0"  }}
        
      >
        {title}
      </Typography>
      <Typography variant="subtitle1"  
      fontWeight="bold"
      color="#38BDF8" >
        {subtitle}
      </Typography>

      

    </Box>
  );
};

export default Header;
