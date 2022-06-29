import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import SideMenu from "../../components/sandbox/SideMenu";
import TopHeader from "../../components/sandbox/TopHeader";
import Home from "./home/Home";
import UserList from "./user-manage/UserList";
import RoleList from "./right-manage/RoleList";
import RightList from "./right-manage/RightList";
import CostomsList from "./costomslist/CostomsList";
import { Layout, Menu } from "antd";
import "./SandBox.css";

const { Content } = Layout;

export default function SandBox() {
  return (
    <Layout>
      <SideMenu></SideMenu>
      <Layout className="site-layout">
        <TopHeader></TopHeader>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {/* <Routes>
            <Route index element={<Home />} />
            <Route path="costoms-manage" element={<CostomsList />} />
            <Route path="user-manage" element={<UserList />} />
          </Routes> */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
