import React from "react";
import { kindOfSurfaceSlide } from "../../../../data/Microsoft";
import SurfaceSlideCard from "./SurfaceSlideCard";

export default function SurfaceSlide() {
  return (
    <div className="">
     <div className="container">
     <div className="microsoftLgTitle">
        <h2>Surface lineup</h2>
      </div>
     </div>
      <SurfaceSlideCard surfaceSlideData={kindOfSurfaceSlide} />
    </div>
  );
}
