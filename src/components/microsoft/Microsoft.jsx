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
import SurfaceSlide from "./subFiles/slides/SurfaceSlide";
import GalaxyFlipVideo from "../samsungPhones/samsungSubFiles/GalaxyFlipVideo";
import AudioAccessories from "./subFiles/slides/AudioAccessories";
import SoundGiftBanner from "./subFiles/banner/SoundGiftBanner";
import Footer from "../homePage/footer/Footer";
import IntroBg from "./subFiles/hero/IntroBg";
export default function Microsoft() {
  return (
    <div>
      <Title title="AM | Microsoft Products" />
      <SubHeaderDescktop subHeaderDescktop={microsoftSubHeader} />
      <SubHeaderMobile subHeaderMobile={microsoftSubHeader} />
      <IntroBg/>
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
        audioSlideData={forBusiness}
      />
       {endingPart.map((para) => (
        <div className="container" key={para.id} >
          <div className="para">
          <p>{para.text}</p>
        </div>
        </div>
      ))}
      <Footer pageName="microsoft products"/>
    </div>
  );
}
