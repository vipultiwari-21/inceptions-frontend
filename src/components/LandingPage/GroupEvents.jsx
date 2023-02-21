import { Container } from "@mui/material";
import React from "react";
import GeneralChampionship from "../../assets/svg/gc.svg";
import SolveathonImage from "../../assets/svg/solveathon.svg";
import StrikeForceImage from "../../../public/icons/gaming.svg";
import IoTImage from "../../../public/icons/iot.svg";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import EventsList from "../../data/EventsList";

function GroupEvents() {
  return (
    <Container maxWidth="xl my-32 text-neutral-content " id="prize">
      <h1 className="text-center event-header text-xl lg:text-3xl text-success my-5 lg:my-8">
        Group Events (Only for BCA , MCA , BSc and MSc)
      </h1>

      <h1 className="text-center event-header text-xl lg:text-3xl text-neutral-content my-8 lg:my-8">
        Cash prize , General Championship & Exciting cash prize to be won...
      </h1>

      <Grid container spacing={6} className="justify-center">
        {EventsList.map((event) => {
          return event.eventType !== "open" ? (
            <Grid
              item
              xs={12}
              sm={3}
              md={3}
              lg={3}
              xl={3}
              key={event.id}
              className="my-16"
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <img src={event.img} alt="male" className="img-contact" />
                <h3 className="text-center text-primary  text-xl text-bold">
                  {event.name}
                </h3>
                <Link
                  className="btn btn-warning btn-outline my-3"
                  to={event.to}
                >
                  Know More
                </Link>
              </Box>
            </Grid>
          ) : null;
        })}
      </Grid>

      {/* <Box className="flex items-center justify-center my-8">
        <Link className="btn btn-outline btn-base">Register now</Link>
      </Box> */}
    </Container>
  );
}

export default GroupEvents;
