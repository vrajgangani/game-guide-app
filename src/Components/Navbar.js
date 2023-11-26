import React, { useState } from "react";
import {
  EditOutlined,
  FileTextOutlined,
  ShareAltOutlined,
  AlignLeftOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import {Drawer, Layout, Menu, theme } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../Components/Navbar.css";
import { AppRoute } from "../Router/AppRoute";
import { AppName } from "../Assets/AppInfo";
const { Content} = Layout;

const Navbar = () => {
  const navigate = useNavigate();
  const [visible, setvisible] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const NavItems = [
    {
      lable: "Home",
      icon: <HomeOutlined />,
      path: "/",
    },
    {
      lable: "Share App",
      icon: <ShareAltOutlined />,
      path: "/share-app",
    },
    {
      lable: "Rate App",
      icon: <EditOutlined />,
      path: "/rate-app",
    },
    {
      lable: "Privacy policy",
      icon: <FileTextOutlined />,
      path: "/privacy-policy",
    },
  ];
  return (
    <Layout>
      <Drawer
        visible={visible}
        title={AppName}
        closable={true}
        maskClosable={true}
        onClose={() => {
          setvisible(false);
        }}
        placement="left"
        headerStyle={{ padding: 10 }}
        width={230}
        bodyStyle={{padding:5}}
      >
        <Menu mode="inline" defaultSelectedKeys={["4"]}>
          {NavItems.map((data, index) => (
            <Menu.Item
              key={String(index + 1)}
              icon={data.icon}
              style={{ padding: 7}}
            >
              <Link to={data.path}>{data.lable}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
      <div
        style={{
          padding: "12px",
          background: colorBgContainer,
          fontWeight: "bold",
          textAlign: "center",
          cursor: "pointer",
          position: "relative",
        }}
        onClick={() => navigate("/")}
      >
        <div style={{ position: "absolute" }}>
          <AlignLeftOutlined
            style={{padding:"0 0 0 7px"}}
            onClick={() => {
              setvisible(true);
            }}
          />
        </div>
        {AppName}
      </div>
      <Content
        style={{
          margin: "10px 10px 0",
        }}
      >
        <div
          style={{
            padding: "0px 5px 0px 5px",
            height: "100%",
            background: colorBgContainer,
            borderRadius: "5px",
          }}
        >
          <AppRoute />
        </div>
      </Content>
    </Layout>
  );
};
export default Navbar;
