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

          <div className="special-case-element">
            <svg className="Banner2" height="200" width="300">
              <polygon
                className="BannerHolderEx2"
                points="5 31, 5 185, 410 205, 430 10"
                style={{ opacity: 0.2, fill: "#000" }}
              />
              <polygon
                className="BannerHolderEx2"
                points="5 31, 5 180, 410 200, 430 10"
                style={{ opacity: 1, fill: "#0ADBB3" }}
              />

              <text className="SalesEx2" fontFamily="Viga" fontSize="65">
                <tspan
                  fill="#000"
                  opacity="0.8"
                  x="43"
                  y="60"
                  fontFamily="Viga"
                  fontSize="30"
                >
                  SOLVEATHON
                </tspan>
              </text>

              <text
                className="ShopNowEx2"
                fontFamily="Josefin Sans"
                fontWeight="700"
                fontSize="20"
                fill="#fff"
              >
                <tspan fill="#000" x="65" y="100">
                  1st Price : 15000
                </tspan>
                <br />
              </text>


              <text
                className="ShopNowEx3"
                fontFamily="Josefin Sans"
                fontWeight="700"
                fontSize="20"
                fill="#fff"
              >
                <tspan fill="#000" x="65" y="130">
                  2nd Price : 10000
                </tspan>
                <br />
              </text>


              <text
              className="ShopNowEx3"
              fontFamily="Josefin Sans"
              fontWeight="700"
              fontSize="20"
              fill="#fff"
            >
              <tspan fill="#000" x="65" y="160">
                3rd Price : 5000
              </tspan>
              <br />
            </text>


            </svg>
          </div>

          <Events />

          {/* <Sponsorship /> */}

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
