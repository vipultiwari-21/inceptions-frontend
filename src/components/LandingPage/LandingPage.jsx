import React, { useState, useEffect } from "react";
import Background from "../custom_styling/Background";
import Navbar from "./Navbar";

import About from "./About";
import Container from "@mui/material/Container";
import Map from "./Map";
import Contact from "./Contact";

import Box from "@material-ui/core/Box";
import Footer from "./Footer";
import Banner from "./Banner";
import Events from "../LandingPage/Events";

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

          <Events />

          <Map />

          <Contact />
        </div>
      </Container>

      <Footer />
    </div>
  );
}

export default LandingPage;
