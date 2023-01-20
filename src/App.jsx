import React, { useState, Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Temporary from "./Temporary";
import DetailedEvents from "./components/LandingPage/DetailedEvents";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Temporary />} />
        <Route exact path="/register" element={<Temporary />} />
        <Route path="/details/:id" element={<DetailedEvents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
