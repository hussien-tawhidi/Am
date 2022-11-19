import React from "react";

export default function BackCamera({ cardData }) {
  return (
    <>
      {cardData.map((data) => (
        <div className="backCamera" key={data.id}>
         
          <div className="texts">
            <div className="camera1 camera">
              <p className="camera1title title">{data.camera1title}</p>
              <p className="camera1text text">{data.camera1text}</p>
            </div>
            <div className="camera2 camera">
              <p className="camera2title title">{data.camera2title}</p>
              <p className="camera2text text">{data.camera2text}</p>
            </div>
            <div className="camera3 camera">
              <p className="camera3title title">{data.camera3title}</p>
              <p className="camera3text text">{data.camera3text}</p>
            </div>
            <div className="camera4 camera">
              <p className="camera4title title">{data.camera4title}</p>
              <p className="camera4text text">{data.camera4text}</p>
            </div>
          </div>
          <div className="image">
            <img src={data.frontCameraImage} alt="" className="heroImage img-fluid" />
          </div>
        </div>
      ))}
    </>
  );
}
