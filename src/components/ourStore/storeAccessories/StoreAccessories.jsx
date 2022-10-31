import AccessoriesCard from "./AccessoriesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function StoreAccessories({
  intoTitle,
  text,
  image,
  accessoriesData,
  exploreImage,
  exploreTitle
}) {
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
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide>
          <div className="accessoriesCard">
            <div className="textIntro">
              <p className="title">{intoTitle}</p>
              <p className="text">{text}</p>
            </div>
            <img src={image} alt="" className="heroImg seeAll" />
          </div>
        </SwiperSlide>
        {accessoriesData.map((access) => (
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
            />
          </SwiperSlide>
        ))}
        <SwiperSlide data-hash="slide1">
          <div className="accessoriesCard">
            <p className="exploreTitle">{exploreTitle}</p>
            <img
              src={exploreImage}
              alt=""
              className="heroImg seeAll"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
