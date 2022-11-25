import React from "react";
import { intorCard } from "../../../../data/AirPods";
import AirPodIntroCards from "./AirPodIntroCards";

export default function AirPodsIntro() {
  return (
    <div>
      {intorCard.map((data) => (
        <AirPodIntroCards
          key={data.id}
          id={data.id}
          title={data.title}
          generation={data.generation}
          price={data.price}
          image={data.image}
        />
      ))}
    </div>
  );
}
