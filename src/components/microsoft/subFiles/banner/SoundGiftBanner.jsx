import React from "react";
import { soundBanner } from "../../../../data/Microsoft";
import SoundGiftBannerCard from "./SoundGiftBannerCard";

export default function SoundGiftBanner() {
  return (
    <div className="soundGiftbanner">
      {soundBanner.map((data) => (
        <SoundGiftBannerCard
          key={data.id}
          id={data.id}
          image={data.image}
          title={data.title}
          text={data.text}
          earbuds={data.earbuds}
          headPhone={data.headPhone}
          price={data.price}
          heroImage={data.heroImage}
        />
      ))}
    </div>
  );
}
