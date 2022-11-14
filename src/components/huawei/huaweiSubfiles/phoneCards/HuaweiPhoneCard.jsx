import React from "react";

export default function HuaweiPhoneCard({ huaweiCardData }) {
  return (
    <div className="huawieCardOne">
      <div className="row">
        {huaweiCardData.map((card) => (
          <div className="col-md-4 col-sm-6 col-12">
            <div
              className={`singleCard  ${card.direction}`}
              key={card.id}
            >
              <img src={card.image} alt="" />
              <div className="text">
                <div className="titleTop">
                  <span>{card.newText}</span>
                  <span>{card.size}</span>
                </div>
                <h5>{card.title}</h5>
                <p>{card.text}</p>
                <a href="/">{card.learnMore}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
