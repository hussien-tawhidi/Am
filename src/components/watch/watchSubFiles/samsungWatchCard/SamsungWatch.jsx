import React from 'react'
import { samsungCardData } from '../../../../data/Watch'
import SamsungWatchCard from './SamsungWatchCard'

export default function SamsungWatch() {
  return (
    <div>
        <SamsungWatchCard cardData={samsungCardData}/>
    </div>
  )
}
