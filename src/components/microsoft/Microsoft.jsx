import {
  allPhonesAccessories,
  audioAccessories,
  endingPart,
  forBusiness,
  microsoftSubHeader,
  surfaceVideoBanner,
} from "../../data/Microsoft";
import Title from "../homePage/header/Title";
import SubHeaderDescktop from "../mac/macSubFiles/macHeader/SubHeaderDescktop";
import SubHeaderMobile from "../mac/macSubFiles/macHeader/SubHeaderMobile";
import SurfaceIntro from "./subFiles/surface9Intro/SurfaceIntro";
import GetDailyOff from "../GetDiallyOff";
import SurfaceSlide from "./subFiles/slides/SurfaceSlide";
import GalaxyFlipVideo from "../samsungPhones/samsungSubFiles/GalaxyFlipVideo";
import AudioAccessories from "./subFiles/slides/AudioAccessories";
import SoundGiftBanner from "./subFiles/banner/SoundGiftBanner";
export default function Microsoft() {
  return (
    <div>
      <Title title="AM | Microsoft Products" />
      <SubHeaderDescktop subHeaderDescktop={microsoftSubHeader} />
      <SubHeaderMobile subHeaderMobile={microsoftSubHeader} />
      <GetDailyOff />
      <SurfaceIntro />
      <GalaxyFlipVideo samsungBannerData={surfaceVideoBanner} />
      <SoundGiftBanner/>
      <SurfaceSlide />
      <AudioAccessories
        title=" Teams Certified Devices"
        numberOfproduct="Showing 1 through 4 of 10 itemsShowing 1 through 4 of 10 items"
        audioSlideData={audioAccessories}
      />
      <AudioAccessories
        title=" All phones and accessories"
        numberOfproduct="Showing 1 through 4 of 6 items"
        audioSlideData={allPhonesAccessories}
      />
      <AudioAccessories
        title="for business"
        // numberOfproduct="Showing 1 through 4 of 6 items"
        audioSlideData={forBusiness}
      />
       {endingPart.map((para) => (
        <div className="container" key={para.id} >
          <div className="para">
          <p>{para.text}</p>
        </div>
        </div>
      ))}
    </div>
  );
}
