import { Container } from "@mui/material";
import React, { useState } from "react";

const Map = () => {
  return (
    <Container maxWidth="3xl ">
      <h1
        className="sub-heading text-secondary text-bold text-3xl mb-5"
        id="venue"
      >
        THE VENUE
      </h1>

      <div className="mapouter my-8">
        <div className="gmap_canvas">
          <iframe
            className="w-full h-96"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Rv college of engineering&t=&z=10&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
    </Container>
  );
};

export default Map;
