import React from "react";

export default function IntroWatchCard({ introData }) {
  return (
    <>
      {introData.map((data) => (
        <div className="watchCardIntro">
            <div className="texts">
                <img src={data.miniLogo} alt="" className="miniLogo" />
            <h4 className="title">{data.title}</h4>
            <p className="price">{data.price}</p>
            <div className="buttons">
                <a href="/" className={`buyNow `}>
                  {data.buyNow}
                  
                </a>
                <a href="/" className="more">
                  <span>{data.linkTo}</span>{" "}
                  <span className="icon">
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                </a>
              </div>
            </div>
            <img src={data.image} alt="" className="heroImage"/>
        </div>
      ))}
    </>
  );
}
