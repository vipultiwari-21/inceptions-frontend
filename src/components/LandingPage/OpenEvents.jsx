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

function OpenEvents() {
  return (
    <Container maxWidth="xl my-16 text-neutral-content " id="prize">
      <h1 className="text-center event-header text-xl lg:text-3xl text-success my-5 lg:my-8">
        Open Events (For all branches of UG & PG)
      </h1>

      <h1 className="text-center event-header text-xl lg:text-3xl text-neutral-content my-5 lg:my-8">
        Exciting cash prize to be won
      </h1>

      <Grid container className="lg:px-20" spacing={6}>
        {EventsList.map((event) => {
          return event.eventType == "open" ? (
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4} key={event.id}>
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
    </Container>
  );
}

export default OpenEvents;
