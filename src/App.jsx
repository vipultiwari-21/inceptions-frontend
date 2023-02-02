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
import Cookies from "js-cookie";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/user/Topbar";
import TeamInfo from "./components/user/TeamInfo";
import UpdateTeamInfo from "./components/user/UpdateTeamInfo";
import AddParticipant from "./components/user/AddParticipant";

function App() {
  const user = Cookies.get("token");
  return (
    <div className="app">
      {user && <Sidebar />}
      <main className="content">
        {user && <Topbar />}
        <Routes>
          {user ? (
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />
          ) : (
            <Route path="/" element={<LandingPage />} />
          )}
          <Route path="/logintemp" element={<Login />} />
          <Route path="/registertemp" element={<Registration />} />
          <Route path="/register" element={<Temporary />} />
          <Route path="/login" element={<Temporary />} />
          <Route exact path="/details/:id" element={<DetailedEvents />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/email-confirm" element={<EmailConfirmation />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />

          {/* Participations Routes */}
          <Route path="team-info" element={<TeamInfo />} />
          <Route path="update-team" element={<UpdateTeamInfo />} />
          <Route path="add-participant" element={<AddParticipant />} />

          {/*Backend Routed */}

          <Route
            exact
            path="/backend-registration"
            element={<RegisterPrivate />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
