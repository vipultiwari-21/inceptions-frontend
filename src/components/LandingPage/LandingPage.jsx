import React, { useState, useEffect } from "react";
import Background from "../custom_styling/Background";
import Navbar from "./Navbar";
import Prize from "./Prize";
import About from "./About";
import Container from "@mui/material/Container";
import Map from "./Map";
import Contact from "./Contact";

import Box from "@material-ui/core/Box";
import Footer from "./Footer";
import Banner from "./Banner";
import Events from "../LandingPage/Events";
import Sponsorship from "./Sponsorship";
import OpenEvents from "./OpenEvents";
import GroupEvents from "./GroupEvents";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <Container maxWidth="xl">
        <div className="landing-page text-secondary font-bold loading">
          <header>
            <Navbar />
            <Background />
          </header>
          <Banner />
          <About />
          <Sponsorship />

          <div className="event" id="events">
            <h1 className="sub-heading text-secondary text-bold text-3xl ">
              EVENTS
            </h1>

            <OpenEvents />

            <GroupEvents />

            <Box className="flex justify-center items-center flex-col">
              <p className="event-details text-xl my-5 text-neutral-content">
                Time is ticking on and spaceship is about to launch
              </p>
              <Link
                className="btn btn-warning btn-wide btn-outline "
                to="/register"
              >
                Register Now
              </Link>
            </Box>
          </div>

          {/*<Events /> */}
          <Prize />
          <Map />
          <Contact />
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default LandingPage;
