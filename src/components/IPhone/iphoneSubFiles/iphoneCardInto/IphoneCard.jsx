import React from "react";
import { Link } from "react-router-dom";

export default function IphoneCard({ iphoneCardInfo }) {
  return (
    <>
      {iphoneCardInfo.map((card) => (
        <Link to={`/products/${card.LinkTo}`} className={`iphone-card ${card.bg}`} key={card.id}>
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
        </Link>
      ))}
    </>
  );
}
