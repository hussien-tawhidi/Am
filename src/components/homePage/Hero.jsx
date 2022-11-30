import {
  appleEeventCard,
  heroIntroCardData,
  homeStoryData,
} from "../../data/FakeData";
import GetDialy from "../GetDiallyOff";
import Footer from "./footer/Footer";
import AirPodIntro from "./hero/AirPodIntro";
import AppleEventCard from "./hero/applEvent/AppleEventCard";
import HomeProducts from "./hero/products/HomeProducts";
import S22Card from "./hero/s22Card/S22Card";
import Paragraph from "./Paragraph";
import Story from "./hero/story/Story";
export default function Hero() {
  return (
    <div className="hero">
      <GetDialy />
      {heroIntroCardData.map((data) => (
        <AirPodIntro
          key={data.id}
          price={data.price}
          textImage={data.textImage}
          image={data.image}
          linkTo={data.linkTo}
          title={data.title}
          id={data.id}
        />
      ))}
      <HomeProducts />
      <AppleEventCard cardData={appleEeventCard} />
      <S22Card />
      <Story homeStoryData={homeStoryData} />
      <Paragraph />
      <Footer pageName="home" />
    </div>
  );
}
