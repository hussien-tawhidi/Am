import React from "react";

export default function SurfaceIntroCard({ SurfaceNine }) {
  return (
    <>
      {SurfaceNine.map((nine) => (
        <div className="surfaceNineCard" key={nine.id}>
          <div className="heroImg">
            <img src={nine.image} alt="" className="" />
          </div>
          <div className="texts">
            <div className="title">
              <h5>{nine.title}</h5>
              <p className="">{nine.desc}</p>
            </div>
            <div className="single">
              <p className="subTitle">{nine.processer}</p>
              <p className="desc">{nine.processerDetails}</p>
            </div>
            <div className="single">
              <p className="subTitle">{nine.batteryLife}</p>
              <p className="desc">{nine.batteryLife}</p>
            </div>
            <div className="single">
              <p className="subTitle">{nine.port}</p>
              <p className="desc">{nine.portDetails}</p>
            </div>
            <div className="single">
              <p className="subTitle">{nine.bestFor}</p>
              <p className="desc">{nine.bestForDetails}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
