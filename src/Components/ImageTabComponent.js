import React, { useState } from "react";
import { Image, Modal } from "antd";

export const ImageTabComponent = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    window.open(
      "https://play.google.com/store/apps/details?id=com.orange.kidspiano.music.songs&hl=en_IN&gl=US"
    );
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  console.log(data.title);

  return (
    <div>
      <Image
        src={data.image}
        onClick={showModal}
        preview={false}
        style={{
          borderRadius: "10px",
          margin: "10px 0px 15px 0px",
          cursor: "pointer",
        }}
      />
      <Modal
        title={data.title}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okText="Play Now"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Image
            src={data.image}
            preview={false}
            style={{
              borderRadius: "10px",
              margin: "10px 0px 0px 0px",
              cursor: "pointer",
            }}
          />
          <p>{data.description}</p>
        </div>
      </Modal>
    </div>
  );
};
