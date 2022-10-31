import Title from "../homePage/header/Title";
import LastOnOurStore from "./latesonOurStore/LastOnOurStore";
import StoreHeader from "./ourStoreTitle/StoreHeader";
import StoreCards from "./cards/StoreCards";
import StoreMenu from "./storeMenu/StoreMenu";
import StoreAccessories from "./storeAccessories/StoreAccessories";
import {
  accessoriesData,
  appleExperieonce,
  loadAndClear,
  specialStore,
} from "../../data/ourStoreDate";
import StoreTitle from "./storUtilitis/StoreTitle";
import AppleExperience from "./appleExperience/AppleExperience";
import StoreEndingPara from "./endPoint/StoreEndingPara";
export default function OurStore() {
  return (
    <div className="">
      <Title title="Am | Our Store" />
      <StoreHeader />
      <StoreMenu />
      <LastOnOurStore />
      <StoreCards />

      <StoreTitle
        dark="Accessories."
        light=" Essentials that pair perfectly with your favorite devices."
      />
      <StoreAccessories
        accessoriesData={accessoriesData}
        intoTitle="In with the new."
        text="Discover fresh new colors for your favorite accessories."
        image="/assets/store/accessoriesIntroBanner.png"
        exploreImage="/assets/store/seeAll.png"
        exploreTitle="explore all accessories"
      />

      <StoreTitle
        dark="Loud and clear."
        light="  Unparalleled choices for rich, high-quality sound."
      />
      <StoreAccessories
        accessoriesData={loadAndClear}
        image="/assets/store/loud.jpg"
        intoTitle="Get for 6 month apple music for free"
        text="Included with purchase of select AirPods and Beats products, and HomePod mini.**"
        exploreImage="/assets/store/handsFree.png"
        exploreTitle="see all "
      />
      <StoreTitle
        dark="The Apple experience. "
        light="Do even more with Apple products and services."
      />
      <AppleExperience experience={appleExperieonce} />
      <StoreTitle
        dark="Special stores."
        light=" Exclusive savings for businesses, school, and more."
      />
      <AppleExperience experience={specialStore} />
      <StoreEndingPara/>
    </div>
  );
}
