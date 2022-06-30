import React from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  TeamOutlined,
  AreaChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./index.css";
import { Link, Navigate, Route, useNavigate } from "react-router-dom";

const { Sider } = Layout;

export default function SideMenu() {
  let navigate = useNavigate();
  //模拟数组结构,后期取于后台
  const items = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: "ホーム",
      onClick: function () {
        navigate("home");
      },
    },
    {
      key: "/user-manage/list",
      icon: <TeamOutlined />,
      label: "カスタマ",
      children: [
        {
          key: "/right-manage/role/list",
          label: "権限管理",
          icon: <TeamOutlined />,
          onClick: function () {
            navigate("costoms-manage");
          },
        },
        {
          key: "/right-manage/right/list",
          label: "スペース管理",
          icon: <TeamOutlined />,
        },
      ],
    },
    {
      key: "3",
      icon: <UserOutlined />,
      label: "ユーザー",
      children: [
        {
          key: "3-1",
          label: "test",
          icon: <TeamOutlined />,
          onClick: function () {
            navigate("user-manage");
          },
        },
      ],
    },
    {
      key: "4",
      icon: <AreaChartOutlined />,
      label: "事件管理",
      children: [
        {
          key: "4-1",
          label: "アップロード申請",
          icon: <TeamOutlined />,
        },
        {
          key: "4-2",
          label: "空間申請",
          icon: <TeamOutlined />,
        },
      ],
    },
    {
      key: "5",
      icon: <AreaChartOutlined />,
      label: "レポート",
      children: [
        {
          key: "5-1",
          label: "test",
          icon: <TeamOutlined />,
        },
      ],
    },
  ];
  // const renderMenu = (
  //   items: {
  //     key: string;
  //     icon: JSX.Element;
  //     label: string;
  //     children?: { key: string; label: string; icon: JSX.Element }[];
  //   }[]
  // ) => {
  //   return { items };
  // };

  return (
    <Sider trigger={null} collapsible collapsed={false}>
      <div className="logo">Tera Box</div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "home",
            icon: <HomeOutlined />,
            label: "ホーム",
            onClick: function () {
              navigate("home");
            },
          },
          {
            key: "/user-manage/list",
            icon: <TeamOutlined />,
            label: "カスタマ",
            children: [
              {
                key: "/right-manage/role/list",
                label: "権限管理",
                icon: <TeamOutlined />,
                onClick: function () {
                  navigate("costoms-manage");
                },
              },
              {
                key: "/right-manage/right/list",
                label: "スペース管理",
                icon: <TeamOutlined />,
              },
            ],
          },
          {
            key: "3",
            icon: <UserOutlined />,
            label: "ユーザー",
            children: [
              {
                key: "3-1",
                label: "test",
                icon: <TeamOutlined />,
                onClick: function () {
                  navigate("user-manage");
                },
              },
            ],
          },
          {
            key: "4",
            icon: <AreaChartOutlined />,
            label: "事件管理",
            children: [
              {
                key: "4-1",
                label: "アップロード申請",
                icon: <TeamOutlined />,
              },
              {
                key: "4-2",
                label: "空間申請",
                icon: <TeamOutlined />,
              },
            ],
          },
          {
            key: "5",
            icon: <AreaChartOutlined />,
            label: "レポート",
            children: [
              {
                key: "5-1",
                label: "test",
                icon: <TeamOutlined />,
              },
            ],
          },
        ]}
      />
    </Sider>
  );
}
