import {
  appleEeventCard,
  heroIntroCardData,
  heroIpadCardData,
} from "../../data/FakeData";
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
      <S22Card/>
      <AirPodIntro cardData={heroIntroCardData} />
      <Ipad cardData={heroIpadCardData} />
      <HomeProducts />
      <Paragraph />
    </div>
  );
}
