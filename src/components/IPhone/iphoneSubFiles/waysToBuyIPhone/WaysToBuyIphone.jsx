import React from "react";
import { someLogoImages } from "../../../../data/MobileData";

export default function WaysToBuyIphone() {
  return (
    <div className="container">
      <div className="ways-to-iphone">
        <p className="subTitle">Special carrier deals at Apple</p>
        <h4 className="title">
          Save up to $800 on the newest iPhone after trade‑in.
        </h4>
        <div className="logos">
          <div className="row">
            {someLogoImages.map((logo) => (
              <div key={logo.id} className="col-md-3 col-6">
                <div className="singlePart">
                  <img src={logo.image} alt="" />
                  <p>{logo.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <a className="findIdealBtn" href="/">
          find your ideal
        </a>
        <p className="custome">
          Our Specialists can help you shop — online or in store.{" "}
          <a href="/">
            Connect with an iPhone Specialist{" "}
            <span>
              {" "}
              <i className="fa-solid fa-angle-right"></i>
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}
