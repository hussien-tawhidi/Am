import React from "react";
import { endPointData } from "../../../../data/ourStoreDate";

export default function StoreEndingPara() {
  return (
    <div className="container">
      <div className="endPoint">
      <p className="title">quick links</p>
      <div className="quickLinks">
        <a href="/">order status</a>
        <a href="/">shopping help</a>
        <a href="/">return</a>
      </div>
      <div className="para">
        {endPointData.map((ending)=>(
          <p key={ending.id}>{ending.para}</p>
        ))}
      </div>
      </div>
    </div>
  );
}
