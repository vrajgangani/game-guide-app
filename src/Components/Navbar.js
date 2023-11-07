import React from "react";
import {
  EditOutlined,
  FileTextOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../Components/Navbar.css"
import { AppRoute } from "../Router/AppRoute";
import { AppName } from "../Assets/AppInfo";
const { Content, Sider } = Layout;

const Navbar = () => {
  const navigate = useNavigate()

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const NavItems = [
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
    <Layout style={{ height: "100%" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        // style={{ height: "100%" }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          {NavItems.map((data, index) => (
            <Menu.Item key={String(index + 1)} icon={data.icon}>
              <Link to={data.path}>{data.lable}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <div
          style={{
            padding: "10px",
            background: colorBgContainer,
            fontWeight: "bold",
            textAlign: "center",
            cursor:"pointer"
          }}
          onClick={()=>navigate('/')}
        >
          {AppName}
        </div>
        <Content
          style={{
            margin: "10px 10px 0",
          }}
        >
          <div
            style={{
              padding:"0px 5px 0px 5px",
              height: "100%",
              background: colorBgContainer,
              borderRadius: "5px",
            }}
          >
        <AppRoute/>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Navbar;
