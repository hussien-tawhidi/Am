import React from "react";
import { applWatchVideo, endingWatchPara, watchesApp, watchHeaderData } from "../../data/Watch";
import GetDiallyOff from "../GetDiallyOff";
import Title from "../homePage/header/Title";
import SubHeaderDescktop from "../mac/macSubFiles/macHeader/SubHeaderDescktop";
import SubHeaderMobile from "../mac/macSubFiles/macHeader/SubHeaderMobile";
import AppleS8Watch from "./watchSubFiles/apples8Watch/AppleS8Watch";
import IntroWatch from "./watchSubFiles/introSubFiles/IntroWatch";
import SamsungWatch from "./watchSubFiles/samsungWatchCard/SamsungWatch";
import GalaxyFlipVideo from "../samsungPhones/samsungSubFiles/GalaxyFlipVideo"
import HotSells from "./watchSubFiles/hotSells/HotSells";
import WatchBounosSection from "./watchSubFiles/bounos/WatchBounosSection";
import WatchesApp from "./watchSubFiles/watchesApps/WatchesApp";
import Services from "../Services/Service"
export default function Watch() {
  return (
    <div>
      <Title title="AM | Watches" />
      <SubHeaderDescktop subHeaderDescktop={watchHeaderData} />
      <SubHeaderMobile subHeaderMobile={watchHeaderData} />
      <GetDiallyOff />
      <IntroWatch />
      <SamsungWatch/>
      <AppleS8Watch/>
      <GalaxyFlipVideo samsungBannerData={applWatchVideo} />
      <HotSells/>
      <WatchBounosSection/>
      <WatchesApp cardData={watchesApp}/>
      <Services/>
      <div className="watchesPara">
      {endingWatchPara.map((data) => (
          <div className="container" key={data.id}>
            <div className="para">
              <p>{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
