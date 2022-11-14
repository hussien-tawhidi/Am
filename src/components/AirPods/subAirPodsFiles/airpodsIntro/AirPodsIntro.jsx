import React from 'react'
import { intorCard } from '../../../../data/AirPods'
import AirPodIntroCards from './AirPodIntroCards'

export default function AirPodsIntro() {
  return (
    <div>
        <AirPodIntroCards introData={intorCard}/>
    </div>
  )
}
