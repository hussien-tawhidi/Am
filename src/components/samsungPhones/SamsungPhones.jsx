import React from "react";
import {
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
    </div>
  );
}
