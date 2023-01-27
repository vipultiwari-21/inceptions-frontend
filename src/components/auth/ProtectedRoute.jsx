import React,{useState} from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";



function Protected({ children }) {


  const auth = useSelector((state) => {
    if(state.auth.length>0){
    return state.auth[0].text
    }else if(Cookies.get("token")){
     return true
    }else{
      return false
    }
  });



  if (!auth) {
    console.log("Unauth ", auth);
    return <Navigate to="/login" replace />;
  } else {
    console.log("child ", auth);
    return children;
  }
}
export default Protected;