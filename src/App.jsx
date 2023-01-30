import React, { useState, Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Temporary from "./Temporary";
import DetailedEvents from "./components/LandingPage/DetailedEvents";
import Registration from "./components/auth/Registration";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UserProfile from "./components/user/UserProfile";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import EmailConfirmation from "./components/auth/EmailConfirmation";
import RegisterPrivate from "./components/auth/RegisterPrivate";
import Login from "./components/auth/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/logintemp" element={<Login />} />
        <Route path="/registertemp" element={<Registration />} />
        <Route path="/register" element={<Temporary />} />
        <Route path="/login" element={<Temporary />} />
        {/* <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Registration />} /> */}
        <Route exact path="/details/:id" element={<DetailedEvents />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/email-confirm" element={<EmailConfirmation />} />
        <Route exact path="/reset-password" element={<ResetPassword />} />
        <Route
          exact
          path="/user/profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />

        {/*Backend Routed */}

        <Route
          exact
          path="/backend-registration"
          element={<RegisterPrivate />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
