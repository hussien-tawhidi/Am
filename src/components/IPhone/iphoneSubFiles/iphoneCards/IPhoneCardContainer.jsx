import React from "react";
import { iphoneCard1, iphoneCard2 } from "../../../../data/MobileData";
import IPhoneCard from "./IPhoneCard";

export default function IPhoneCardContainer() {
  return (
    <div className="container">
      <div className="IphoneCard-container">
        <div className="row">
          <div className="col-sm-6 col-12">
            <IPhoneCard cardData={iphoneCard1} />
          </div>
          <div className="col-sm-6 col-12">
            <IPhoneCard cardData={iphoneCard2} />
          </div>
        </div>
      </div>
    </div>
  );
}
