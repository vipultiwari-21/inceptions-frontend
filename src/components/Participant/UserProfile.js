import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addTodo } from "../../features/reducers/slice";

import CreateApiInterceptor from "../../features/Interceptors/apiInterceptor";
import Sidebar from "../Sidebar/Sidebar";

function UserProfile() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetcher = async () => {
      const result = await CreateApiInterceptor().get(
        "https://exceptions-website-backend.vercel.app/profile/me"
      );
      setUsername(result.data.firstName);
    };

    fetcher();
  }, []);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(addTodo(false));
    /*Pending access token modifier state erasal */
  };

  return (
    <div>
      <Sidebar />
      <button className="btn btn-warning" onClick={handleLogOut}>
        Logout
      </button>

      
      
    </div>
  );
}

export default UserProfile;
