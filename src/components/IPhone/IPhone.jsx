import React from "react";
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
export default function IPhone() {
  return (
    <div className="IPhone">
      <SubHeaderDescktop subHeaderDescktop={iPhoneSubHeader} />
      <SubHeaderMobile subHeaderMobile={iPhoneSubHeader} />
      <GetDailyOff />
      <IphoneCard iphoneCardInfo={cardIntroData} />
      <IphoneCard iphoneCardInfo={cardIntro2Data} />
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
    </div>
  );
}
