import React from "react";
import { menu } from "../../../../data/ourStoreDate";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
export default function StoreMenu() {
  return (
    <div className="storeMenu">
      <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        // centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          300: {
            slidesPerView: 4,
          },
          580: {
            slidesPerView: 6,
          },
          768: {
            slidesPerView: 6,
          },
          992: {
            slidesPerView: 8,
          },
          1200: {
            slidesPerView: 8,
          },
        }}
      >
        {menu.map((men) => (
          <SwiperSlide data-hash="slide1" key={men.id}>
            <div >
              <img src={men.image} alt="" className="storeImages"/>
              <p>{men.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
