import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import StoryCard from "./StoryCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function Story({homeStoryData}) {
  return (
    <div className="story">
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
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {homeStoryData.map((data) => (
          <SwiperSlide data-hash="slide1">
            <StoryCard
              key={data.id}
              image={data.image}
              title={data.title}
              text={data.text}
              time={data.time}
              id={data.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
