import React from 'react'
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import HomeSvg from "../../assets/svg/home-banner.svg";
import Countdown from "./Countdown";
import { Container,Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';


function Banner() {
  return (
    <div>
   
    <Container maxWidth="xl mt-32 text-neutral-content">
    
    <Box className="flex justify-around  items-center flex-col-reverse lg:flex-row " >
    <div className='event-name '>
    <h1 className="text-4xl  text-primary headings sm:text-4xl md:text-6xl lg:text-7xl title text-center lg:text-left">EXCEPTIONS
                <br /> 2023
              </h1>

               {/* Tagline */}
    <p className="text-neutral-content   sm:text-xl text-2xl text-center lg:text-left  font-extrabold">
    UNLEASH THE EXCEPTION IN YOU
  </p>

   {/* Register btn */}
   <div className="w-100 flex justify-center align-center lg:justify-start">
   <Link
     to="/register"
     className="btn btn-wide align-center btn-outline btn-warning my-8 btn-md lg:btn-lg"
   >
     JOIN US NOW
   </Link>
 </div>


  {/* Countdown */}

  <h3 className="text-xl lg:text-2xl text-center lg:text-left my-3  uppercase font-extrabold mt-8 text-neutral-content sm:text-neutral-content">
    Ready to take off in:
  </h3>
  <div className= 'ml-12 md:ml-32 lg:ml-0'>
  <Countdown />
  </div>



    </div>

    

    <div className='banner-img '>
    <img src={HomeSvg} style={{ width: "100%", maxWidth: "25rem" }} />

    </div>
    </Box>

    <Box >
   

 


    </Box>

    </Container>

    </div>
  )
}

export default Banner