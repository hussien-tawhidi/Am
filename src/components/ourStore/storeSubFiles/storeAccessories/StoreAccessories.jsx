import AccessoriesCard from "./AccessoriesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
export default function StoreAccessories({
  intoTitle,
  text,
  image,
  accessoriesData,
  exploreImage,
  exploreTitle,
  bg,
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
          <div className={`accessoriesCard ${bg}`}>
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
              price={access.price}
              newText={access.new}
              bg={access.bg}
              linkTo={access.LinkTo}
            />
          </SwiperSlide>
        ))}
        <SwiperSlide data-hash="slide1">
          <Link to="/accessories" className="accessoriesCard">
            <p className="exploreTitle">{exploreTitle}</p>
            <img src={exploreImage} alt="" className="heroImg seeAll" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
