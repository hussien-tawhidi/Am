import { watchBounose } from '../../../../data/Watch'
import WatchBounosCard from './WatchBounosCard'

export default function WatchBounosSection() {
  return (
    <div>
        <WatchBounosCard cardData={watchBounose}/>
    </div>
  )
}
