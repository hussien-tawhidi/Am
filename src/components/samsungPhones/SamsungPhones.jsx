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
import Footer from "../homePage/footer/Footer";
export default function SamsungPhones() {
  return (
    <div>
      <Title title="AM | Samsung Smart Phones" />
      <SubHeaderDescktop subHeaderDescktop={samsungHeaderData} />
      <SubHeaderMobile subHeaderMobile={samsungHeaderData} />
      <GetDailyOff />
      {samsungCardIntroData.map((data) => (
        <IphoneCard
          key={data.id}
          id={data.id}
          bg={data.bg}
          textClass={data.textClass}
          newText={data.newText}
          model={data.model}
          textGradeint={data.textGradeint}
          title={data.title}
          price={data.price}
        />
      ))}
      {samsungCardIntroData2.map((data) => (
        <IphoneCard
          key={data.id}
          id={data.id}
          bg={data.bg}
          textClass={data.textClass}
          newText={data.newText}
          model={data.model}
          textGradeint={data.textGradeint}
          title={data.title}
          price={data.price}
        />
      ))}
      <GalaxyFlipVideo samsungBannerData={flipVideoBanner} />
      <LastOnOurStore latesOnStoreData={latesOnSamsungData} />
      <SamsungMobile />
      <MobileCategory />
      <GalaxyFlipVideo samsungBannerData={flipImageBanner} />
      <SamsungServices />
      <div className="samsungPara">
        {finishedPara.map((para) => (
          <div className="container" key={para.id}>
            <div className="para">
              <p className="para">{para.text}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer pageName="Samsung mobiles" />
    </div>
  );
}
