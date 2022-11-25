import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../homePage/footer/Footer";
import { heroAirpod, heroCardData, heroIpadCardData } from "../../data/FakeData";
import {
  accessoriesData,
  latesOnStoreData,
  loadAndClear,
} from "../../data/ourStoreDate";
import { iphoneAccessoriesData, iphoneDetails } from "../../data/MobileData";
import {
  filterSamsungMobiel,
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
  ];
  const post = newA.find((p) => p.id.toString() === path);
  return (
    <div className="products-detials">
      <p>{post.title}</p>
      <img src={post.image} alt="" />
      <Footer pageName="products detials" />
    </div>
  );
}
