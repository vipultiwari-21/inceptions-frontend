import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import HomeSvg from "../../assets/svg/home-banner.svg";
import Countdown from "./Countdown";
import { Container, Box } from "@mui/material";
import VBLogo from "../../assets/svg/VB.svg";
import PepsiLogo from "../../assets/svg/pepsi.png";
import MainLogo from "../../assets/svg/mainLogo.png";

function Banner() {
  return (
    <div>
      <Container maxWidth="xl mt-32 text-neutral-content">
        <Box className="flex justify-around  items-center flex-col-reverse lg:flex-row ">
          <div className="event-name ">
            <div className=" text-center lg:text-left">
              <div className="text-center lg:text-left mb-3 text-xl lg:text-2xl text-warning main-sponsors">
                <Box
                  className="flex justify-center lg:justify-start items-center items-center my-3"
                  style={{ width: "100%" }}
                >
                  <img
                    src={PepsiLogo}
                    alt="pepsi logo"
                    style={{ width: "50px" }}
                  />
                  <img
                    src={VBLogo}
                    alt="varun bewerages logo"
                    style={{ width: "50px", marginLeft: "15px" }}
                  />
                </Box>

                <h6 className="lg:ml-3">Presents</h6>
              </div>

              {/*
             <div className="text-4xl headings  text-primary  sm:text-4xl md:text-6xl lg:text-7xl title ">
                {" "}
                  <img
                  src={MainLogo}
                  alt="main logo"
                  style={{ width: "800px" }}
                /> 
              </div>
              
            */}

              <h3 className="text-4xl headings  text-primary  sm:text-4xl md:text-6xl lg:text-7xl title ">
                {" "}
                EXCEPTIONS
                <br /> 2023
              </h3>

              {/* Tagline */}
              <p className="text-neutral-content   sm:text-xl text-2xl text-center lg:text-left  font-extrabold">
                UNLEASH THE EXCEPTION IN YOU
              </p>
            </div>

            {/* Register btn */}

            {/* Countdown */}

            <h3 className="text-xl lg:text-2xl text-center lg:text-left my-3 text-warning uppercase font-extrabold mt-8 "></h3>
            <div className="ml-12 md:ml-32 lg:ml-0 text-2xl font-bold text-warning">
              The party's over! We hope you had a blast
            </div>
          </div>

          <div className="banner-img ">
            <img src={HomeSvg} style={{ width: "100%", maxWidth: "25rem" }} />
          </div>
        </Box>

        <Box></Box>
      </Container>
    </div>
  );
}

export default Banner;
