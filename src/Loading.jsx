import { Box } from "@mui/system";
import React from "react";
import LoadingImage from './assets/loading/loading.svg'

function Loading() {
  const messageArray = [
    "Hold on, almost there.",

    "Loading... just a moment.",

    "Please wait, we're working on it.",

    "Just a sec, we'll be right there.",

    "Hang tight, we're almost done.",

    "Loading... don't go anywhere.",

    "Working on it, please wait.",

    "Just a little longer, we promise it'll be worth it.",

    "Please hold on, we're doing our thing.",

    "Loading... thanks for your patience.",
  ];

  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
   <img src={LoadingImage} />
      <h2 className="text-center text-2xl text-warning">
       {messageArray[Math.floor(Math.random()*10)]}
      </h2>
    </Box>
  );
}

export default Loading;
