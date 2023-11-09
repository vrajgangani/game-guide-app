import React from "react";
import { Tabs } from "antd";
import HomePageTabs from "../../Assets/HomePageTabs";

const Home = () => {
  return <Tabs defaultActiveKey="1" centered items={HomePageTabs} />;
};

export default Home;
