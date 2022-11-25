import AccessoriesCard from "../../../ourStore/storeSubFiles/storeAccessories/AccessoriesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function SamsungMobileCard({ samsungMobile }) {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        hashNavigation={{
          watchState: true,
        }}
        className="mySwiper"
        breakpoints={{
          300: {
            slidesPerView: 2,
          },

          768: {
            slidesPerView: 3,
          },

          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {samsungMobile.map((access) => (
          <SwiperSlide data-hash="slide1" key={access.id}>
            <AccessoriesCard
              title={access.title}
              image={access.image}
              color1={access.color1}
              color2={access.color2}
              color3={access.color3}
              color4={access.color4}
              color5={access.color5}
              color6={access.color6}
              price={access.price}
              newText={access.new}
              bg={access.bg}
              linkTo={access.linkTo}
              id={access.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
