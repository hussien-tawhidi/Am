import { pageParts } from '../../data/SupportData'
import Title from '../homePage/header/Title'
import SupportCard from './supportParts/SupportCard'
import SupportIntroBanner from './supportParts/SupportIntroBanner'

export default function Support() {
  return (
    <div>
      <Title title="AM | We Support Your"/>
      <SupportIntroBanner/>
      <div className="container">
        <SupportCard cardData={pageParts}/>
      </div>
    </div>
  )
}
