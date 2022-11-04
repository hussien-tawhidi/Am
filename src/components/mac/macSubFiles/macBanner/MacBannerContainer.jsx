import React from "react";
import { bannerOne, bannerTow } from "../../../../data/MacData";
import MacBanner from "./MacBanner";

export default function MacBannerContainer() {
  return (
    <div>
      {bannerOne.map((banner,index) => (
        <MacBanner
          key={index}
          subTitle={banner.subTitle}
          title={banner.title}
          text={banner.text}
          bannerOne={banner.bannerOne}
          icon={banner.icon}
          link={banner.link}
        />
      ))}
      {bannerTow.map((banner,index) => (
        <MacBanner
          key={index}
          subTitle={banner.subTitle}
          title={banner.title}
          text={banner.text}
          icon={banner.icon}
          bannerTow={banner.bannerTow}
          link={banner.link}
        />
      ))}
    </div>
  );
}
