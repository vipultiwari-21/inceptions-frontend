import React from "react";
import { Box } from "@mui/material";
import GcImg from "../../assets/svg/gc.svg";
import OpenImg from "../../assets/svg/open.svg";
import Background from "../custom_styling/Background";
import EventNavbar from "./EventNavbar";

function Rules() {
  return (
    <Box className="flex w-full justify-center items-center  flex-col py-8 event-header">
      <Background />

      <EventNavbar />

      <h1 className="text-3xl text-primary font-bold ">GENERAL RULES</h1>

      <Box>
        <Box className="flex flex-col lg:flex-row w-full justify-evenly items-center ">
          <Box className="flex justify-center items-center">
            <img src={GcImg} style={{ width: "500px" }} />
          </Box>

          <Box className="flex justify-center items-center flex-col p-8">
            <h1 className="text-2xl text-warning font-bold text-center lg:text-left  w-full">
              Group Championship
            </h1>
            <ul className="list-disc text-neutral-content font-bold text-xl text-justify leading-10 ">
              <li>Any number of teams can participate from a college.</li>
              <li>
                Teams need to remember their allotted team names till the end of
                the fest.
              </li>
              <li>The Schedule will be strictly followed.</li>
              <li>ID card provided must be kept appropriately.</li>
              <li>The judge’s decision will be final.</li>
              <li>Carry your college ID cards for verification</li>
              <li>
                There is no Restriction on Number of teams participating from a
                college.
              </li>
              <li>
                The students participating must report to their respective
                events on time, <br /> NO DELAY WILL BE ENTERTAINED.
              </li>
            </ul>
          </Box>
        </Box>

        <Box className="flex flex-col lg:flex-row w-full justify-evenly items-center my-8">
          <Box className="flex justify-center items-center">
            <img src={OpenImg} style={{ width: "500px" }} />
          </Box>

          <Box className="flex justify-center items-center flex-col p-8">
            <h1 className="text-2xl text-warning font-bold text-center lg:text-left   w-full">
              Open Events
            </h1>
            <ul className=" list-disc  text-neutral-content font-bold text-xl text-justify leading-10">
              <li>Open for all UG & PG.</li>
              <li>
                Participants from the group events cannot participate in the
                open events.
              </li>
              <li>
                Open events will not be considered for General Championships.
              </li>
              <li>
                Students need to report to their respective events on time.
              </li>
              <li>No delay will be entertained.</li>
              <li>For Gaming students need to carry their own laptops.</li>
              <li>
                [with the gaming set-up pre-installed, with all accessories]
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Rules;
