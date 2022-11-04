import React from "react";

export default function GetMoreOnIphoneCard({ cardData }) {
  return (
    <>
      {cardData.map((card) => (
        <div className={`get-mor-on-iPhone ${card.direction}`}>
          <img src={card.heroImage} alt="" className="hero-img" />
          <div className="texts">
            <img src={card.icons} alt="" />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <div className="buttons">
              <a href="/" className={card.buyNow}>
                {card.buy}
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
      ))}
    </>
  );
}
