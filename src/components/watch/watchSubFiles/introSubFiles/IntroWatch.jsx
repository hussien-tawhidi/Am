import React from "react";
import { introCard } from "../../../../data/Watch";
import IntroWatchCard from "./IntroWatchCard";

export default function IntroWatch() {
  return (
    <div>
      {introCard.map((data) => (
        <IntroWatchCard
          key={data.id}
          id={data.id}
          title={data.title}
          image={data.image}
          price={data.price}
          miniLogo={data.miniLogo}
          buyNow={data.buyNow}
          linkTo={data.linkTo}
        />
      ))}
    </div>
  );
}
