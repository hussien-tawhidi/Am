import { airPodEndPara, airPodsHeader, airpodSlide } from "../../data/AirPods";
import Title from "../homePage/header/Title";
import SubHeaderDescktop from "../mac/macSubFiles/macHeader/SubHeaderDescktop";
import SubHeaderMobile from "../mac/macSubFiles/macHeader/SubHeaderMobile";
import GetDaily from "../GetDiallyOff";
import AirPodsIntro from "./subAirPodsFiles/airpodsIntro/AirPodsIntro";
import BenefitsOfAirpods from "./subAirPodsFiles/benefitsOfAirPods/BenefitsOfAirpods";
import AirPodsBanner from "./subAirPodsFiles/airPodBanner/AirPodsBanner";
import StoreAccessories from "../ourStore/storeSubFiles/storeAccessories/StoreAccessories";
import Services from "../Services/Service";
import AirPodsBests from "./subAirPodsFiles/bests/AirPodsBests";
import Footer from "../homePage/footer/Footer";
export default function Airpods() {
  return (
    <div>
      <Title title="AM | AirPods" />
      <SubHeaderDescktop subHeaderDescktop={airPodsHeader} />
      <SubHeaderMobile subHeaderMobile={airPodsHeader} />
      <GetDaily />
      <AirPodsIntro />
      <BenefitsOfAirpods />
      <AirPodsBanner />
      <div className="airPodSlide">
        <h5 className="hotsell">hot sell in this month</h5>
        <StoreAccessories
          accessoriesData={airpodSlide}
          intoTitle="See all AirPods"
          text="Discover fresh new colors for your favorite one..."
          image="/assets/store/accessoriesIntroBanner.png"
          exploreImage="/assets/store/seeAll.png"
          exploreTitle="explore all accessories"
        />
      </div>
      <AirPodsBests />
      <Services />

      <div className="container">
        {airPodEndPara.map((para) => (
          <div className="para" key={para.id}>
            <p>{para.title}</p>
          </div>
        ))}
      </div>
      <Footer pageName="airpods" />
    </div>
  );
}
