import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { kindOfSurfaceSlide } from "../../../../data/Microsoft";
import SurfaceSlideCard from "./SurfaceSlideCard";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function SurfaceSlide() {
  return (
    <div className="">
      <div className="container">
        <div className="microsoftLgTitle">
          <h2>Surface lineup</h2>
        </div>
      </div>
      <Swiper
        spaceBetween={10}
        hashNavigation={{
          watchState: true,
        }}
        className="mySwiper"
        breakpoints={{
          300: {
            slidesPerView: 1,
            centeredSlides: true,
          },

          500: {
            centeredSlides: true,
            slidesPerView: 2,
          },

          768: {
            centeredSlides: true,
            slidesPerView: 3,
          },

          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {kindOfSurfaceSlide.map((data) => (
          <SwiperSlide>
            <SurfaceSlideCard
              key={data.id}
              image={data.image}
              title={data.title}
              text={data.text}
              learnMore={data.learnMore}
              id={data.id}
              price={data.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
