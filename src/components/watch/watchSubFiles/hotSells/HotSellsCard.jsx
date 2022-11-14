import React from "react";

export default function HotSellsCard({ cardData }) {
  return (
    <div className="row">
      {cardData.map((data) => (
      <div className="col-lg-4 col-sm-6 col-12 mb-4" key={data.id}>
          <div className="singleHotSells" >
            <span className="hotsells">Hot Sells</span>
          <img src={data.image} alt="" className="heroImage" />
          <div className="texts">
            <span>{data.newText}</span>
            <p className="name">{data.name}</p>
            <p className="price">{data.price}</p>
            <div className="buttons">
              <a href="/" className="bgBlue">
                Buy Now
              </a>
              <a href="/" className="more">
                <span>learn more</span>{" "}
                <div className="icon">
                  <i className="fa-solid fa-angle-right"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}
