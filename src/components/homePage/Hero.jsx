import {
  appleEeventCard,
  heroIntroCardData,
  heroIpadCardData,
} from "../../data/FakeData";
import Footer from "./footer/Footer";
import AirPodIntro from "./hero/AirPodIntro";
import AppleEventCard from "./hero/applEvent/AppleEventCard";
import Ipad from "./hero/Ipad";
import HomeProducts from "./hero/products/HomeProducts";
import S22Card from "./hero/s22Card/S22Card";
import Paragraph from "./Paragraph";
export default function Hero() {
  return (
    <div className="hero">
      <AppleEventCard cardData={appleEeventCard} />
      <S22Card />
      {heroIpadCardData.map((data) => (
        <Ipad
          id={data.id}
          key={data.id}
          image={data.image}
          title={data.title}
          price={data.price}
        />
      ))}
      {heroIntroCardData.map((data) => (
        <AirPodIntro
          key={data.id}
          price={data.price}
          textImage={data.textImage}
          image={data.image}
          linkTo={data.linkTo}
          title={data.title}
        />
      ))}
      <HomeProducts />
      <Paragraph />
      <Footer pageName="home" />
    </div>
  );
}
