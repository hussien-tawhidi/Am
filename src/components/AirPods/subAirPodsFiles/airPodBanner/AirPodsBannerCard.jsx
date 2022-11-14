import React from "react";

export default function AirPodsBannerCard({ cardBannerData }) {
  return (
    <>
      {cardBannerData.map((banner) => (
        <div className="singAirPodleBanner" key={banner.id}>
          <img src={banner.image} alt="" className="image" />
          <h1>headphone</h1>
          <div className="texts">
            <h6>{banner.title}</h6>
            <p>{banner.text}</p>
          </div>
        </div>
      ))}
    </>
  );
}
