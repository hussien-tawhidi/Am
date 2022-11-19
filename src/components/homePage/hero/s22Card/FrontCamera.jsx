import React from "react";

export default function FrontCamera({ cardData }) {
  return (
    <>
      {cardData.map((data) => (
        <div className="s22frontCamera" key={data.id}>
          <p className="desc">{data.desc}</p>
          <div className="front">
            <div className="text">
              <p className="pixels">{data.frontCameraP}</p>
              <p className="cameraText">{data.frontCameraText}</p>
            </div>
            <div className="image">
              <img src={data.frontCameraImage} alt="" className="heroImage" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
