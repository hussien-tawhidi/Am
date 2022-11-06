import React from "react";

export default function IPhoneCard({ cardData }) {
  return (
    <>
      {cardData.map((data, index) => (
        <div className={`iphoneCard ${data.bgImage}`} key={index}>
          <h4 className="title">{data.title}</h4>
          <p className="text">{data.text}</p>
          <a href="/" className="link">
            {data.linkTo}{" "}
            <span className="icon">
              <i className="fa-solid fa-angle-right"></i>
            </span>
          </a>
        </div>
      ))}
    </>
  );
}
