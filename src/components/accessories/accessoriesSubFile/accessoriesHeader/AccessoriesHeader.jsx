import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

export default function AccessoriesHeader({subHeaderMobile}) {
  return (
    <div className="mobieMacHeader showHeader">
    <Swiper
      className="mySwiper"
      slidesPerView={8}
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        800: {
          slidesPerView: 6,
        },
        600: {
          slidesPerView: 5,
        },
        400: {
          slidesPerView: 4,
        },
        300: {
          slidesPerView: 3,
        },
      }}
    >
      {subHeaderMobile.map((head) => (
        <SwiperSlide key={head.id}>
          <div className="singleHeader">
            <img src={head.image} alt="" className="subHeaderImg" />
            <div className="text">
              <p>{head.title}</p>
              <span>{head.newText}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}
