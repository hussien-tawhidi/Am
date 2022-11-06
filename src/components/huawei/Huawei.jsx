import { huaweiHeaderMenu } from '../../data/Huawei'
import Title from '../homePage/header/Title'
import SubHeaderDescktop from '../mac/macSubFiles/macHeader/SubHeaderDescktop'
import SubHeaderMobile from '../mac/macSubFiles/macHeader/SubHeaderMobile'
import HuaweiCardContainer from './huaweiSubfiles/huaweiCards/HuaweiCardContainer'
import GetDialyOff from "../GetDiallyOff"
export default function Huawei() {
  return (
    <div>
      <Title title="Am | Huawei Products"/>
      <SubHeaderDescktop subHeaderDescktop={huaweiHeaderMenu} />
      <SubHeaderMobile subHeaderMobile={huaweiHeaderMenu} />
      <GetDialyOff/>
      <HuaweiCardContainer/>
    </div>
  )
}
