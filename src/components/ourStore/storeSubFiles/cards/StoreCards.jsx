import React from "react";
import StoreTitle from "../storUtilitis/StoreTitle";
import Car from "../storUtilitis/icon/Car";
import Pocket from "../storUtilitis/icon/Pocket";
import TradeMark from "../storUtilitis/icon/TradMark";
import LoughEmoji from "../storUtilitis/icon/LoughEmoji";
import Apple from "../storUtilitis/icon/Apple";
import Gift from "../storUtilitis/icon/Gift";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
export default function StoreCards() {
  return (
    <div className="mainStorCardContainer">
      <StoreTitle
        dark="The Apple Store difference"
        light="Even more reasons to shop with us."
      />

      <div className="storeMenu">
        <Swiper
          spaceBetween={30}
          className="mySwiper"
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            300: {
              slidesPerView: 2,
            },  
            500: {
              slidesPerView: 3,
            },  
            700: {
              slidesPerView: 4,
            },  
            1200: {
              slidesPerView: 6,
            },
          }}
        >
          <SwiperSlide data-hash="slide1">
            <Car />
          </SwiperSlide>
          <SwiperSlide data-hash="slide1">
            {" "}
            <TradeMark />
          </SwiperSlide>
          <SwiperSlide data-hash="slide1">
            <Pocket />
          </SwiperSlide>
          <SwiperSlide data-hash="slide1">
            {" "}
            <LoughEmoji />
          </SwiperSlide>
          <SwiperSlide data-hash="slide1">
            {" "}
            <Apple />
          </SwiperSlide>
          <SwiperSlide data-hash="slide1">
            {" "}
            <Gift />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
