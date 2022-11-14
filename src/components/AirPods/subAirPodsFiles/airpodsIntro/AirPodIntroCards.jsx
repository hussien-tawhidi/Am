import React from "react";

export default function AirPodIntroCards({ introData }) {
  return (
    <>
      {introData.map((intro) => (
        <div className="introCard">
          <div className="texts">
            <h2 className="title">{intro.title}</h2>
            <p className="generation">{intro.generation}</p>
            <p className="price">{intro.price}</p>
          </div>
          <div className="buttons">
            <a href="/" className="buyNow">
              buy
            </a>
            <a href="/" className="more">
             <span> Learn more</span>
              <span className="icon">
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
