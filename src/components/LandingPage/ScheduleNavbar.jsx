import React from "react";
import { Link } from "react-router-dom";
import ExceptionsLogo from "../../assets/exceptions/png/E.png";

function ScheduleNavbar() {
  return (
    <div className="navbar bg-base-100 sticky p-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#solveathon">Solveathon</a>
            </li>

            <li>
              <a href="#strikeforce">Strike Force</a>
            </li>
            <li>
              <a href="#infinityandbeyond">Infinity and Beyond</a>
            </li>
            <li>
              <a href="#gengeeks">Gen Geeks</a>
            </li>
            <li>
              <a href="#bigbang">Big Bang</a>
            </li>
            <li>
              <a href="#zest">Zest</a>
            </li>
            <li>
              <a href="#gravity">Gravity</a>
            </li>
            <li>
              <a href="#constellation">Constellation</a>
            </li>
            <li>
              <a href="#nebulax">Nebula X</a>
            </li>
            <li>
              <a href="#mysteryevent">Mystery Event</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl ">
          <img src={ExceptionsLogo} style={{ width: "100px" }} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold text-neutral-content ">
          <li>
            <a href="#solveathon">Solveathon</a>
          </li>

          <li>
            <a href="#strikeforce">Strike Force</a>
          </li>
          <li>
            <a href="#infinityandbeyond">Infinity and Beyond</a>
          </li>
          <li>
            <a href="#gengeeks">Gen Geeks</a>
          </li>
          <li>
            <a href="#bigbang">Big Bang</a>
          </li>
          <li>
            <a href="#zest">Zest</a>
          </li>
          <li>
            <a href="#gravity">Gravity</a>
          </li>
          <li>
            <a href="#constellation">Constellation</a>
          </li>
          <li>
            <a href="#nebulax">Nebula X</a>
          </li>
          <li>
            <a href="#mysteryevent">Mystery Event</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/" className="btn">
          Home
        </Link>
      </div>
    </div>
  );
}

export default ScheduleNavbar;
