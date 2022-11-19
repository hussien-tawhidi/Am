import React from "react";

export default function S22title({ cardData }) {
  return (
    <>
      {cardData.map((data) => (
        <div className="s22Title" key={data.id}>
          <div className="texts">
            <div className="miniTitle"><span>{data.miniTitle}</span> <span className="icon">{data.camerIcon}</span></div>
            <h3 className="lgTitle">{data.lgTitle}</h3>
            <h6 className="mdTitle">{data.mdTitle}</h6>
          </div>
          <div className="image">
            <img src={data.cameraImage} alt="" className="heroImage" />
          </div>
        </div>
      ))}
    </>
  );
}
