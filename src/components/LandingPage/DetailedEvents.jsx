import { Box } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import EventDetailList from "../../data/EventDetailList";
import Background from "../custom_styling/Background";
import ImageTemp from "../../assets/eventdetails/coding.jpg";
import EventNavbar from "./EventNavbar";

const DetailedEvents = () => {
  const { id } = useParams();

  return (
    <div className="flex w-screen h-screen justify-center items-center ">
      <Background />

      <Box className="bg-neutral  lg:w-10/12 lg:h-5/6 w-full h-full px-3 lg:p-0  flex lg:flex-row flex-col">
      {EventDetailList.map((event) => {
        if (event.route == id) {
          
          return (
            <img
          src={event.img}
          alt="Event Image"
          className="h-full w-5/12 hidden lg:block"
        />
          )
        }})
      }

        <Box className="h-full lg:w-7/12 ">
          <EventNavbar />

          <Box className="h-5/6 w-full p-5 lg:p-12 overflow-y-scroll">
            {EventDetailList.map((event) => {
              if (event.route == id) {
                return (
                  <Box
                    className="event-detail-container text-neutral font-bold  text-white"
                    key={event.id}
                  >
                    <h4 className="event-name text-3xl lg:text-5xl text-primary">
                      {event.name.toUpperCase()}
                    </h4>
                    <p className="my-8 text-justify text-md ">
                      {event.description}
                    </p>


                    {event.problemStatement ? (
                      <>
                      <span className="text-xl text-secondary ">Problem statement</span>

                      <p className="my-8 text-justify text-md ">
                      {event.problemStatement}
                    </p>
                    </>
                    ) : null}

                    {event.rules ? (
                      <p className="my-8 ">
                        <span className="text-xl text-secondary ">Rules</span>

                        <ul className="list-disc text-left">
                          {event.rules.map((rule) => {
                            return <li>{rule}</li>;
                          })}
                        </ul>
                      </p>
                    ) : null}

                    {event.requiremetns ? (
                      <p className="my-8">
                        <span className="text-xl text-secondary">
                          Requirements
                        </span>

                        <ul className="list-disc">
                          {event.requirements.map((requirement) => {
                            return <li>{requirement}</li>;
                          })}
                        </ul>
                      </p>
                    ) : null}

                    {event.contact ? (
                      <p className="my-8">
                        <span className="text-xl text-secondary">Contact</span>

                      <div className="flex  flex-col justify-evenly items-center w-full lg:flex-row ">
                      { event.contact.map((contacts)=>{
                        return <ul className="my-3">
                            <li className="text-warning">{contacts.type}</li>
                          <li>{contacts.name}</li>
                          <li>{contacts.phone}</li>
                          <li>{contacts.email}</li>
                        </ul>
                       })}
                      </div>
                       
                      </p>
                    ) : null}
                  </Box>
                );
              }
            })}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default DetailedEvents;
