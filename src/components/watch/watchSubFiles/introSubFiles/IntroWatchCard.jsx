import React from "react";
import { Link } from "react-router-dom";

export default function IntroWatchCard({
  id,
  title,
  image,
  price,
  miniLogo,
  buyNow,
  linkTo,
}) {
  return (
    <>
      <div className="watchCardIntro">
        <div className="texts">
          <img src={miniLogo} alt="" className="miniLogo" />
          <h4 className="title">{title}</h4>
          <p className="price">{price}</p>
          <div className="buttons">
            <a href="/" className={`buyNow `}>
              {buyNow}
            </a>
            <Link to={`/products/${id}`} href="/" className="more">
              <span>{linkTo}</span>{" "}
              <span className="icon">
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </Link>
          </div>
        </div>
        <img src={image} alt="" className="heroImage" />
      </div>
    </>
  );
}
