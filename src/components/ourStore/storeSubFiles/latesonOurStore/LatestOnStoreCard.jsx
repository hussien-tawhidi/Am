import React from "react";

export default function LatestOnStoreCard({ image, model, slogan, price, bg,imageNotFull }) {
  return (
    <div className= {`latest-on-store-card ${bg}`}>
        <img src={image} alt="" className={`mainImg ${imageNotFull}`} />
        <div className="text">
          <p className="model">{model}</p>
          <p className="slogan">{slogan}</p>
          <p className="price">{price}</p>
        </div>
   
    </div>
  );
}
