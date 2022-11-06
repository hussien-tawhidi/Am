import React from "react";
import {
  finishedPara,
  flipImageBanner,
  flipVideoBanner,
  latesOnSamsungData,
  samsungCardIntroData,
  samsungCardIntroData2,
  samsungHeaderData,
} from "../../data/SamsungPhoneData";
import Title from "../homePage/header/Title";
import SubHeaderDescktop from "../mac/macSubFiles/macHeader/SubHeaderDescktop";
import SubHeaderMobile from "../mac/macSubFiles/macHeader/SubHeaderMobile";
import GetDailyOff from "../GetDiallyOff";
import IphoneCard from "../IPhone/iphoneSubFiles/iphoneCardInto/IphoneCard";
import LastOnOurStore from "../ourStore/storeSubFiles/latesonOurStore/LastOnOurStore";
import GalaxyFlipVideo from "./samsungSubFiles/GalaxyFlipVideo";
import SamsungMobile from "./samsungSubFiles/samsungSlide/SamsungMobile";
import MobileCategory from "./samsungSubFiles/mobileCategory/MobileCategory";
import SamsungServices from "./samsungSubFiles/services/SamsungServices";
export default function SamsungPhones() {
  return (
    <div>
      <Title title="AM | Samsung Smart Phones" />
      <SubHeaderDescktop subHeaderDescktop={samsungHeaderData} />
      <SubHeaderMobile subHeaderMobile={samsungHeaderData} />
      <GetDailyOff />
      <LastOnOurStore latesOnStoreData={latesOnSamsungData} />
      <IphoneCard iphoneCardInfo={samsungCardIntroData} />
      <IphoneCard iphoneCardInfo={samsungCardIntroData2} />
      <GalaxyFlipVideo samsungBannerData={flipVideoBanner} />
      <SamsungMobile />
      <MobileCategory />
      <GalaxyFlipVideo samsungBannerData={flipImageBanner} />
      <SamsungServices />
      <div className="samsungPara">
        {finishedPara.map((para) => (
          <div className="container" key={para.id}>
            <div className="para">
              <p className="para" >
                {para.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
