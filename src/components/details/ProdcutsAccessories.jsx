import React from "react";

export default function ProdcutsAccessories({ boxImage }) {
  return (
    <>
      <p className="box-title">what's on the box</p>
      <div className="product-accessories">
        {boxImage.map((data) => (
          <div className="single">
            <div className="boxImages">
              <img src={data.image} alt="" />
            </div>
            <p className="title">{data.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}
