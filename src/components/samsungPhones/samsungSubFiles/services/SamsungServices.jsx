import React from "react";
import { samsungServicesData } from "../../../../data/SamsungPhoneData";
import SamsungServicesCard from "./SamsungServicesCard";

export default function SamsungServices() {
  return (
    <div className="samsungServices">
      <SamsungServicesCard servicesData={samsungServicesData}/>
    </div>
  );
}
