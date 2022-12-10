import { accessoriesSlide, huaweiHeaderMenu } from "../../data/Huawei";
import Title from "../homePage/header/Title";
import SubHeaderDescktop from "../mac/macSubFiles/macHeader/SubHeaderDescktop";
import SubHeaderMobile from "../mac/macSubFiles/macHeader/SubHeaderMobile";
import HuaweiCardContainer from "./huaweiSubfiles/huaweiCards/HuaweiCardContainer";
import HuaweiPhones from "./huaweiSubfiles/phoneCards/HuaweiPhones";
import LastOnOurStore from "../ourStore/storeSubFiles/latesonOurStore/LastOnOurStore";
import HuaweiBanner from "./huaweiSubfiles/huaweiBanner/HuaweiBanner";
import Footer from "../homePage/footer/Footer";
export default function Huawei() {
  return (
    <div className="huawie">
      <Title title="Am | Huawei Products" />
      <SubHeaderDescktop subHeaderDescktop={huaweiHeaderMenu} />
      <SubHeaderMobile subHeaderMobile={huaweiHeaderMenu} />
      <HuaweiBanner/>
      <HuaweiCardContainer />
      <LastOnOurStore accessoriesSlide={accessoriesSlide}/>
      <HuaweiPhones />
      <Footer pageName="huawei products"/>
    </div>
  );
}
