import React from "react";
import { Link } from "react-router-dom";
import EventsList from "../../data/EventsList";

function Events() {
  return (
    <div className="event my-8  " id="events">
      <h1 className="sub-heading text-secondary text-bold text-3xl ">EVENTS</h1>
      {EventsList.map((data) => (
        <div
          id={data.id}
          className={`event-box p-5`}
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            margin: "2rem auto",
            textAlign: "center",
          }}
        >
          <div className="lg:w-1/2 sm:w-3/4 ">
            <h1
              className={`text-3xl my-5 ${data.text} text-center lg:text-left `}
            >
              {data.name.toUpperCase()}
            </h1>
            <p
              className="text-xl text-neutral-content text-justify lg:text-justify"
              style={{ lineHeight: "1.5" }}
            >
              {data.description}
            </p>
            <Link to="" className={`btn ${data.color} btn-wide mt-8 `}>
              Details
            </Link>
          </div>
          <img src={data.img} alt={data.name} style={{ width: "20rem" }} />
        </div>
      ))}
    </div>
  );
}

export default Events;
