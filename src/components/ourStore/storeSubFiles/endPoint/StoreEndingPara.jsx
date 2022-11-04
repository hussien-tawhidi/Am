import React from "react";
import { storeEndPointData } from "../../../../data/ourStoreDate";
import EndingPart from "./EndingPart";

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
        <EndingPart endPointDataFile={storeEndPointData} />
      </div>
    </div>
  );
}
