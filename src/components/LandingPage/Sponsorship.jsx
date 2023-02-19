import { Container } from "@mui/material";
import React from "react";
import GeneralChampionship from "../../assets/svg/gc.svg";
import SolveathonImage from "../../assets/svg/solveathon.svg";
import StrikeForceImage from "../../../public/icons/gaming.svg";
import IoTImage from "../../../public/icons/iot.svg";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import DeerajPropertyLogo from "../../assets/Sponsors/DeerajProperty.png";
import PepsiLogo from "../../assets/Sponsors/pepsi.png";

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
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
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

        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
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
      </Grid>
    </Container>
  );
}

export default Sponsorship;
