import React from "react";
import {
  cardIntro3Data,
  iphoneAccessoriesData,
} from "../../../../data/MobileData";
import IphoneCard from "../iphoneCardInto/IphoneCard";
import AccessoriesCard from "./AccessoriesCard";

export default function IPhoneAccessories() {
  return (
    <div className="container">
      <h1 className="iphone-accessoriesTitle">Featured accessories</h1>
      <AccessoriesCard iphoneAccessoriesData={iphoneAccessoriesData} />

      <IphoneCard iphoneCardInfo={cardIntro3Data} />

      <a href="/" className="link my-3">
        shop all iphone accessories{" "}
        <span className="icon">
          <i className="fa-solid fa-angle-right"></i>
        </span>
      </a>
    </div>
  );
}
