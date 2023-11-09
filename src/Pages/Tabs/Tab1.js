import React from "react";
import { Tab1Data, VideoTabData } from "../../Assets/TabsData";
import { ImageTabComponent } from "../../Components/ImageTabComponent";
import { VideoTabComponent } from "../../Components/VideoTabComponent";

export const Tab1 = () => {
  return (
    <>
      <div
        style={
          {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }
        }
      >
        {Tab1Data.map((data, index) => (
          <ImageTabComponent key={index} data={data} />
        ))}
      </div>
      <div>
        {VideoTabData.map((data, index) => (
          <VideoTabComponent key={index} videoLink={data.videoLink} />
        ))}
      </div>
    </>
  );
};
