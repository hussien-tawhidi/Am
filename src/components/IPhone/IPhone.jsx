import {
  cardIntro2Data,
  cardIntroData,
  iphoneBannerData,
  iphoneEndingPara,
  iPhoneSubHeader,
} from "../../data/MobileData";
import SubHeaderDescktop from "../mac/macSubFiles/macHeader/SubHeaderDescktop";
import SubHeaderMobile from "../mac/macSubFiles/macHeader/SubHeaderMobile";
import IphoneCard from "./iphoneSubFiles/iphoneCardInto/IphoneCard";
import GetDailyOff from "../GetDiallyOff";
import Services from "../Services/Service";
import IphoneDeatials from "./iphoneSubFiles/iPhoneDetails/IphoneDeatials";
import WaysToBuyIphone from "./iphoneSubFiles/waysToBuyIPhone/WaysToBuyIphone";
import IPhoneCardContainer from "./iphoneSubFiles/iphoneCards/IPhoneCardContainer";
import Banner from "./iphoneSubFiles/Banner";
import IPhoneAccessories from "./iphoneSubFiles/iphoneAccessories/IPhoneAccessories";
import WayMakeAnIphone from "./iphoneSubFiles/wayMakeAnIPhone/WayMakeAnIphone";
import GetMoreOnIPhone from "./iphoneSubFiles/getMoreOniPhone/GetMoreOnIPhone";
import Title from "../homePage/header/Title";
import Footer from "../homePage/footer/Footer";
export default function IPhone() {
 
  return (
    <div className="IPhone">
      <Title title="AM | iPhone" />
      <SubHeaderDescktop subHeaderDescktop={iPhoneSubHeader} />
      <SubHeaderMobile subHeaderMobile={iPhoneSubHeader} />
      <GetDailyOff />
      {cardIntroData.map((data) => (
        <IphoneCard
          key={data.id}
          image={data.image}
          id={data.id}
          bg={data.bg}
          textClass={data.textClass}
          card3TextClass={data.card3TextClass}
          newText={data.newText}
          model={data.model}
          textGradeint={data.textGradeint}
          title={data.title}
          price={data.price}
          buyNow={data.buyNow}
          priceText={data.priceText}
        />
      ))}
      {cardIntro2Data.map((data) => (
        <IphoneCard
          key={data.id}
          image={data.image}
          id={data.id}
          bg={data.bg}
          textClass={data.textClass}
          card3TextClass={data.card3TextClass}
          newText={data.newText}
          model={data.model}
          textGradeint={data.textGradeint}
          title={data.title}
          price={data.price}
          priceText={data.priceText}
          buyNow={data.buyNow}
        />
      ))}
      <div className="container iphoneDetails">
        <IphoneDeatials />
      </div>
      <div className="iphoneContainer">
        <h1 className="mainTitle">Ways to Buy iPhone</h1>
        <WaysToBuyIphone />
        <IPhoneCardContainer />
        <Banner iphoneBanner={iphoneBannerData} />
        <IPhoneAccessories />
        <Services />
        <WayMakeAnIphone />
        <GetMoreOnIPhone />
        {iphoneEndingPara.map((data) => (
          <div className="container" key={data.id}>
            <div className="para pb-3 mb-0">
              <p>{data.text}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer pageName="iphone mobile" />
    </div>
  );
}
