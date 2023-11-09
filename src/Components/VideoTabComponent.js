import React from "react";

export const VideoTabComponent = ({ videoLink }) => {
  return (
    <div>
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          height: 0,
          margin:"5px 0px 15px 0px"
        }}
      >
        <iframe
          title="YouTube Video"
          src={videoLink}
          frameBorder="0"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "10px", 
          }}
        ></iframe>
      </div>
    </div>
  );
};
