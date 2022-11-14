import { accessoriesSlide, huaweiHeaderMenu } from "../../data/Huawei";
import Title from "../homePage/header/Title";
import SubHeaderDescktop from "../mac/macSubFiles/macHeader/SubHeaderDescktop";
import SubHeaderMobile from "../mac/macSubFiles/macHeader/SubHeaderMobile";
import HuaweiCardContainer from "./huaweiSubfiles/huaweiCards/HuaweiCardContainer";
import GetDialyOff from "../GetDiallyOff";
import HuaweiPhones from "./huaweiSubfiles/phoneCards/HuaweiPhones";
import LastOnOurStore from "../ourStore/storeSubFiles/latesonOurStore/LastOnOurStore";
import HuaweiBanner from "./huaweiSubfiles/huaweiBanner/HuaweiBanner";
export default function Huawei() {
  return (
    <div className="huawie">
      <Title title="Am | Huawei Products" />
      <SubHeaderDescktop subHeaderDescktop={huaweiHeaderMenu} />
      <SubHeaderMobile subHeaderMobile={huaweiHeaderMenu} />
      <GetDialyOff />
      <HuaweiBanner/>
      <HuaweiCardContainer />
      <LastOnOurStore latesOnStoreData={accessoriesSlide} />
      <HuaweiPhones />
    </div>
  );
}
