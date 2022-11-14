import React from 'react'
import { introCard } from '../../../../data/Watch'
import IntroWatchCard from './IntroWatchCard'

export default function IntroWatch() {
  return (
    <div>
        <IntroWatchCard introData={introCard}/>
    </div>
  )
}
