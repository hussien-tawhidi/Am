import React from "react";

export default function WatchesApp({ cardData }) {
  return (
    <div className="container">
      <div className="row">
        {cardData.map((data) => (
          <div className="col-md-6 col-12 mb-4" key={data.id}>
            <div className="singleWatchApp">
              <div className="texts">
                <h6 className="title">{data.title}</h6>
                <p className="desc">{data.desc}</p>
                <p className="more">Learn more</p>
              </div>
              <img src={data.image} alt="" className="heroImage" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
