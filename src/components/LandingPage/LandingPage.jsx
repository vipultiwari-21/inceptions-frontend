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

          <div className="event my-8  " id="events">
            <h1 className="sub-heading text-secondary text-bold text-3xl ">
              EVENTS
            </h1>

            <OpenEvents />

            <GroupEvents />
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
