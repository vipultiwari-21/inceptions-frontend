import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import solveathonImage from "../../assets/svg/solveathon.svg";
import TrophyImage from "../../assets/images/trophy.png";
import "./textAnimation.css";

function Solvathon() {
  return (
    <Box className="flex flex-center items-center w-full ">
      <div
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
            className={`text-3xl my-5 text-primary  text-center lg:text-left `}
          >
            SOLVEATHON
          </h1>
          <div>
            <p
              className="text-xl text-neutral-content text-justify lg:text-justify"
              style={{ lineHeight: "1.5" }}
            >
              Solve-a-thon is a solution event focused on building an AI/ML and
              vision based android application, where enrolled teams will get to
              solve real time problems that could be planet changing tech. It is
              an opportunity for students to showcase their skills, learn new
              technologies and potentially develop a project into a product.
            </p>

            <h3 className="my-3 text-xl font-bold text-warning">
              Click the button below to view the problem statement
            </h3>

            <Link
              to="/details/solveathon"
              className={`btn btn-primary btn-wide my-8 `}
            >
              Details
            </Link>

            <div>
              <h3 className="text-center my-8 text-3xl text-primary font-bold ">
                Prize details for Solveathon{" "}
              </h3>

              <div
                className="text-lg lg:text-2xl horizontal-shake font-bold text-warning text-price flex-col 
            flex w-full items-center justify-around"
              >
                <span>1st Prize : 15000 </span>
                <span>2nd Prize : 10000 </span>
                <span>3rd Prize : 5000 </span>
              </div>
            </div>

            <div className="trophy my-5 flex flex-col lg:flex-row items-center justify-around w-full">
              <div className="">
                <img
                  src={TrophyImage}
                  alt="price-img"
                  style={{ maxWidth: "10rem" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img
            src={solveathonImage}
            alt="solvathon-logo"
            style={{ width: "50rem" }}
          />
        </div>
      </div>
    </Box>
  );
}

export default Solvathon;
