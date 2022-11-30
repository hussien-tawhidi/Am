import React from "react";

export default function ProdcutsAccessories({ boxImage }) {
  return (
    <>
      <div className="row">
        {boxImage.map((data) => (
          <div className="col-md-4 col-12">
            <div className="product-accessories">
              <div className="boxImages">
                <img src={data.image} alt="" />
              </div>
              <p className="title">{data.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
