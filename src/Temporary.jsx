import { Box } from "@mui/material";
import React from "react";
import Exception from "../src/assets/exceptions/png/E1.png";
import { Link } from "react-router-dom";
import Background from "./components/custom_styling/Background";

function Temporary() {
  return (
    <>
      <Background />
      <Box className="flex flex-col w-screen h-screen justify-center items-center">
        <img src={Exception} className="w-32 lg:w-48"></img>
        <h1 className="sub-heading text-3xl text-center text-primary sm:text-6xl border-none">
          Exceptions <br />
          2023
        </h1>
        <h4 className=" text-xl sm:text-md  text-center font-bold lg:mt-5 md:mt-5 ">
          Oops... our developers are busy in completing their assignments and
          presentations.
        </h4>

        <h3 className=" text-xl sm:text-none  pt-8  text-center font-bold  text-left text-primary">
          {" "}
          Exceptions will go live soon!{" "}
        </h3>
        <Link to="/" className="btn btn-warning btn-outline my-12 btn-wide">
          Back home
        </Link>
      </Box>
    </>
  );
}

export default Temporary;
