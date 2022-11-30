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
  kindOfSurfaceSlide,
  SurfaceNine1,
  SurfaceNine2,
} from "../../data/Microsoft";
import {
  accessoriesSlide,
  huaweiCardOne,
  huaweiCardPhone,
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
    ...SurfaceNine2,
    ...SurfaceNine1,
    ...kindOfSurfaceSlide,
    ...audioAccessories,
    ...allPhonesAccessories,
    ...forBusiness,
    ...huaweiCardOne,
    ...accessoriesSlide,
    ...huaweiCardPhone,
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
      <div className="container">
        <ImageGallery galleryData={post.images} />
        <ProductsDecrpitions />
          <p className="box-title">what's on the box</p>
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
