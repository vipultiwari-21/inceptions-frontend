import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { stateModifier } from "../../features/reducers/slice";
import Sidebar from "../Sidebar/Sidebar";

function UserProfile() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    Cookies.remove("Token");
    dispatch(stateModifier(false));
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <Sidebar />
      </div>
      <div>
        <h1>Hello</h1>
        <button className="btn btn-error btn-outline" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
