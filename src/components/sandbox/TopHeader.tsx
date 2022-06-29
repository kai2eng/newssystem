import React, { useState } from "react";
import { Layout, Dropdown, Menu, Avatar } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

export default function TopHeader() {
  const [collapsed, setCollapsed] = useState(false);
  const changeCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              SuperAdmin
            </a>
          ),
        },
        {
          key: "4",
          danger: true,
          label: "LogOut",
        },
      ]}
    />
  );

  return (
    <Header className="site-layout-background" style={{ padding: "0 16px" }}>
      {collapsed ? (
        <MenuUnfoldOutlined onClick={changeCollapsed} />
      ) : (
        <MenuFoldOutlined onClick={changeCollapsed} />
      )}
      <div style={{ float: "right" }}>
        <span>Welcome</span>
        <Dropdown overlay={menu}>
          <Avatar size="small" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  );
}
