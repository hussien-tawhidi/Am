import React from "react";

export default function LatestOnStoreCard({ image, model, slogan, price, bg }) {
  return (
    <div className= {`latest-on-store-card ${bg}`}>
        <img src={image} alt="" className="mainImg" />
        <div className="text">
          <p className="model">{model}</p>
          <p className="slogan">{slogan}</p>
          <p className="price">{price}</p>
        </div>
   
    </div>
  );
}
