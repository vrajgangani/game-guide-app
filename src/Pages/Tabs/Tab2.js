import React from "react";
import { VideoTabComponent } from "../../Components/VideoTabComponent";
import { VideoTabData } from "../../Assets/TabsData";

export const Tab2 = () => {
  return (
    <div>
      {VideoTabData.map((data, index) => (
        <VideoTabComponent key={index} videoLink={data.videoLink} />
      ))}
    </div>
  );
};
