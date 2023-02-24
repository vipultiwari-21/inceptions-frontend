import { Container } from "@mui/material";
import React from "react";
import GeneralChampionship from "../../assets/svg/gc.svg";
import SolveathonImage from "../../assets/svg/solveathon.svg";
import StrikeForceImage from "../../../public/icons/gaming.svg";
import IoTImage from "../../../public/icons/iot.svg";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

function Prize() {
  return (
    <Container maxWidth="xl my-16 text-neutral-content " id="prize">
      <h1 className="sub-heading text-secondary text-bold text-3xl" id="prize">
        REGISTRATION FEE
      </h1>

      <Grid container className="lg:px-20" spacing={6}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img src={GeneralChampionship} alt="male" className="img-contact" />
            <h3 className="text-center text-primary  text-xl text-bold">
              Group Events
            </h3>
            <h4 className="text-center text-warning my-1 text-xl text-bold flex ">
              ₹3540
            </h4>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img src={StrikeForceImage} alt="male" className="img-contact" />
            <h3 className="text-center text-primary  text-xl text-bold">
              Strike Force
            </h3>
            <h4 className="text-center text-warning my-1 text-xl text-bold flex ">
              ₹944
            </h4>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img src={SolveathonImage} alt="male" className="img-contact" />
            <h3 className="text-center text-primary text-xl text-bold">
              Solveathon
            </h3>
            <h4 className="text-center text-warning my-1 text-xl text-bold flex ">
              ₹236
            </h4>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img src={IoTImage} alt="male" className="img-contact" />
            <h3 className="text-center text-primary text-xl text-bold">
              Infinity & Beyond
            </h3>
            <h4 className="text-center text-warning my-1 text-xl text-bold flex ">
              ₹590
            </h4>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Prize;
