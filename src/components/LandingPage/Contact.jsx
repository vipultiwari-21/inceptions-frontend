import { Container } from "@mui/material";
import React from "react";
import MaleAstronaut from "../../assets/svg/maleAstro.svg";
import MaleAstronaut2 from "../../assets/svg/male2.svg";
import FemaleAstronaut from "../../assets/svg/female.svg";
import FemaleAstronaut2 from "../../assets/svg/female2.svg";
import Faculty1 from "../../assets/svg/faculty1.svg";
import Faculty2 from "../../assets/svg/faculty2.svg";
import Faculty3 from "../../assets/svg/faculty3.svg";
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

      <h4 className="text-center my-16 text-2xl text-bold ">
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
            <h3 className="text-center  text-xl text-bold">Vipul Tiwari</h3>
            <h4 className="text-center my-1 text-xl text-bold flex ">
              <EmailIcon className="mr-3" style={{ color: "#E6E6E6  " }} />
              <a href="mailto:vipultiwari.mca21@rvce.edu.in">
                vipultiwari.mca21@rvce.edu.in
              </a>
            </h4>
            <h4 className="text-center text-xl text-bold">
              <LocalPhoneIcon className="mr-3" style={{ color: "#E6E6E6 " }} />
              <a href="tel:+91-8310193605">+91 8282893303</a>
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
            <h3 className="text-center  text-xl text-bold">ABC</h3>
            <h4 className="text-center my-1 text-xl text-bold flex ">
              <EmailIcon className="mr-3" style={{ color: "#E6E6E6" }} />
              <a href="mailto:abc.mca21@rvce.edu.in">
                abc.mca21@rvce.edu.in
              </a>
            </h4>
            <h4 className="text-center text-xl text-bold">
              <LocalPhoneIcon className="mr-3" style={{ color: "#E6E6E6" }} />
              <a href="tel:+91 99010 91362">+91 0000000000</a>
            </h4>
          </Box>
        </Grid>
      </Grid>

      {/* Overall event co ordinators */}

      <h4 className="text-center my-16 text-2xl text-bold ">
        Event Co-ordinators
      </h4>

      <Grid container className="lg:px-20" spacing={6}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img src={MaleAstronaut2} alt="male" className="img-contact" />
            <h3 className="text-center  text-xl text-bold">Dummy </h3>
            <h4 className="text-center my-1 text-xl text-bold flex ">
              <EmailIcon className="mr-3" style={{ color: "#E6E6E6  " }} />
              <a href="mailto:dummy.mca21@rvce.edu.in">
                dummy.mca21@rvce.edu.in
              </a>
            </h4>
            <h4 className="text-center text-xl text-bold">
              <LocalPhoneIcon className="mr-3" style={{ color: "#E6E6E6 " }} />
              <a href="tel:+91-8884601647">+91 9999999999</a>
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
            <img src={FemaleAstronaut2} alt="male" className="img-contact" />
            <h3 className="text-center  text-xl text-bold">Dummy name</h3>
            <h4 className="text-center my-1 text-xl text-bold flex ">
              <EmailIcon className="mr-3" style={{ color: "#E6E6E6" }} />
              <a href="mailto:dummy_name.mca21@rvce.edu.in">
                dummy_name.mca21@rvce.edu.in
              </a>
            </h4>
            <h4 className="text-center text-xl text-bold">
              <LocalPhoneIcon className="mr-3" style={{ color: "#E6E6E6" }} />
              <a href="tel:+91 99010 91362">+91 8282893303</a>
            </h4>
          </Box>
        </Grid>
      </Grid>

      {/* Faculty co ordinators */}

      <h4 className="text-center my-16 text-2xl text-bold ">
        Faculty Co-ordinators
      </h4>

      <Grid container className="lg:px-20 " spacing={6}>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img src={Faculty1} alt="male" className="img-contact" />

            <h3 className="text-center  text-xl text-bold">
              Prof. SAVITA SHEELAVANT
            </h3>
            <h4 className="text-center my-1 text-xl text-bold flex ">
              <EmailIcon className="mr-3" style={{ color: "#E6E6E6  " }} />
              <a href="mailto:ss.sheelavant@rvce.edu.in">
                ss@rvce.edu.in
              </a>
            </h4>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img src={Faculty3} alt="male" className="img-contact" />

            <h3 className="text-center  text-xl text-bold">
              {" "}
              Dr. ANDHE DHARANI
            </h3>
            <h4 className="text-center my-1 text-xl text-bold flex ">
              <EmailIcon className="mr-3" style={{ color: "#E6E6E6" }} />
              <a href="mailto:ad@rvce.edu.in">
                ad@rvce.edu.in
              </a>
            </h4>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img src={Faculty2} alt="male" className="img-contact" />

            <h3 className="text-center  text-xl text-bold">Dr. SAVITHA R</h3>
            <h4 className="text-center my-1 text-xl text-bold flex ">
              <EmailIcon className="mr-3" style={{ color: "#E6E6E6" }} />
              <a href="mailto:sr@rvce.edu.in">sr@rvce.edu.in</a>
            </h4>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
