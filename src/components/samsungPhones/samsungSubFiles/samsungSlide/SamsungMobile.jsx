import React from "react";
import { samsungMobile } from "../../../../data/SamsungPhoneData";
import SamsungMobileCard from "./SamsungMobileCard";

export default function SamsungMobile() {
  return (
    <div className="samsung-slides">
      <h1 className="mainTitle">hot offers</h1>
      <SamsungMobileCard samsungMobile={samsungMobile}/>
    </div>
  );
}
