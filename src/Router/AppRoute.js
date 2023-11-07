import React from "react";
import Home from "../Pages/HomePage/Home";
import { Route, Routes } from "react-router-dom";
import PrivacyPolicy from "../Pages/SideNavbarItems/PrivacyPolicy";
import { RateApp } from "../Pages/SideNavbarItems/RateApp";
import { ShareApp } from "../Pages/SideNavbarItems/ShareApp";
import { Home1Data } from "../Assets/GuideData";

export const AppRoute = () => {
  const AppRouters = [
    {
      path: "/",
      component: <Home />,
    },
    {
      path: "/privacy-policy",
      component: <PrivacyPolicy />,
    },
    {
      path: "/rate-app",
      component: <RateApp />,
    },
    {
      path: "/share-app",
      component: <ShareApp />,
    },
  ];

  return (
    <>
      <Routes>
        {Home1Data.map((item, index) => (
          <Route path={item.path} key={index} element={item.component} />
        ))}


        {AppRouters.map((item, index) => (
          <Route path={item.path} key={index} element={item.component} />
        ))}
      </Routes>
    </>
  );
};
