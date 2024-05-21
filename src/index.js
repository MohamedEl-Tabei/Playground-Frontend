import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/tag.css";
import "./style/id.css";
import "./style/class.css";
import Pages from "./base/pages";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pages.English />} />
        <Route path="/admin" element={<Pages.Admin/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
