import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../views/login/Login";
import SandBox from "../views/sandbox/SandBox";
import Error from "../views/error/Error";
import Home from "../views/sandbox/home/Home";
import UserList from "../views/sandbox/user-manage/UserList";
import CostomsList from "../views/sandbox/costomslist/CostomsList";
export default function IndexRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/sandbox" element={<SandBox />}>
        <Route index path="home" element={<Home />} />
        <Route path="costoms-manage" element={<CostomsList />} />
        <Route path="user-manage" element={<UserList />} />
        <Route path="*" element={<Navigate to="/sandbox/home" />} />
        <Route path="" element={<Navigate to="/sandbox/home" />} />
      </Route>
      <Route path="/error" element={<Error />} />
      <Route path="/" element={<Navigate to="/sandbox" />} />
      <Route path="/*" element={<Navigate to="/error" />} />
    </Routes>
  );
}
