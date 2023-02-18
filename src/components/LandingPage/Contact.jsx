import { Container } from "@mui/material";
import React from "react";
import MaleAstronaut from "../../assets/svg/maleAstro.svg";
import FemaleAstronaut from "../../assets/svg/female.svg";
import Faculty1 from "../../assets/svg/faculty1.svg";
import Faculty2 from "../../assets/svg/faculty2.svg";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function Contact() {
  return (
    <Container maxWidth="xl mt-16 text-neutral-content " id="contact">
      <h1
        className="sub-heading text-secondary text-bold text-3xl "
        id="contact"
      >
        CONTACT US
      </h1>

      <h4 className="text-center my-8 text-2xl text-bold ">
        Main Co-ordinators
      </h4>

      <Grid container className="lg:px-20" spacing={6}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img src={MaleAstronaut} alt="male" className="img-contact" />
            <h3 className="text-center  text-xl text-bold">NITHIN</h3>
            <h4 className="text-center my-1 text-xl text-bold flex ">
              <EmailIcon className="mr-3" style={{ color: "#E6E6E6  " }} />
              <a href="mailto:nithin.mca21@rvce.edu.in">
                nithin.mca21@rvce.edu.in
              </a>
            </h4>
            <h4 className="text-center text-xl text-bold">
              <LocalPhoneIcon className="mr-3" style={{ color: "#E6E6E6 " }} />
              <a href="tel:+91-8310193605">+91-8310193605</a>
            </h4>{" "}
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img src={FemaleAstronaut} alt="male" className="img-contact" />
            <h3 className="text-center  text-xl text-bold">SANJANA AVADHANI</h3>
            <h4 className="text-center my-1 text-xl text-bold flex ">
              <EmailIcon className="mr-3" style={{ color: "#FFEEBE" }} />
              <a href="mailto:sanjanaga.mca21@rvce.edu.in">
                sanjanaga.mca21@rvce.edu.in
              </a>
            </h4>
            <h4 className="text-center text-xl text-bold">
              <LocalPhoneIcon className="mr-3" style={{ color: "#FFEEBE" }} />
              <a href="tel:+91 99010 91362">+91 99010 91362</a>
            </h4>
          </Box>
        </Grid>
      </Grid>

      {/* Faculty co ordinators */}

      <h4 className="text-center my-16 text-2xl text-bold ">
        Faculty Co-ordinators
      </h4>

      <Grid container className="lg:px-20 " spacing={6}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img src={Faculty1} alt="male" className="img-contact" />

            <h3 className="text-center  text-xl text-bold">
              PROF. SAVITA SHEELAVANT
            </h3>
            <h4 className="text-center my-1 text-xl text-bold flex ">
              <EmailIcon className="mr-3" style={{ color: "#E6E6E6  " }} />
              <a href="mailto:savitas.sheelavant@rvce.edu.in">
                savitas.sheelavant@rvce.edu.in
              </a>
            </h4>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img src={Faculty2} alt="male" className="img-contact" />

            <h3 className="text-center  text-xl text-bold">Dr. SAVITHA R</h3>
            <h4 className="text-center my-1 text-xl text-bold flex ">
              <EmailIcon className="mr-3" style={{ color: "#FFEEBE" }} />
              <a href="mailto:savithar@rvce.edu.in">savithar@rvce.edu.in</a>
            </h4>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
