import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import TeamInfo from "./TeamInfo";
import Topbar from "./Topbar";

function UserProfile() {
  return (
    <div style={{ display: "flex", width: "100vw" }}>
      <div>
        {/* <Sidebar />
         */}
        <h2>Hello from UserProfile</h2>
      </div>
      <div style={{ flex: 1 }}>
        {/* <Topbar /> */}

        {/* <Routes>
          <Route path="team-name" element={<TeamInfo />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default UserProfile;
