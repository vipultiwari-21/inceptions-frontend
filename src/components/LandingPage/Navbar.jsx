import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/exceptions/png/E1.png";
import RvceLogo from "/web_logo.png";
import useMediaQuery from "@mui/material/useMediaQuery";

function Navbar() {
  const isNonMobile = useMediaQuery("(max-width:700px)");

  return (
    <div className="sticky navbar bg-base-100 pb-5  ">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden text-neutral-content"
          >
            <svg
              viewBox="0 0 100 80"
              width="40"
              height="40"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="#B3CCF5"
              stroke="currentColor"
              style={{ marginTop: "6px" }}
            >
              <rect width="100" height="10" rx="15"></rect>
              <rect y="30" width="100" height="10" rx="15"></rect>
              <rect y="60" width="100" height="10" rx="15"></rect>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>

            <li>
              <a href="#sponsors">Sponsors</a>
            </li>

            <li>
              <a href="#prize">Event Fee</a>
            </li>
            <li>
              <a href="#contact">Contact us</a>
            </li>
            <li>
              <Link to="/schedule">Schedule</Link>
            </li>
            <li>
              <Link to="/rules">General Rules</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>

        <a>
          <img
            src={RvceLogo}
            style={{
              maxWidth: !isNonMobile ? "60px" : "40px",
              marginTop: "5px",
            }}
            className="rvce_logo"
          />
        </a>

        {/*<img src={Logo} style={{width:'100px',maxWidth:'100px'}} className="logo" />*/}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl text-neutral-content">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="#sponsors">Sponsors</a>
          </li>

          <li>
            <a href="#venue">Venue</a>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
          <li>
            <a href="#contact">Contact us</a>
          </li>

          <li>
            <a href="#prize">Event Fee</a>
          </li>
          <li>
            <Link to="/rules">General Rules</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <img
              src={Logo}
              className="logo"
              style={{ width: "100px", maxWidth: "100px" }}
            />
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/*
      <Link to="/register" className="btn btn-primary btn-xs  lg:btn-md">
          Register
        </Link>
      */}
      </div>
    </div>
  );
}

export default Navbar;
