import React from "react";
import "./App.css";
import RenderApi from "./components/RenderApi";
import CardDetails from "./components/CardDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RenderApi />} />
        <Route path="/card-details/:id" element={<CardDetails />} />
        <Route path="*" element={<div>Error:404 <br/> ❌Page Not Found.❌</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;