import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function SurfaceSlideCard({ surfaceSlideData }) {
  return (
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
      {surfaceSlideData.map((surface) => (
        <SwiperSlide key={surface.id}>
          <div className="single-surafce">
            <img src={surface.image} alt="" />
            <div className="texts">
              <div>
                <h4>{surface.title}</h4>
                <p>{surface.text}</p>
              </div>
              <a href="/">
                {surface.learnMore}{" "}
                <span>
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
