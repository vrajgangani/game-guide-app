import React from "react";
import { Tab1Data} from "../../Assets/TabsData";
import { ImageTabComponent } from "../../Components/ImageTabComponent";

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
      
    </>
  );
};
