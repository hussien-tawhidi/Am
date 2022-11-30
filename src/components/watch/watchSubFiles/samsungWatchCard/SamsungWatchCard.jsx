import React from "react";
import { Link } from "react-router-dom";

export default function SamsungWatchCard({ cardData }) {
  return (
    <>
      {cardData.map((data) => (
        <div className="samsungCard" key={data.id}>
          <img src={data.image} alt="" className="heroImage" />
          <div className="footer">
            <div className="texts">
              <div className="topTexts">
                <div className="title">
                  <span>{data.miniText}</span>
                  <h4>{data.title}</h4>
                </div>
                <p className="desc">{data.desc}</p>
              </div>
            </div>
            <div className="samsungCardCustome">
              <img src={data.imageTop} alt="" className="imagesTop" />
              <img src={data.imageBottom} alt="" className="imagesBottom" />
              <p className="miniTitle">{data.miniTitle}</p>
              <h3 className="lgTitle">{data.lgTitle}</h3>
              <p className="cardDesc">{data.cardDesc}</p>
              <Link to={`/products/${data.id}`} className="button">{data.btnTitle}</Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
