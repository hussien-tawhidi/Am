import React from "react";

export default function AccessoriesCard({ iphoneAccessoriesData }) {
  return (
    <div className="row">
      {iphoneAccessoriesData.map((accessories) => (
        <div className="col-12" key={accessories.id}>
          <div className={`iphoneAccessories ${accessories.accessories1}`}>
          <img src={accessories.image} alt="" className="heroImage" />
            <div className="texts">
              <h5>{accessories.title}</h5>
              <p>{accessories.text}</p>
              <div className="buttons">
                <a href="/" className={`buyNow `}>
                  {accessories.buyNow}
                  
                </a>
                <a href="/" className="more">
                  <span>{accessories.linkTo}</span>{" "}
                  <span className="icon">
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
