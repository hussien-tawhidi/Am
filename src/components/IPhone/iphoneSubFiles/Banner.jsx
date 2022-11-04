import React from "react";

export default function Banner({ iphoneBanner }) {
  return (
    <div className="container">
      {iphoneBanner.map((banner) => (
        <div className="iphone-banner">
          <div className="text">
            <h6>{banner.title}</h6>
            <p>{banner.text}</p>
            <a href="/" className="link">
              {banner.linkTo}{" "}
              <span className="icon">
                {" "}
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
