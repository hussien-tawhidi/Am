import React from "react";
import { SurfaceNine1, SurfaceNine2 } from "../../../../data/Microsoft";
import SurfaceIntroCard from "./SurfaceIntroCard";

export default function Surface9intro() {
  return (
    <div className="container">
      <div className="microsoftLgTitle">
        <h2>Explore your options</h2>
      </div>
      <div className="row">
        <div className="col-md-6 col-12">
          <SurfaceIntroCard SurfaceNine={SurfaceNine1} />
        </div>
        <div className="col-md-6 col-12">
          <SurfaceIntroCard SurfaceNine={SurfaceNine2} />
        </div>
      </div>
    </div>
  );
}
