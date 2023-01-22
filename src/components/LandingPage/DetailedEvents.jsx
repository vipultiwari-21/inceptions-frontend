import { Box } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import EventDetailList from "../../data/EventDetailList";
import Background from "../custom_styling/Background";
import ImageTemp from "../../assets/images/img.jpg";
import EventNavbar from "./EventNavbar";

const DetailedEvents = () => {
  const id = useParams();
  const [imgURL, setimgURL] = useState("");

  console.log(id);

  return (
    <div className="flex w-screen h-screen justify-center items-center overflow-hidden">
      <Background />

      <Box className="lg:bg-white w-10/12 h-5/6 flex lg:flex-row flex-col">
        <img
          src={ImageTemp}
          alt="temp"
          className="h-full w-5/12 hidden lg:block"
        />

        <Box className="h-full lg:w-7/12 ">
          <EventNavbar />

          <Box className="h-5/6 w-full p-5 lg:p-12 overflow-y-scroll">
          

          {EventDetailList.map((event) => {
            if (event.route == id.id) {
              return(
             <Box className="event-detail-container text-neutral font-bold lg:text-black text-white" key={event.id}>
             <h1 className="event-name">{event.name.toUpperCase()}</h1>
             <p className="my-8 text-justify text-md">{event.description}</p>
             <p className="my-8   ">
            
             <span className="text-xl ">Rules</span>

            <ul className="list-decimal">
            {event.rules.map((rule)=>{
              return <li>{rule}</li>
             })}
            </ul>
             </p>

             <p className="my-8">
            
             <span className="text-xl ">Requirements</span>

            <ul className="list-decimal">
            {event.requirements.map((requirement)=>{
              return <li>{requirement}</li>
             })}
            </ul>
             </p>


             <p className="my-8">
            
             <span className="text-xl ">Contact</span>

             <ul>
             <li>{event.contact.name}</li>
             <li>{event.contact.phone}</li>
             <li>{event.contact.email}</li>
             </ul>
            
             </p>


             
             </Box>
              )
            }  
          
        })}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default DetailedEvents;
