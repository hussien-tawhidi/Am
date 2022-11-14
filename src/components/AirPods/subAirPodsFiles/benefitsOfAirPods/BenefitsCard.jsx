import React from "react";

export default function BenefitsCard({ cardData }) {
  return (
    <>
      {cardData.map((card) => (
        <div className={`singleBenefitsOfAirpods ${card.smText}`} key={card.id}>
          <div className="texts">
            <p>{card.text}</p>
            <a href="/">{card.learnMore}</a>
          </div>
          <img src={card.image} alt="" />
        </div>
      ))}
    </>
  );
}
