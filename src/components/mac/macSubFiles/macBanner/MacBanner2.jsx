import React from "react";
export default function MacBanner2({ bannerThree }) {
  return (
    <div className="container">
      {bannerThree.map((banner) => (
        <div className={`macBanner-2 ${banner.macBannerTowBg}  ${banner.macBannerThreeBg}`} key={banner.id}>
          <div className="texts">
            <h6>{banner.title}</h6>
            <p>{banner.text}</p>
            <a href="/">
              {banner.linkMore} <span>{banner.icon}</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
