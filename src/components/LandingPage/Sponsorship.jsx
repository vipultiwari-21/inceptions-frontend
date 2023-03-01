import { Container } from "@mui/material";
import React from "react";
import GeneralChampionship from "../../assets/svg/gc.svg";
import SolveathonImage from "../../assets/svg/solveathon.svg";
import StrikeForceImage from "../../../public/icons/gaming.svg";
import IoTImage from "../../../public/icons/iot.svg";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import DeerajPropertyLogo from "../../assets/Sponsors/DeerajProperty.png";
import PepsiLogo from "../../assets/Sponsors/pepsi.svg";
import KWLogo from "../../assets/Sponsors/kw.svg";
import VarunBeweregesLogo from "../../assets/Sponsors/VB.svg";
import PrachiDentalClinicLogo from "../../assets/Sponsors/prachi.svg";
import SriLakshmiConstructor from "../../assets/Sponsors/srilakshmi.svg";
import KwalityWalls from "../../assets/Sponsors/kw.svg";
import Sp from "../../assets/Sponsors/sp.png";

function Sponsorship() {
  return (
    <Container maxWidth="xl my-16 text-neutral-content " id="sponsors">
      <h1
        className="sub-heading text-secondary text-bold text-3xl"
        id="sponsors"
      >
        OUR SPONSORS
      </h1>

      <Grid container className="lg:p-20 " spacing={6}>
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img
              src={PepsiLogo}
              alt="male"
              className="img-contact"
              style={{ width: "150px", height: "150px" }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img
              src={VarunBeweregesLogo}
              alt="male"
              className="img-contact"
              style={{ width: "150px", height: "150px" }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img
              src={DeerajPropertyLogo}
              alt="male"
              className="img-contact"
              style={{ width: "150px", height: "150px" }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img
              src={PrachiDentalClinicLogo}
              alt="male"
              className="img-contact"
              style={{ width: "150px", height: "150px" }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img
              src={SriLakshmiConstructor}
              alt="male"
              className="img-contact"
              style={{ width: "150px", height: "150px" }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img
              src={KwalityWalls}
              alt="male"
              className="img-contact"
              style={{ width: "150px", height: "150px" }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img
              src={Sp}
              alt="male"
              className="img-contact"
              style={{ width: "200px", height: "150px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Sponsorship;
