import React from "react";

export default function IphoneCard({ iphoneCardInfo }) {
  return (
    <>
      {iphoneCardInfo.map((card) => (
        <div className={`iphone-card ${card.bg}`}>
          <div className={`texts ${card.textClass} ${card.card3TextClass}`}>
            <span>{card.newText}</span>
            <p className="model">{card.model}</p>
            <h2 className={`title ${card.textGradeint}`}>{card.title}</h2>
            <p className="price">{card.price}</p>
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
