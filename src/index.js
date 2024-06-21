import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/colors.css";
import "./style/tag.css";
import "./style/id.css";
import "./style/class.css";
import Pages from "./base/pages";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Pages.Home />} />
        <Route path="/Test" element={<Pages.Test />} />
        <Route path="/English" element={<Pages.English />} />
        <Route path="/Database" element={<Pages.Database />} />
        <Route path="/Web" element={<Pages.Web/>} />
        <Route path="/admin" element={<Pages.Admin/>} /> 
        <Route path="/LogicalReasoning" element={<Pages.LogicalReasoning/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
