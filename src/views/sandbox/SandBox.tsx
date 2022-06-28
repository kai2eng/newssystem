import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SideMenu from "../../components/sandbox/SideMenu";
import TopHeader from "../../components/sandbox/TopHeader";
import Home from "./home/Home";
import UserList from "./user-manage/UserList";
import RoleList from "./right-manage/RoleList";
import RightList from "./right-manage/RightList";

export default function SandBox() {
  return (
    <div>
      <SideMenu></SideMenu>
      <TopHeader></TopHeader>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/user-manage/list" element={<UserList />} />
        <Route path="/right-manage/role/list" element={<RoleList />} />
        <Route path="/right-manage/right/list" element={<RightList />} />
        <Route path="/*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
}
