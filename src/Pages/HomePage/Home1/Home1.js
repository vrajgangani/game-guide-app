import { Image } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Home1Data } from "../../../Assets/GuideData";

export const Home1 = () => {
  const navigate = useNavigate()
  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column"
    }}>
      {Home1Data.map((data, index) => {
        return (
          <Image
            src={data.image}
            onClick={() => navigate(data.path)}
            style={{borderRadius:"10px",margin:"10px 0px 10px 0px"}}
          />
        );
      })}
    </div>
  );
};
