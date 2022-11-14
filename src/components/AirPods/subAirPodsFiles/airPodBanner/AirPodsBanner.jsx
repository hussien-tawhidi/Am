import { airpodsBanner } from '../../../../data/AirPods'
import AirPodsBannerCard from './AirPodsBannerCard'

export default function AirPodsBanner() {
  return (
    <div>
      <AirPodsBannerCard cardBannerData={airpodsBanner}/>
    </div>
  )
}
