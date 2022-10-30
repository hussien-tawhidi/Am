import React from "react";
import AirPodIntro from "./hero/AirPodIntro";
import Ipad from "./hero/Ipad";
import HomeProducts from "./hero/products/HomeProducts";
import Paragraph from "./Paragraph";

export default function Hero() {
  return (
    <div className="hero">
      <AirPodIntro />
      <Ipad />
      <HomeProducts />
      <Paragraph />
    </div>
  );
}
