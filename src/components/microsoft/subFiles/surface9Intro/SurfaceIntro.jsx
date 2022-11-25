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
          {SurfaceNine1.map((data) => (
            <SurfaceIntroCard
              key={data.id}
              id={data.id}
              image={data.image}
              title={data.title}
              desc={data.desc}
              processer={data.processer}
              processerDetails={data.processerDetails}
              batteryLife={data.batteryLife}
              batteryLifeDetails={data.batteryLifeDetails}
              port={data.port}
              portDetails={data.portDetails}
              bestFor={data.bestFor}
              bestForDetails={data.bestForDetails}
              price={data.price}
            />
          ))}
        </div>
        <div className="col-md-6 col-12">
          {SurfaceNine2.map((data) => (
            <SurfaceIntroCard
              key={data.id}
              id={data.id}
              image={data.image}
              title={data.title}
              desc={data.desc}
              processer={data.processer}
              processerDetails={data.processerDetails}
              batteryLife={data.batteryLife}
              batteryLifeDetails={data.batteryLifeDetails}
              port={data.port}
              portDetails={data.portDetails}
              bestFor={data.bestFor}
              bestForDetails={data.bestForDetails}
              price={data.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
