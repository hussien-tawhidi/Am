import React from "react";

export default function MacBanner({
  subTitle,
  title,
  text,
  bannerOne,
  bannerTow,
  bannerThree,
  icon,
  link,

}) {
  return (
    <div className="container">
      <div className={`macBanners ${bannerOne} ${bannerTow} ${bannerThree}`}>
        <div className="banner-texts">
          <h6>{subTitle}</h6>
          <h2>{title}</h2>
          <p>{text}</p>
          <a href="/">
            {link}
            <span>{icon}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
