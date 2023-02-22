import { Box } from "@mui/material";
import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import EventDetailList from "../../data/EventDetailList";
import { useMediaQuery } from "@material-ui/core";
import Solvathon from "/scheduleIcons/zest.svg";
import ResponsiveAppBar from "./EventNavbar";

const DetailedEvents = () => {
  const isNonMobile = useMediaQuery("(max-width:700px)");
  const { id } = useParams();

  const selectedEvent = EventDetailList.filter((event) => {
    return event.route == id;
  });

  return (
    <div className="flex w-screen py-8 lg:h-screen justify-center items-center event-details ">
      <Box
        className="lg:w-10/12  w-full  lg:bg-neutral  flex lg:flex-row flex-col"
        style={{ height: "700px" }}
      >
        {selectedEvent.length > 0
          ? selectedEvent.map((event) => {
              if (event.route == id) {
                return (
                  <img
                    key={event.id}
                    style={{ objectFit: "cover" }}
                    src={event.img}
                    alt="Event Image"
                    className="h-full w-5/12 hidden lg:block"
                  />
                );
              }
            })
          : null}

        <Box
          className=" lg:w-7/12 "
          style={{ height: "100%", overflowY: !isNonMobile ? "scroll" : "" }}
        >
          <Box className=" w-full p-5 lg:p-12 ">
            {selectedEvent.length > 0 ? (
              selectedEvent.map((event) => {
                if (event.route == id) {
                  return (
                    <Box
                      className="event-detail-container text-neutral font-bold flex flex-col justify-center w-full items-center text-white"
                      key={event.id}
                    >
                      <Box className="w-full flex justify-center items-center">
                        <ResponsiveAppBar />
                      </Box>

                      <h4 className="event-name text-3xl lg:text-5xl py-3 text-primary">
                        {event.name.toUpperCase()}
                      </h4>
                      <img src={event.svg} style={{ width: "150px" }} />
                      {event.prize ? (
                        <div className="my-8 w-full ">
                          <span className="text-xl text-center text-secondary ">
                            Prize details
                          </span>

                          <ul className="list-none text-justify text-xl flex flex-col w-full items-center text-warning justify-evenly lg:flex-row ">
                            {event.prize.map((val, index) => {
                              return (
                                <li key={index} className="my-3">
                                  {val.stand} :{val.prize}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ) : null}
                      <p className="my-5 text-justify text-md flex flex-col text-center leading-loose">
                        {event.description}
                      </p>
                      {event.problemStatement ? (
                        <>
                          <span className="text-xl text-secondary ">
                            Problem statement
                          </span>

                          <p className="my-8 text-justify text-md ">
                            {event.problemStatement}
                          </p>
                        </>
                      ) : null}
                      {event.rules ? (
                        <div className="my-8 ">
                          <span className="text-xl text-secondary ">Rules</span>

                          <ul className="list-disc text-left my-5 ">
                            {event.rules.map((rule) => {
                              return <li className="my-3">{rule}</li>;
                            })}
                          </ul>
                        </div>
                      ) : null}
                      {event.mainNotice ? (
                        <div className="my-8 ">
                          <span className="text-xl text-warning ">
                            Important Note
                          </span>

                          <ul className="list-disc text-left my-5 ">
                            {event.mainNotice.map((notice) => {
                              return <li className="my-3">{notice}</li>;
                            })}
                          </ul>
                        </div>
                      ) : null}
                      {event.requirements ? (
                        <div className="my-8 w-full ">
                          <span className="text-xl text-secondary ">
                            Requirements
                          </span>

                          <ul className="list-disc text-left my-5">
                            {event.requirements.map((requirement) => {
                              return <li className="my-3">{requirement}</li>;
                            })}
                          </ul>
                        </div>
                      ) : null}
                      {event.contact ? (
                        <div className="my-8">
                          <span className="text-xl text-secondary">
                            Contact
                          </span>

                          <div className="flex flex-col justify-around items-center  w-full lg:flex-row ">
                            {event.contact.map((contacts) => {
                              return (
                                <ul className="my-3 mx-8">
                                  <li className="text-warning">
                                    {contacts.type}
                                  </li>
                                  <li>{contacts.name}</li>
                                  <li>{contacts.phone}</li>
                                  <li>{contacts.email}</li>
                                </ul>
                              );
                            })}
                          </div>
                        </div>
                      ) : null}
                    </Box>
                  );
                }
              })
            ) : (
              <Navigate to="/" />
            )}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default DetailedEvents;
