import React from 'react'
import { watchesHotSells } from '../../../../data/Watch'
import HotSellsCard from './HotSellsCard'

export default function HotSells() {
  return (
    <div className='watchesHotSells'>
      <div className="lgTitle">
        <h2>hot sell in this month</h2>
      </div>
        <HotSellsCard cardData={watchesHotSells}/>
    </div>
  )
}
