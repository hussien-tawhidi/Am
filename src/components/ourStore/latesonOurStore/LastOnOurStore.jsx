import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { latesOnStoreData } from "../../../data/ourStoreDate";
import LatesOnStoreCard from "./LatestOnStoreCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import StoreTitle from "../storUtilitis/StoreTitle";
import { Autoplay } from "swiper";

export default function LatesOnStore() {
  return (
    <div className="latesOnStore">
      <StoreTitle dark="The latests." light="Take a look at what’s new, right now."/>
      <Swiper
        centeredSlides={true}
        className="mySwiper"
    
     
        breakpoints={{
         
          300: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {latesOnStoreData.map((lates) => (
          <SwiperSlide data-hash="slide1" key={lates.id}>
            <LatesOnStoreCard
              model={lates.model}
              image={lates.image}
              price={lates.priceDetials}
              slogan={lates.slogan}
              bg={lates.bg}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
