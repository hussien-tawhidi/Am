import React from "react";

export default function AccessoriesBanner({ bannerData }) {
  return (
    <>
      {bannerData.map((data) => (
        <div className="singleBanner" key={data.id}>
          <div className="bannerTexts">
            <h3>{data.title}</h3>
            <p>{data.desc}</p>
            <a href="/" className="more">Learn more</a>
          </div>
          <img src={data.image} alt="" />
        </div>
      ))}
    </>
  );
}
