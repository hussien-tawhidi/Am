import React from "react";

export default function HuaweiBanner() {
  return (
    <>
      <div className="huaweiBanner"></div>
      <div className="huaeCamera">
        <h5 className="title">It’s all just a click away.</h5>
        <div className="images">
          <img
            src="/assets/huawei/huawei-mate-x2-camera-system.webp"
            alt=""
            className="lgImage"
          />
          <div className="caemraMiniImages">
            <div className="singleImage">
              <img
                src="/assets/huawei/huawei-mate-x2-camera-system-icon1.svg"
                alt=""
              />
              <p>50 MP Ultra Vision Camera</p>
            </div>
            <div className="singleImage">
              <img
                src="/assets/huawei/huawei-mate-x2-camera-system-icon2.svg"
                alt=""
              />
              <p>RYYB Telephoto</p>
            </div>
            <div className="singleImage">
              <img
                src="/assets/huawei/huawei-mate-x2-camera-system-icon3.svg"
                alt=""
              />
              <p>100x Digital Zoom</p>
            </div>
            <div className="singleImage">
              <img
                src="/assets/huawei/huawei-mate-x2-camera-system-icon4.svg"
                alt=""
              />
              <p>2.5 cm Macro Lens</p>
            </div>
          </div>
        </div>
        <p className="paraCamera">HUAWEI Mate X2’s Ultra Vision Leica Quad Camera pushes the boundaries of what’s possible in a photo. From dawn to dusk and beyond, capture yourself in your best light, and the world in all its creativity.</p>
      </div>
    </>
  );
}
