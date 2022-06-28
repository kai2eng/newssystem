import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "../views/login/Login";
import SandBox from "../views/sandbox/SandBox";

export default function IndexRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<SandBox />} />
        <Route path="*" element={<Login to="/login" replace />} />
      </Routes>
    </HashRouter>
  );
}
