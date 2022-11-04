import React from "react";
import { heroCardData } from "../../../../data/FakeData";
import HeroProductsCard from "./HeroProductsCard";

export default function HomeProducts() {
  return (
    <div className="homeProducts">
      <div className="row">
        {heroCardData.map((hero,index) => (
          <div className="col-md-6 col-12" key={index}>
        
              <HeroProductsCard
                heroImg={hero.image}
                title={hero.title}
                logo={hero.logo}
                slogan={hero.slogan}
              />
         
          </div>
        ))}
      </div>
    </div>
  );
}
