import { Box } from "@mui/system";
import React from "react";
import Background from "./components/custom_styling/Background";
import ImageBackground from "./assets/images/error.png";
import { Link } from "react-router-dom";

function Error() {
  const jokesArray = [
    " The astronaut must have gotten lost in cyberspace!",
    "Looks like the astronaut took a wrong turn at the galaxy!",
    "The astronaut must have accidentally landed on the 404 error page!",
    "The astronaut is lost in space and now he's lost in the digital world too!",
    "The astronaut was searching for a new planet, but instead found a 404 error!",
    "The astronaut was supposed to land on the homepage, but ended up on the 404 page instead!",
    "The astronaut thought he was in the wrong galaxy, but it turns out it was just a broken link!",
    "The astronaut is lost in space and on the web, talk about a double dose of confusion!",
    "The astronaut is searching for the missing website, but it seems like it's lost in the vastness of cyberspace!",
    "The astronaut finally found a signal, but it led to a 404 error instead of home",
    "The astronaut thought he was being hailed by an extraterrestrial, but it was just a 404 error page!",
  ];

  return (
    <Box className="flex items-center justify-center h-screen w-screen flex-col p-8 text-center">
      <Background />
      <h1 className="text-8xl error-404 my-8 text-neutral-content">Uh,oh</h1>
      <p className="text-3xl font-bold">
        {jokesArray[Math.floor(Math.random() * 10)]}
      </p>

      <img src={ImageBackground} />

      <Link to="/" className="btn btn-outline btn-warning">
        Back Home
      </Link>
    </Box>
  );
}

export default Error;
