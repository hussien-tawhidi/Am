import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import Footer from "../homePage/footer/Footer";
import {
  heroAirpod,
  heroCardData,
  heroIntroCardData,
  heroIpadCardData,
} from "../../data/FakeData";
import {
  accessoriesData,
  latesOnStoreData,
  loadAndClear,
} from "../../data/ourStoreDate";
import {
  cardIntro3Data,
  iphoneAccessoriesData,
  iphoneDetails,
} from "../../data/MobileData";
import {
  filterSamsungMobiel,
  latesOnSamsungData,
  samsungCardIntroData,
  samsungCardIntroData2,
  samsungMobile,
} from "../../data/SamsungPhoneData";
import {
  allPhonesAccessories,
  audioAccessories,
  forBusiness,
  SurfaceNine1,
} from "../../data/Microsoft";
import {
  accessoriesSlide,
  huaweiCardOne,
} from "../../data/Huawei";
import { airPodsHeader, airpodSlide } from "../../data/AirPods";
import { accessoriesProducts } from "../../data/Accessories";
import { setAddItemToCard } from "../../store/cardSlice";
import {
  cardIntroData,
  cardIntroData1,
  noteBookeDetailsData,
} from "../../data/MacData";
import { watchesHotSells } from "../../data/Watch";
import ImageGallery from "./ImageGallery";
import ProductsDecrpitions from "./ProductsDecrpitions";
import ProdcutsAccessories from "./ProdcutsAccessories";
import Story from "../homePage/hero/story/Story";
export default function ProductsDetails() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const newA = [
    ...heroCardData,
    ...accessoriesData,
    ...loadAndClear,
    ...heroIpadCardData,
    ...heroAirpod,
    ...latesOnStoreData,
    ...iphoneDetails,
    ...iphoneAccessoriesData,
    ...samsungCardIntroData2,
    ...samsungCardIntroData,
    ...samsungMobile,
    ...filterSamsungMobiel,
    ...SurfaceNine1,
    ...audioAccessories,
    ...allPhonesAccessories,
    ...forBusiness,
    ...huaweiCardOne,
    ...accessoriesSlide,
    ...airpodSlide,
    ...airPodsHeader,
    ...accessoriesProducts,
    ...heroIntroCardData,
    ...cardIntroData1,
    ...cardIntroData,
    ...noteBookeDetailsData,
    ...cardIntro3Data,
    ...latesOnSamsungData,
    ...watchesHotSells,
  ];
  const post = newA.find((p) => p.id.toString() === path);

  const id = post.id;
  const title = post.title;
  const image = post.image;
  const price = post.price;

  const dispatch = useDispatch();
  const onAddToCard = () => {
    const item = { id, title, image, price };
    dispatch(setAddItemToCard(item));
  };
  return (
    <div className="products-detials">
      {/* ************************************************** */}
      <div className="top-menu">
        <h6 className="left-menu">{post.name}</h6>
        <div className="right-menu">
          <p className="back">
            <span>go to all</span>{" "}
            <Link to={post.mainPageLinks}>{post.mainPageName}</Link>
          </p>
          <p className="price">${post.price}</p>
          <div className="buyNow" onClick={onAddToCard}>
            buy
          </div>
        </div>
      </div>
      {/* ************************************************** */}
      <div className="">
        <ImageGallery
          galleryData={post.images}
          detialTitle={post.detialTitle}
          newText={post.newText}
          price={post.price}
          desc1={post.desc1}
        />
        <ProductsDecrpitions
          partOneImage={post.partOneImage}
          partOneTitle={post.partOneTitle}
          partOneLogo={post.partOneLogo}
          partOneText={post.partOneText}
          videoBg={post.videoBg}
          imageBg={post.imageBg}
          videoTitle1={post.videoTitle1}
          videoTitle2={post.videoTitle2}
          videoTitle3={post.videoTitle3}
          photos1={post.photos1}
          photos2={post.photos2}
          photos3={post.photos3}
        />

        <div className="boxImageContent">
          <ProdcutsAccessories boxImage={post.boxImage} />
        </div>
        <p className="box-title">story about </p>
        <Story homeStoryData={post.story} />
      </div>
      <Footer pageName="products detials" />
    </div>
  );
}
