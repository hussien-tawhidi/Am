import AccessoriesCard from "../storeAccessories/AccessoriesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function AppleExperience({ experience }) {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        hashNavigation={{
          watchState: true,
        }}
        className="mySwiper"
        breakpoints={{
          300: {
            slidesPerView: 2,
          },

          1600: {
            slidesPerView: 3,
          },
        }}
      >
        {experience.map((e,index) => (
          <SwiperSlide key={index}>
            <AccessoriesCard
              title={e.title}
              image={e.image}
              price={e.price}
              newText={e.new}
              experienceClass={e.experienceClass}
              lightBg={e.lightBg}
              upText={e.upText}
              appleSpecailPr={e.appleSpecailPr}
              textLightColor={e.textLightColor}
              darkBg={e.darkBg}
              darkerBg={e.darkerBg}
              bg={e.bgLight}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
