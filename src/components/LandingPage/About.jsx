import { Container, Box } from "@mui/material";
import React from "react";
import HomeSvg from "../../assets/svg/taken.svg";
import ExceptionsAbout from "../../assets/svg/exceptions-about.svg";
import Grid from "@mui/material/Grid";

function About() {
  return (
    <>
      <Container maxWidth=" my-16 text-neutral-content" id="about">
        <h1 className="sub-heading text-secondary text-bold text-3xl ">
          ABOUT RVCE
        </h1>

        {/*
     <Grid container className="lg:px-20" spacing={6}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}  >
        <img src={HomeSvg} style={{ width: "500px" }} />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
        <p className="text-neutral-content  text-2xl text-bold leading-loose text-justify text-neutral-content md:text-2xl ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum ornare ligula id justo auctor, vitae interdum mauris
        porttitor. Nulla non dui rutrum, maximus lectus ut, mattis felis.
        Maecenas dapibus purus eget dapibus rutrum. Sed vel enim sed augue
        ornare commodo. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Mauris libero nisi,
        malesuada nec interdum vel,
      </p>
        </Grid>
      </Grid>
    */}

        <Box className="flex justify-center items-center flex-col lg:flex-row  ">
          <div className="w-3/4">
            <img src={HomeSvg} style={{ width: "100%", maxWidth: "35rem" }} />
          </div>

          <div className="w-1/2" style={{ width: "100%" }}>
            <p
              className="text-neutral-content  text-2xl text-bold  text-justify text-neutral-content 
    md:text-2xl event-details"
              style={{ width: "100%" }}
            >
              R V College of Engineering holds its head high as one of the top
              ten self-financing colleges in India. The Master of Computer
              Applications Department of RVCE was established in the year 1997
              and is affiliated to Visvesvaraya Technological University (VTU),
              Belagavi. The department is a recognized VTU research center. The
              MCA course is two year Post-Graduate program in Computer
              Applications. The MCA Program of RVCE has been accredited by
              National Board of Accreditation, New Delhi. <br />
              <br /> Exposed to quantitative and qualitative analysis skills
              which are inbuilt in the curriculum. Appropriate training is
              provided to the students to equip themselves to be innovative and
              creative. The graduates of this discipline also possess adequate
              analytical, leadership and software skills. The MCA department of
              RVCE maintains a record of 100% placements every academic year.
            </p>
          </div>
        </Box>
      </Container>

      <Container maxWidth=" my-16 text-neutral-content" id="about">
        <h1 className="sub-heading text-secondary text-bold text-3xl ">
          ABOUT INCEPTIONS
        </h1>

        {/*
<Grid container className="lg:px-20" spacing={6}>
  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}  >
  <img src={HomeSvg} style={{ width: "500px" }} />
  </Grid>

  <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
  <p className="text-neutral-content  text-2xl text-bold leading-loose text-justify text-neutral-content md:text-2xl ">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Vestibulum ornare ligula id justo auctor, vitae interdum mauris
  porttitor. Nulla non dui rutrum, maximus lectus ut, mattis felis.
  Maecenas dapibus purus eget dapibus rutrum. Sed vel enim sed augue
  ornare commodo. Vestibulum ante ipsum primis in faucibus orci
  luctus et ultrices posuere cubilia curae; Mauris libero nisi,
  malesuada nec interdum vel,
</p>
  </Grid>
</Grid>
*/}

        <Box className="flex justify-center items-center flex-col lg:flex-row  ">
          <div className="w-1/2" style={{ width: "100%" }}>
            <p
              className="text-neutral-content  text-2xl text-bold  text-justify text-neutral-content 
md:text-2xl event-details"
              style={{ width: "100%" }}
            >
              Exception is a national level legacy tech fest that is being
              organized since early 2004 the fest has been a great platform to
              the technology enthusiasts and the giants of this domain, the fest
              encompasses of various technical & non-technical event that has
              been keeping the audiences on the verge of edge . As every good
              festival has a theme so does ours and the theme for this year is
              "Area59" <br /> Why? <br /> The vast and unexplored amount of
              space is a direct parallel to a human's capability and caliber to
              explore and gain insight and enlighten themselves with the
              knowledge and give back to the humankind.
            </p>
          </div>

          <div className="w-3/4">
            <img
              src={ExceptionsAbout}
              style={{ width: "100%", maxWidth: "35rem" }}
            />
          </div>
        </Box>
      </Container>
    </>
  );
}

export default About;
